/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import { BiMessageAltDetail } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const NoticeTable = ({ notice, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, date, title } = notice || {};
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do You Want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/notice/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${title} has been deleted.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
        console.log(id);
    }
    return (
        <>
            <tr className='border hover:bg-base-300 cursor-pointer'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th className='border text-xl md:text-2xl lg:text-2xl text-[#f79a01]'><CiBookmarkCheck /></th>
                <td className='border'>Admin</td>
                <td className='border text-center text-base lg:text-[18px] font-medium'><Link to={`/dashboard/notice-details/${_id}`}>{notice?.title}</Link></td>
                <td className='border'>{date?.slice(0, 10)}</td>
                <td className='border'>{date?.slice(11, 16)} AM</td>
                <td>
                    <div className="dropdown dropdown-end flex items-center justify-center">
                        <div tabIndex={0} role="button" className="flex items-center justify-center">
                            <BsThreeDots className='text-2xl cursor-pointer' />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm border dropdown-content mt-12 relative mr-[70px] z-10 p-2 shadow bg-base-100 rounded w-40 overflow-y-auto">
                            <li className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/notice-updated/${_id}`}>Update <FaEdit /></Link>
                            </li>
                            <li onClick={() => handleDelete(_id)} className="flex items-center justify-center gap-2"><a>Delete <AiFillDelete /></a></li>
                            <li className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/notice-details/${_id}`}>Details <BiMessageAltDetail /></Link>
                            </li>
                            {/* <li className="flex items-center justify-center gap-2"><a>Details <BiMessageAltDetail /></a></li> */}
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default NoticeTable;