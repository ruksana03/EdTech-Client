import { Link } from "react-router-dom";
import { FcDocument } from "react-icons/fc";


const NewNotices = () => {
    return (
        <div className="section-container">
            <h1 className="text-2xl font-bold linear-text text-center flex items-center justify-center gap-3">New Notice About Our Platform <FcDocument className="text-4xl" /></h1>
            <table className="table border my-8">
                {/* head */}
                <thead className='text-base text-white'>
                    <tr>
                        <th className='border '>Notice Title</th>
                        <th className='border w-36 '>Notice Category</th>
                        <th className='border w-36'>Published On</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-white lg:text-[18px] font-medium hover:text-black'>
                            <Link to={`/common-notice-details`}>new Notice Comming soon</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NewNotices;