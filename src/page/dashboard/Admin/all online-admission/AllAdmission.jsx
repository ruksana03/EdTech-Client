import { FaEye } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useOnlineAdmission from "../../../../Hooks/useOnlineAdmission";
import AllAdmissionModal from "./AllAdmissionModal";



const AllAdmission = () => {
    const axiosPublic = useAxiosPublic();
    const [admissions, refetch,] = useOnlineAdmission();
    let [isOpen, setIsOpen] = useState(false)
    let [id, setId] = useState('');
    const admissionData = [...admissions].reverse();
    refetch();

    const approveAdmission = async (courseItem) => {
        try {
            const { data } = await axiosPublic.put(`/online-admission/approve/${courseItem._id}`);
            // console.log(data);
            if (data.status === "selected") {
                await refetch();
                // const res = await axiosPublic.put(`/users/${courseItem.id}`);
                console.log(courseItem);
                toast.success("application has been approved successfully");
            }
        } catch (error) {
            console.error("Error approving class:", error);
        }
    };

    const handleRejected = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const res = axiosPublic.delete(`/online-admission/reject/${id}`);
                    if (res) {
                        toast.success("Application has been rejected successfully.")
                        refetch();
                    }
                } catch (error) {toast.error("Failed to delete application")}
            }
        });

    };

    const handleToggle = (id) => {
        setId(id);
        setIsOpen(!isOpen)
    }

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold text-white mb-5 text-center">All Application is Here!</h1>
            {/* show modal  */}
            <AllAdmissionModal isOpen={isOpen} setIsOpen={setIsOpen} applications={admissions} id={id} />
            <div className="m-5">
                <div className="overflow-x-auto ">
                    <table className="table w-full border-collapse border border-gray-300">
                        {/* head */}
                        <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl ">
                            <tr>
                                <th className="py-2">#</th>
                                <th className="py-2">Title</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Email</th>
                                <th className="py-2">View</th>
                                <th className="py-2">Action</th>
                                <th className="py-2">Reject</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {admissionData.map((admissionItem, index) => (
                                <tr key={index} className="p__opensans">
                                    <td className="py-3 font-medium">{index + 1}</td>
                                    <td className="py-3 font-medium">{admissionItem.position}</td>
                                    <td className="py-3 font-medium">{admissionItem.fullName}</td>
                                    <td className="py-3 font-medium">{admissionItem.email}</td>
                                    <td onClick={() => handleToggle(admissionItem?._id)} className="py-3 font-medium"><FaEye className="text-2xl text-white cursor-pointer" /></td>
                                    <td className="py-3">
                                        {/* <button>Approve</button> */}
                                        <button onClick={() => approveAdmission(admissionItem)} className="btn-style  rounded-2xl hover:text-first hover:bg-white font-medium">
                                            {admissionItem.status === 'pending' ? 'select Now' : admissionItem.status}
                                        </button>
                                    </td>
                                    <td className="py-3 font-medium">
                                        <button onClick={() => handleRejected(admissionItem?._id)} className="hover:text-red-600 text-[17px] hover:underline font-bold">
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
                    admissionData?.length <= 0 && <Skeleton count={13 || admissionData?.length} height={30} borderRadius={10} />
                }
            </div>
        </div>
    );
};

export default AllAdmission;