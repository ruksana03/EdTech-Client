import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOff } from "react-icons/io";

const NoticeHome = () => {
    const [notices, setNotices] = useState([]);
    const [searchNotices, setSearchNotices] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [settingPage, setSettingPage] = useState(12);
    const [itemsPerPage, setItemPerPage] = useState(settingPage);
    const [filteredNotices, setFilteredNotices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/notices");
                const data = await res.json();
                setNotices(data);
                setFilteredNotices(data);
                const parseSettingPage = parseInt(settingPage)
                setItemPerPage(parseSettingPage)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [settingPage]);
    // console.log(searchNotices);
    useEffect(() => {
        setFilteredNotices(filteredNotices);
        const searchItem = notices.filter((item) => item.title.toLowerCase().includes(searchNotices.toLowerCase()));
        setFilteredNotices(searchItem);
        // console.log(searchItem);
    }, [searchNotices])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log(currentItems);
    console.log(filteredNotices);
    // console.log(notices);

    return (
        //https://i.ibb.co/G73nQT5/unnamed.jpg 
        //
        <div>
            <figure className=" w-full h-[45vh] relative">
                <img src='https://i.ibb.co/YZLxNS8/notice.jpg' alt="notice-image" className="w-full h-full" />
                {/* <img src='https://i.ibb.co/Fqw8LX4/NOTICE.png' alt="notice-image" className="w-full h-full" /> */}
                <div className="bg-black opacity-50 w-full h-full absolute top-0"></div>
            </figure>
            <div className="section-container">
                <div className="flex items-center flex-col-reverse md:flex-row gap-5 lg:flex-row justify-between w-full my-5">
                    <div className="flex items-center gap-3 dark:text-gray-400">
                        <h1>Show</h1>
                        <select onChange={() => setSettingPage(event.target.value)} className="w-32 border border-gray-300 dark:bg-zinc-800 dark:text-gray-400 text-black focus:outline-none focus:bg-white focus:border-first leading-tight input" name='select'>
                            <option disabled selected>set page </option>
                            <option >20</option>
                            <option >30</option>
                            <option >40</option>
                            <option >50</option>
                        </select>
                        <h1>entries</h1>
                    </div>
                    <div className='relative w-[280px] flex items-center gap-1 dark:text-gray-400'>
                        <p>Search</p>
                        <input type="text" onChange={() => setSearchNotices(event.target.value)} className='text=[17px]dark:bg-zinc-600 dark:text-gray-400 dark:bg-zinc-800 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-first' name='search' placeholder='search date...' />
                    </div>
                    <div>
                        <Link to='/create-notice'>
                            <button className='px-3 py-2 rounded transition-all duration-200 bg-transparent border border-first text-first hover:bg-first hover:text-white font-medium'>Create Notice</button>
                        </Link>
                    </div>
                </div>
                <table className="table border  mb-8">
                    {/* head */}
                    <thead className='text-base text-black dark:text-gray-400'>
                        <tr>
                            <th className='border '>Notice Title {notices?.length}</th>
                            <th className='border w-36 '>Notice Category</th>
                            <th className='border w-36'>Published On</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            currentItems?.length > 0 && currentItems?.map(notice =>
                                <tr key={notice._id} className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                                    <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>{notice?.title}</Link></td>
                                    <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                                    <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                                </tr>)
                        }

                    </tbody>
                </table>
                {
                    notices?.length && filteredNotices?.length <= 0 && <div className='text-4xl w-full h-[30vh] flex items-center justify-center gap-2'>
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
        </div>
    );
};

export default NoticeHome;