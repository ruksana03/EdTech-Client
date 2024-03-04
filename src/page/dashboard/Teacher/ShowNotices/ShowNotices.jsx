/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import useTeacherNotice from "../../../../Hooks/useTeacherNotice";
import NoticeTableForTeacher from "../../Admin/AllNotices/NoticeTableForTeacher";
import Swal from "sweetalert2";
import axiosSecure from "../../../../api/axiosSecure";

const ShowNotices = () => {
    const { AllTeacherNotice, refetch } = useTeacherNotice();
    const user = useSelector(state => state.data.user.user);
    const userEmail = user?.email;
    const filteredTeacherNotices = AllTeacherNotice.filter(notice => notice?.hostEmail === userEmail);
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

    return (
        <div className="ml-4 w-11/12 mx-auto">
            <h1 className="headtext__cormorant">My Posted Notice </h1>
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
              {filteredTeacherNotices?.length > 0 &&
                filteredTeacherNotices.map((notice) => (
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
    );
};

export default ShowNotices;