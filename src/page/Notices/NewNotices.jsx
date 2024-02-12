import { Link } from "react-router-dom";
import { FcDocument } from "react-icons/fc";
import useCommonNotices from "../../Hooks/useCommonNotices";
import { IoMdNotificationsOff } from "react-icons/io";
import Loader from "../../components/shared/Loader";


const NewNotices = () => {
    const [commonNotices, commonRefetch,isLoading] = useCommonNotices();
    commonRefetch();
    // console.log(commonNotices);
    const sortedData = [...commonNotices].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    return (
        <div className="section-container">
            <h1 className="text-2xl font-bold linear-text text-center flex items-center justify-center gap-3 mb-8">New Notice About Our Platform <FcDocument className="text-4xl" /></h1>
            <div className="overflow-x-auto inset-0">
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
                            sortedData?.length > 0 && sortedData?.map(notice =>
                                <tr key={notice._id} className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                                    <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details/${notice?._id}`}>{notice?.title}</Link></td>
                                    <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                                    <td className='border text-gray-800 dark:text-gray-400 font-medium '>{notice?.date?.slice(0, 10)}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                isLoading && <Loader />
            }
            {
                sortedData?.length <= 0 && <div className='text-4xl w-full h-[30vh] flex items-center justify-center gap-2'>
                    <h1>Here, No Notice Available <IoMdNotificationsOff className='w-full text-5xl text-red-600' /></h1>
                </div>
            }
        </div>
    );
};

export default NewNotices;