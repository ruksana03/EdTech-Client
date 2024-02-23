import { useEffect, useState } from "react";
import { IoMdNotificationsOff } from "react-icons/io";
import { Link } from "react-router-dom";
import useStudentSpecificNotices from "../../../Hooks/useStudentSpecificNotices";
import useTeacherSpecificNotices from "../../../Hooks/useTeacherSpecificNotices";


const Notices = () => {
    const [userNotices, studentRefetch,] = useStudentSpecificNotices();
    const [teacherNotices, teacherRefetch,] = useTeacherSpecificNotices();
    const [searchNotices, setSearchNotices] = useState("");
    const [filteredNotices, setFilteredNotices] = useState([0]);
    studentRefetch();
    teacherRefetch();

    useEffect(() => {
        const addData = userNotices.concat(teacherNotices);
        const searchItem = addData.filter((item) => item.title.toLowerCase().includes(searchNotices.toLowerCase()));
        setFilteredNotices(searchItem);
        // console.log(searchItem);
    }, [userNotices, teacherNotices, searchNotices]);

    const noticeData = [...filteredNotices].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });


    // console.log(filteredNotices);
    // console.log(userNotices);

    return (
        <div>
            <div className="section-container text-white">
                <div className="flex items-center justify-center w-full my-5">
                    <div className='relative w-full md:w-1/2 lg:w-1/2 flex items-center gap-1 dark:text-gray-400'>
                        <p>Search</p>
                        <input type="text" onChange={() => setSearchNotices(event.target.value)} className='text-[17px] appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4 leading-tight bg-black focus:outline-none  focus:border-first text-white' name='search' placeholder='search here...' />
                    </div>
                </div>
                <div className="overflow-x-auto inset-0">
                    <table className="table border  mb-8">
                        <thead className='text-base text-white'>
                            <tr>
                                <th className='border '>Notice Title </th>
                                <th className='border w-36 '>Notice Category</th>
                                <th className='border w-36'>Published On</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                noticeData?.length > 0 && noticeData?.map(notice =>
                                    <tr key={notice._id} className='border hover:bg-base-300 hover:text-black cursor-pointer'>
                                       <td className='border text-center text-base lg:text-[18px] font-medium'><Link to={`/notice-details/${notice?._id}`}>{notice?.title?.length > 50 ? <>{notice?.title?.slice(0, 75)}.....</> : notice?.title}</Link></td>
                                        <td className='border font-medium '>All Teacher</td>
                                        <td className='border font-medium '>{notice?.date?.slice(0, 10)}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    filteredNotices?.length <= 0 && <div className='text-4xl w-full text-white h-[30vh] flex items-center justify-center gap-2'>
                        <h1>Here, No Notice Available <IoMdNotificationsOff className='w-full text-5xl text-red-600' /></h1>
                    </div>
                }
            </div>
        </div>
    );
}
export default Notices;