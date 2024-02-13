import useApplication from "../../../../Hooks/useApplication";
import { FaEye } from "react-icons/fa";
import ApplicationModal from "./ApplicationModal";
import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Applications = () => {
    const axiosPublic = useAxiosPublic();
    const [applications, refetch,] = useApplication();
    let [isOpen, setIsOpen] = useState(false)
    let [id, setId] = useState('');
    const applicationData = [...applications].reverse();
    refetch();

    const approveClass = async (id) => {
        try {
            const { data } = await axiosPublic.put(`/application/approve/${id}`);
            console.log(data);
            if (data.status === "selected") {
                await refetch();
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const res = axiosPublic.delete(`/application/reject/${id}`);
                    console.log(res);
                    if (res) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Application has been deleted successfully.",
                            icon: "success"
                        });
                        refetch();
                    }
                } catch (error) {
                    toast.error("Failed to delete application");
                }
            }
        });

    };


    const handleToggle = (id) => {
        setId(id);
        setIsOpen(!isOpen)
    }


    return (
        <div className="mt-14 w-full h-screen">
            <div className="m-5">
                {/* show modal  */}
                <ApplicationModal isOpen={isOpen} setIsOpen={setIsOpen} applications={applications} id={id} />
                <h1 className="text-2xl font-bold text-white my-5">Applications is Comming</h1>
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
                            {applicationData.map((courseItem, index) => (
                                <tr
                                    key={index}
                                    className="p__opensans"
                                // className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                                >
                                    <td className="py-3 font-medium">{index + 1}</td>
                                    <td className="py-3 font-medium">{courseItem.position}</td>
                                    <td className="py-3 font-medium">{courseItem.fullName}</td>
                                    <td className="py-3 font-medium">{courseItem.email}</td>
                                    <td onClick={() => handleToggle(courseItem?._id)} className="py-3 font-medium"><FaEye className="text-2xl text-white cursor-pointer" /></td>
                                    <td className="py-3">
                                        {/* <button>Approve</button> */}
                                        <button onClick={() => approveClass(courseItem._id)} className="btn-style  rounded-2xl hover:text-first hover:bg-white font-medium">
                                            {courseItem.status === 'pending' ? 'select Now' : courseItem.status}
                                        </button>
                                    </td>
                                    <td className="py-3 font-medium">
                                        <button onClick={() => handleRejected(courseItem?._id)} className="hover:text-red-600 text-[17px] hover:underline font-bold">
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Applications;