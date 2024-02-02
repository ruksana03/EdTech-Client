
import { Link } from "react-router-dom";


const NoticeHome = () => {
    const date = '10-03-2023';
    const convert = date.split([""]);
    console.log(convert[3]);
    return (
        <div className="section-container">
            <div className="flex items-center justify-between w-full my-5">
                <div className="flex items-center gap-3 dark:text-gray-400">
                    <h1>Show</h1>
                    <select className="w-32 border border-gray-300 dark:bg-zinc-800 dark:text-gray-400 text-black focus:outline-none focus:bg-white focus:border-first leading-tight input" name='select'>
                        <option disabled selected>set page </option>
                        <option >20</option>
                        <option >30</option>
                        <option >40</option>
                        <option >50</option>
                    </select>
                    <h1>entries</h1>
                </div>
                <div className='relative w-[260px] flex items-center gap-1 dark:text-gray-400'>
                    <p>Search</p>
                    <input type="text" className='text=[17px]dark:bg-zinc-600 dark:text-gray-400 dark:bg-zinc-800 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-first' name='search' placeholder='search date...' /></div>
            </div>
            <table className="table border mb-8">
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
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    <tr className='border hover:bg-base-300 dark:hover:bg-third cursor-pointer'>
                        <td className='border text-base lg:text-[18px] font-medium hover:dark:text-black text-gray-800 dark:text-gray-400'><Link to={`/notice-details`}>Session for World</Link></td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>All Teacher</td>
                        <td className='border text-gray-800 dark:text-gray-400 font-medium '>10-03-2023</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default NoticeHome;