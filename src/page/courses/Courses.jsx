import { useEffect } from "react";
import { useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // load data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses");
        const data = await res.json();
        //    console.log(data);
        setCourse(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered =
      selectCategory === "all"
        ? course.filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        : course
            .filter((item) => item.category === selectCategory)
            .filter((item) =>
              item.name.toLowerCase().includes(searchInput.toLowerCase())
            );
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [selectCategory, searchInput, course]);

  // filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? course
        : course.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectCategory(category);
    setCurrentPage(1);
  };

  // show all data
  const showAll = () => {
    setFilteredItems(course);
    setSelectCategory("all");
    setCurrentPage(1);
  };

  // sorting based a-z , z-a , low to high
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // for search
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      {/* banner text */}
      <div
        className="hero min-h-[80vh] mb-12"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/z6Fz8Z2/jess-bailey-Bg14l3h-SAs-A-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="space-y-7 ">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug text-black">
              Explore the Wonders Of
              <span className="text-first"> Enlightening Courses!</span>
            </h2>
            <p className="text-black">
              Where Every Lesson Unfolds a Tale of Academic Excellence and
              Dedicated Learning
            </p>
            <div className="my-4">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchInput}
                onChange={handleSearchChange}
                className="border text-black p-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* courses */}
      <div className="section-container mt-16">
        {/* btns and sorts */}
        <div className="flex flex-col md:flex-row space-y-3 md:justify-between items-center">
          {/* all category data */}
          <div className="flex justify-start items-center gap-8 flex-wrap font-medium my-3">
            <button
              onClick={showAll}
              className={selectCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("programming")}
              className={selectCategory === "programming" ? "active" : ""}
            >
              Programming
            </button>
            <button
              onClick={() => filterItems("engineering")}
              className={selectCategory === "engineering" ? "active" : ""}
            >
              Engineering
            </button>
            <button
              onClick={() => filterItems("business")}
              className={selectCategory === "business" ? "active" : ""}
            >
              Business
            </button>
            <button
              onClick={() => filterItems("physics")}
              className={selectCategory === "physics" ? "active" : ""}
            >
              Physics
            </button>
            <button
              onClick={() => filterItems("chemistry")}
              className={selectCategory === "chemistry" ? "active" : ""}
            >
              Chemistry
            </button>
            <button
              onClick={() => filterItems("law")}
              className={selectCategory === "law" ? "active" : ""}
            >
              Law
            </button>
          </div>

          {/* sorting based on filtering */}
          <div className="flex justify-end items-center mb-4">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            {/* sorting options */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high-to-low</option>
            </select>
          </div>
        </div>

        {/* classes card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-16">
          {currentItems?.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* pagination section */}
      <div className="flex justify-center items-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            className={`px-3 py-1 mx-1 rounded-full ${
              currentPage === index + 1 ? "bg-first text-white" : "bg-gray-200"
            }`}
            key={index + 1}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Courses;
