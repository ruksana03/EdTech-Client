/* eslint-disable react/prop-types */
import { BiMessageAltDetail } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TeacherNoticeTable = ({ notice, handleDelete }) => {
    const { _id, date, title } = notice || {};
    return (
        <>
            <tr className='border overflow-x-scroll w-2/3 font-serif text-white cursor-pointer'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th className='border text-xl md:text-2xl lg:text-2xl text-[#f79a01]'><CiBookmarkCheck /></th>
                <td className='border'>Admin</td>
                <td className='border text-center text-base lg:text-[18px] font-medium'><Link to={`/dashboard/notice-details/${_id}`}>{title?.length > 50 ? <>{title?.slice(0, 55)}.....</> : title}</Link></td>
                <td className='border'>{date?.slice(0, 10)}</td>
                <td className='border'>{date?.slice(11, 16)} AM</td>
                <td>
                    <div className="dropdown dropdown-end flex items-center justify-center ">
                        <div tabIndex={0} role="button" className="flex items-center justify-center">
                            <BsThreeDots className='text-2xl cursor-pointer' />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm border dropdown-content -mt-8 relative mr-[60px] z-0 p-2 shadow bg-black text-white rounded w-40">
                            <li className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/notice-update/${_id}`}>Update <FaEdit /></Link>
                            </li>
                            <li onClick={() => handleDelete(_id)} className="flex items-center justify-center gap-2"><a>Delete <AiFillDelete /></a></li>
                            <li className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/notice-details/${_id}`}>Details <BiMessageAltDetail /></Link>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default TeacherNoticeTable;