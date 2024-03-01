/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const NoticeTableForAdmin = ({ notice,handleDeleteAdminNotice}) => {
    const { _id, date, title,sentNotices } = notice || {};
    
    return (
        <>
            <tr className='border overflow-x-scroll w-2/3  p__cormorant cursor-pointer'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th className='border text-xl  text-white'><CiBookmarkCheck /></th>
                <td className='border'>{sentNotices || "Student"}</td>
                <td className='border text-center font-medium'><Link to={`/dashboard/notice-details/${_id}`}>{title?.length > 40 ? <>{ title?.slice(0,50)}.....</> : title}</Link></td>
                <td className='border text-sm'>{date?.slice(0, 10)}</td>
                <td className='border text-sm'>{date?.slice(11, 16)} AM</td>
                <td>
                    <div className="dropdown dropdown-end flex items-center justify-center ">
                        <div tabIndex={0} role="button" className="flex items-center justify-center">
                            <BsThreeDots className='text-2xl cursor-pointer' />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm border dropdown-content -mt-8 relative mr-[60px] z-0 p-2 shadow bg-black rounded w-40">
                            <li className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/admin-notice-updated/${_id}`}>Update <FaEdit /></Link>
                            </li>
                            <li onClick={() => handleDeleteAdminNotice(_id)} className="flex items-center justify-center gap-2"><a>Delete <AiFillDelete /></a></li>
                            <li className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/admin-notice-details/${_id}`}>Details <BiMessageAltDetail /></Link>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};


export default NoticeTableForAdmin;