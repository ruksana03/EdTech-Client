import { useEffect, useState } from "react";
import useUserSpecificNotices from "../../../Hooks/useUserSpecificNotices";
import { IoMdNotificationsOff } from "react-icons/io";
import { Link } from "react-router-dom";


const Notices = () => {
    const [userNotices, , ] = useUserSpecificNotices();
    const [searchNotices, setSearchNotices] = useState("");
    const [filteredNotices, setFilteredNotices] = useState([0]);

    useEffect(() => {
        const searchItem = userNotices.filter((item) => item.title.toLowerCase().includes(searchNotices.toLowerCase()));
        setFilteredNotices(searchItem);
        console.log(searchItem);
    }, [searchNotices,userNotices])


    // console.log(filteredNotices);
    // console.log(searchNotices);

    return (
        <div>
            <figure className=" w-full h-[45vh] relative">
                {/* <img src='https://i.ibb.co/YZLxNS8/notice.jpg' alt="notice-image" className="w-full h-full" /> */}
                <img src='https://i.ibb.co/Fqw8LX4/NOTICE.png' alt="notice-image" className="w-full h-full" />
                <div className="bg-black opacity-50 w-full h-full absolute top-0"></div>
            </figure>
             <div className="section-container">
                <div className="flex items-center justify-center w-full my-5">
                    <div className='relative w-full md:w-1/2 lg:w-1/2 flex items-center gap-1 dark:text-gray-400'>
                        <p>Search</p>
                        <input type="text" onChange={() => setSearchNotices(event.target.value)} className='text=[17px]dark:bg-zinc-600 dark:text-gray-400 dark:bg-zinc-800 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-first' name='search' placeholder='search here...' />
                    </div>
                </div>
                <table className="table border  mb-8">
                    <thead className='text-base text-black dark:text-gray-400'>
                        <tr>
                            <th className='border '>Notice Title </th>
                            <th className='border w-36 '>Notice Category</th>
                            <th className='border w-36'>Published On</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            filteredNotices?.length > 0 ? filteredNotices?.map(notice =>
                                <tr key={notice._id} className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                                    <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details/${notice?._id}`}>{notice?.title}</Link></td>
                                    <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                                    <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                                </tr>) :
                                <span className="loading-spinner text-3xl text-center my-5"></span>
                        }
                    </tbody>
                </table>
                {
                    filteredNotices?.length <= 0 && <div className='text-4xl w-full h-[30vh] flex items-center justify-center gap-2'>
                        <h1>Here, No Notice Available <IoMdNotificationsOff className='w-full text-5xl text-red-600' /></h1>
                    </div>
                }
            </div> 
        </div>
    );
}
export default Notices;