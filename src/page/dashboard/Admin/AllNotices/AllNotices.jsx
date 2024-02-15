import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOff } from "react-icons/io";
import useNotices from "./../../../../Hooks/useNotices";
import NoticeTable from "./NoticeTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import NoticeModal from "./NoticeModal";

const AllNotices = () => {
  const [notices, refetch] = useNotices();
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const [notices2, setNotices2] = useState([]);
  const [dateFilter, setDateFilter] = useState("");
  const [searchNotices, setSearchNotices] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [settingPage, setSettingPage] = useState(8);
  const [itemsPerPage, setItemPerPage] = useState(settingPage);
  const [filteredNotices, setFilteredNotices] = useState([]);
  // console.log(notices);

  useEffect(() => {
    setNotices2(notices);
    setFilteredNotices(notices);
    const parseSettingPage = parseInt(settingPage);
    setItemPerPage(parseSettingPage);
  }, [refetch, settingPage, notices]);

  useEffect(() => {
    const searchItem = notices2.filter((item) =>
      item.title.toLowerCase().includes(searchNotices.toLowerCase())
    );
    setFilteredNotices(searchItem);
  }, [notices2, searchNotices]);

  const handleAllNotices = () => {
    setFilteredNotices(notices)
  }

  useEffect(() => {
    if (dateFilter) {
      const filterDateItem = notices2.filter((item) =>
        item.date.toLowerCase().includes(dateFilter.toLowerCase())
      );
      setFilteredNotices(filterDateItem);
      // console.log(filterDateItem);
    }
  }, [notices2, dateFilter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotices
    .slice(indexOfFirstItem, indexOfLastItem)
    .reverse();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/notice/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `$notice has been deleted.`,
              icon: "success",
            });
            // refetch();
            const remaining = currentItems.filter((item) => item._id !== id);
            console.log(remaining);
            setFilteredNotices(remaining);
          }
        });
      }
    });
  };

  return (
    <div className="section-container w-full min-h-[calc(100vh-40px)] -z-10">
      <NoticeModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} />
      <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row shadow-md border my-8 p-5 gap-2">
        <div>
          <h1 className="text-base p__cormorant font-bold">
            Important Notice Provide Here...
          </h1>
          <p className="p__opensans">
            Innavated Education for Admin
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 rounded transition-all duration-200 bg-transparent border border-first text-first hover:bg-first hover:text-white font-medium"
          >
            Create Notice
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row lg:flex-row justify-start gap-8 w-full my-5 px-5">
        <button onClick={handleAllNotices} className="btn-style">All</button>
        <select
          onChange={() => setDateFilter(event.target.value)}
          className=" w-44 border bg-black text-white border-gray-300 focus:outline-none focus:border-first leading-tight input"
          name="select"
        >
          <option disabled selected>
            Date filter
          </option>
          {filteredNotices?.map((noti) => (
            <option key={noti?._id} defaultValue={noti?.date}>
              {noti?.date?.slice(0, 10)}
            </option>
          ))}
        </select>
        <div className="relative w-full">
          <input
            type="text"
            onChange={() => setSearchNotices(event.target.value)}
            className="pl-10  bg-black text-white text-[17px] input border-2 border-gray-200 rounded w-full md:w-2/3 lg:w-1/3 py-4 px-4 leading-tight focus:outline-none focus:border-first"
            name="search"
            placeholder=" type here..."
          />{" "}
          <MdOutlineSearch className="absolute top-2 left-1 text-3xl" />{" "}
        </div>
      </div>
      <div className="px-5 my-3">
        <h1 className="my-3 text-xl md:text-2xl lg:text-3xl  font-alt text-first ">
          Show Previous Notice : <span> {filteredNotices?.length}</span>

        </h1>
        <hr className="w-[180px] md:w-[200px] lg:w-[260px] h-1 bg-first " />
      </div>

      <div className="my-10 z-0 w-full h-auto">
        <div className="w-full overflow-x-auto overflow-y-hidden ">
          <table className="table border w-full h-full overflow-x-scroll">
            {/* head */}
            <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
              <tr >
                <th className="border w-auto md:w-8 lg:w-8"></th>
                <th className="border w-auto md:w-8 lg:w-8"></th>
                <th className="border w-auto md:w-32 lg:w-32">Person</th>
                <th className="border text-center">Title</th>
                <th className="border w-32">Date</th>
                <th className="border  w-28">Time</th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody className=" z-0">
              {currentItems?.length > 0 &&
                currentItems.map((notice) => (
                  <NoticeTable
                    key={notice?._id}
                    notice={notice}
                    handleDelete={handleDelete}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {currentItems?.length <= 0 && (
        <div className="text-4xl w-full h-[30vh] flex items-center justify-center gap-2">
          <h1>
            Here, No Notice Available{" "}
            <IoMdNotificationsOff className="w-full text-5xl text-red-600" />
          </h1>
        </div>
      )}
      {/* pagination section */}
      <div className="flex justify-end items-center my-8 section-container">
        {Array.from({
          length: Math.ceil(filteredNotices.length / itemsPerPage),
        }).map((_, index) => (
          <button
            className={`px-3 py-1 mx-1 rounded-full ${currentPage === index + 1 ? "bg-first text-white" : "bg-gray-200"
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

export default AllNotices;