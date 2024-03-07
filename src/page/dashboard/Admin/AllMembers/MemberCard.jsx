/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axiosSecure from "../../../../api/axiosSecure";
import UpdateMemberInfoModal from "./UpdateMemberInfoModal";
import { useState } from 'react';


const MemberCard = ({ member, refetch, loading, setLoading,setProfilePicture}) => {
    let [isOpen, setIsOpen] = useState(false);
    const [editData,setEditData] = useState(null)
    const { _id, memberName, designation, profilePicture } = member || {};
    function openModal() {
        setIsOpen(true)
      }
    const handleMemberDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/member/delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };
    const handleEditClick = (data) => {
        setIsOpen(true);
        setEditData(data)
    };
    return (
        <>
            <UpdateMemberInfoModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} editData={editData} setProfilePicture={setProfilePicture} loading={loading} setLoading={setLoading}/>
            <div className="ml-6 border rounded-md col-span-4 p-2 flex justify-start items-center gap-4 text-white p__cormorant">
                <img className="w-32 h-32 rounded-full" src={profilePicture} alt="" />
                <div className="text-xl">
                    <h1 className="border p-1 ">{memberName}</h1>
                    <h1 className="border mt-1 text-sm p-1">{designation}</h1>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => handleMemberDelete(_id)} className="rounded-full p-2 bg-red-950">
                        <MdAutoDelete />
                    </button>
                    <button onClick={() => handleEditClick(member)} className="rounded-full p-2 bg-first text-black my-2">
                        <FaEdit />
                    </button>
                </div>
            </div>
        </>
    );
};

export default MemberCard;