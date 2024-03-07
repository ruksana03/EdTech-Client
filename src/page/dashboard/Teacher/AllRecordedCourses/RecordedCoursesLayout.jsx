/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../../../../components/Cards";
import CoursesSkeleton from "../../../courses/CoursesSkeleton";
import axiosSecure from "../../../../api/axiosSecure";
import RecordedClassCard from "./RecordedClassCard";

const RecordedCoursesLayout = () => {
    const [course, setCourse] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectCategory, setSelectCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [isLoadig, setIsLoading] = useState(true);
  
    // load data
    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const res = await axiosSecure.get("/courses");
          const data = res.data;
          setCourse(data);
          setFilteredItems(data);
          setIsLoading(false);
        } catch (error) {
          // console.log(error);
        }
      };
      fetchData();
    }, []);
  
    useEffect(() => {
      const filtered =
        selectCategory === "all"
          ? course.filter((item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase())
          )
          : course
            .filter((item) => item.category === selectCategory)
            .filter((item) =>
              item.title.toLowerCase().includes(searchInput.toLowerCase())
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
  
  
    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems?.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
    return (
        <div>
        {/* courses */}
        <div className="  ">
          {/* btns and sorts */}
          <div className="">
            {/* all category data */}
            <div className="p__cormorant">
              <button
                onClick={showAll}
                className={selectCategory === "all" ? "btn-style mx-2" : "text-white btn-style"}
              >
                All
              </button>
              <button
                onClick={() => filterItems("programming")}
                className={selectCategory === "programming" ? "active" : "btn-style mx-2"}
              >
                Programming
              </button>
              <button
                onClick={() => filterItems("engineering")}
                className={selectCategory === "engineering" ? "active" : "btn-style mx-2"}
              >
                Engineering
              </button>
              <button
                onClick={() => filterItems("business")}
                className={selectCategory === "business" ? "active" : "btn-style mx-2"}
              >
                Business
              </button>
              <button
                onClick={() => filterItems("physics")}
                className={selectCategory === "physics" ? "active" : "btn-style mx-2"}
              >
                Physics
              </button>
              <button
                onClick={() => filterItems("chemistry")}
                className={selectCategory === "chemistry" ? "active" : "btn-style mx-2"}
              >
                Chemistry
              </button>
              <button
                onClick={() => filterItems("law")}
                className={selectCategory === "law" ? "active" : "btn-style mx-2"}
              >
                Law
              </button>
              <button
                onClick={() => filterItems("5-10")}
                className={selectCategory === "5-10" ? "active" : "btn-style mx-2"}
              >
                5-10
              </button>
              <button
                onClick={() => filterItems("hsc")}
                className={selectCategory === "hsc" ? "active" : "btn-style mx-2"}
              >
                HSC
              </button>
            </div>
  
            {/* sorting based on filtering */}
     
          </div>
  
          {/* classes card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-16">
            {currentItems?.map((item) => (
              <RecordedClassCard key={item._id} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {
              isLoadig && <CoursesSkeleton cards={8} />
            }
          </div>
        </div>
  
        {/* pagination section */}
        <div className="flex justify-center items-center my-8">
  
          {Array.from({
            length: Math.ceil(filteredItems.length / itemsPerPage),
          }).map((_, index) => (
            <button
              className={`px-3 py-1 mx-1 rounded-full ${currentPage === index + 1 ? "bg-first text-black" : "bg-gray-200"
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

export default RecordedCoursesLayout;