/* eslint-disable no-unused-vars */
import { useState } from "react";
import NoticeModal from "./NoticeModal";
import useTeacherNotice from "../../../../Hooks/useTeacherNotice";
import useAdminNotice from "../../../../Hooks/useAdminNotice";
import Swal from "sweetalert2";
import axiosSecure from "../../../../api/axiosSecure";
import NoticeTableForAdmin from "./NoticeTableForAdmin";
import NoticeTableForTeacher from "./NoticeTableForTeacher";


const AllNotices = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { AllTeacherNotice, refetch } = useTeacherNotice();
  const { AllAdminNotice } = useAdminNotice();

  const handleDeleteTeacherNotice = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/teacher-notices/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `$notice has been deleted.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };


  const handleDeleteAdminNotice = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/admin-notices/${id}`).then((res) => {
          if (res.data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `$notice has been deleted.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };


  return (
    <div className="section-container w-full min-h-[calc(100vh-40px)] -z-10 p__cormorant">

      <NoticeModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} />

      <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row shadow-md border my-8 p-5 gap-2">
        <div>
          <h1 className="text-base font-bold">
            Important Notice Provide Here...
          </h1>
          <p className="">
            Innavated Education for Admin
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 rounded transition-all duration-200 bg-transparent border border-first text-first hover:bg-first hover:text-white font-medium"
          >
            Create Notice
          </button>
        </div>
      </div>


      <div className="flex items-center flex-col md:flex-row lg:flex-row justify-start gap-8 w-full my-5 px-5">
        {/* notice post by admin  */}
      
      <div className="my-10 z-0 w-full h-auto">

        <h1>Notice Posted By Admin </h1>
        <div className="w-full overflow-x-auto overflow-y-hidden ">
          <table className="table border w-full h-full overflow-x-scroll">
            {/* head */}
            <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
              <tr >
                <th className="border w-auto md:w-8 lg:w-8"></th>
                <th className="border w-auto md:w-8 lg:w-8"></th>
                <th className="border w-auto md:w-32 lg:w-32">Person</th>
                <th className="border text-center">Title</th>
                <th className="border w-32">Date</th>
                <th className="border  w-28">Time</th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody className=" z-0">
              {AllAdminNotice?.length > 0 &&
                AllAdminNotice.map((notice) => (
                  <NoticeTableForAdmin
                    key={notice?._id}
                    notice={notice}
                    handleDeleteAdminNotice = {handleDeleteAdminNotice}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      {/* notice post by teacher  */}

      <div className="flex items-center flex-col md:flex-row lg:flex-row justify-start gap-8 w-full my-5 px-5">
      
      <div className="my-10 z-0 w-full h-auto">

        <h1>Notice Posted By Teacher </h1>
        <div className="w-full overflow-x-auto overflow-y-hidden ">
          <table className="table border w-full h-full overflow-x-scroll">
            {/* head */}
            <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
              <tr >
                <th className="border w-auto md:w-8 lg:w-8"></th>
                <th className="border w-auto md:w-8 lg:w-8"></th>
                <th className="border w-auto md:w-32 lg:w-32">Courses</th>
                <th className="border text-center">Title</th>
                <th className="border w-32">Date</th>
                <th className="border  w-28">Time</th>
                <th className="p-0"></th>
              </tr>
            </thead>
            <tbody className=" z-0">
              {AllTeacherNotice?.length > 0 &&
                AllTeacherNotice.map((notice) => (
                  <NoticeTableForTeacher
                    key={notice?._id}
                    notice={notice}
                    handleDeleteTeacherNotice={handleDeleteTeacherNotice}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AllNotices;