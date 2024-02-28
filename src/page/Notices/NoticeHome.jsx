import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOff } from "react-icons/io";
import useTeacherSpecificNotices from "../../Hooks/useTeacherSpecificNotices";
import useTeacherNotices from "../../Hooks/useTeacherNotices";

const NoticeHome = () => {
    const [notices, setNotices] = useState([]);
    const [teacher, refetch] = useTeacherNotices();
    const [teacherNotices, teacherRefetch,] = useTeacherSpecificNotices();
    const [searchNotices, setSearchNotices] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [settingPage, setSettingPage] = useState(12);
    const [itemsPerPage, setItemPerPage] = useState(settingPage);
    const [filteredNotices, setFilteredNotices] = useState([]);
    teacherRefetch();
    refetch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await fetch("http://localhost:5000/notices");
                // const data = await res.json();
                const teacherData = [...teacher, ...teacherNotices];
                setNotices(teacherData);
                setFilteredNotices(teacherData);
                const parseSettingPage = parseInt(settingPage)
                setItemPerPage(parseSettingPage)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [teacher,teacherNotices, settingPage]);
    console.log(teacherNotices);
    useEffect(() => {
        const searchItem = notices.filter((item) => item.title.toLowerCase().includes(searchNotices.toLowerCase()));
        setFilteredNotices(searchItem);
        // console.log(searchItem);
    }, [notices, searchNotices])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem).reverse();
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <div className="section-container">
                <div className="flex items-center flex-col-reverse md:flex-row gap-5 lg:flex-row justify-between w-full my-5">
                    <div className="flex items-center gap-3 text-white">
                        <h1>Show</h1>
                        <select onChange={() => setSettingPage(event.target.value)} className="w-32 border bg-black text-white border-gray-300   focus:outline-none focus:border-first leading-tight input" name='select'>
                            <option disabled selected>set page </option>
                            <option >20</option>
                            <option >30</option>
                            <option >40</option>
                            <option >50</option>
                        </select>
                        <h1>entries</h1>
                    </div>
                    <div className='relative w-[350px] flex items-center text-white gap-1'>
                        <p>Search</p>
                        <input type="text" onChange={() => setSearchNotices(event.target.value)} className='text-[17px] appearance-none input border-2  border-gray-200 bg-black rounded w-[80%] md:w-full lg:w-full py-4 px-4 leading-tight focus:outline-none focus:border-first' name='search' placeholder='search notice...' />
                    </div>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table border  mb-8">
                        {/* head */}
                        <thead className='text-base  text-white'>
                            <tr>
                                <th className='border '>Notice Title ({notices?.length})</th>
                                <th className='border w-36 '>Notice Category</th>
                                <th className='border w-36'>Published On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentItems?.length > 0 && currentItems?.map(notice =>
                                    <tr key={notice._id} className='border hover:bg-base-300 hover:text-black text-white cursor-pointer'>
                                        <td className='border text-base lg:text-[18px] font-medium '><Link to={`/notice-details/${notice?._id}`}>{notice?.title}</Link></td>
                                        <td className='border font-medium '>All Teacher</td>
                                        <td className='border font-medium '>10-03-2023</td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    filteredNotices?.length <= 0 && <div className='text-4xl text-white w-full h-[30vh] flex items-center justify-center gap-2'>
                        <h1>Here, No Notice Available <IoMdNotificationsOff className='w-full text-5xl text-red-600' /></h1>
                    </div>
                }
            </div>
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
        </div >
    );
};

export default NoticeHome;



