import { Link } from "react-router-dom";

const NewNotices = () => {
    return (
        <div className="section-container">
            <h1>New Notice is Here</h1>
            <table className="table border  mb-8">
                {/* head */}
                <thead className='text-base text-black dark:text-gray-400'>
                    <tr>
                        <th className='border '>Notice Title</th>
                        <th className='border w-36 '>Notice Category</th>
                        <th className='border w-36'>Published On</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'>
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