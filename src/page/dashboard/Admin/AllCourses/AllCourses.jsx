import { MdDeleteForever } from "react-icons/md";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

const AllCourses = () => {

  const axiosPublic = useAxiosPublic();

  const { data: courseData = [], refetch } = useQuery({
    queryKey: ["allCourses"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/courses/all/requests");
      return data;
    },
  });

  const approveClass = async (id) => {
    try {
      const { data } = await axiosPublic.put(`/courses/approve/${id}`);
      if (data.status === "approved") {
        await refetch();
        toast.success("Class approved successfully");
      }
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  // delete
  const deleteClass = async (id) => {
    try {
      const { data } = await axiosPublic.delete(`/courses/delete/${id}`);

      if (data.deletedCount === 1) {
        await refetch();
        toast.success("Class deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting class:", error);
      toast.error("Failed to delete class");
    }
  };

  // Reverse the order of courseData
  const reversedCourseData = [...courseData].reverse();

  return (
    <div className="mt-16">
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl ">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Action</th>
              <th className="py-2">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {reversedCourseData.map((courseItem, index) => (
              <tr
                key={index}
                className="p__opensans"
              // className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-3 font-medium">{index + 1}</td>
                <td className="py-3 font-medium">{courseItem.title}</td>
                <td className="py-3 font-medium">{courseItem.name}</td>
                <td className="py-3 font-medium">{courseItem.email}</td>
                <td className="py-3">
                  <button
                    onClick={() => approveClass(courseItem._id)}
                    className="btn-style  rounded-2xl hover:text-first hover:bg-white font-medium"
                  >
                    {courseItem.status}
                  </button>
                </td>
                <td className="py-3 font-medium">
                  <button onClick={() => deleteClass(courseItem._id)}>
                    <MdDeleteForever className=" text-red-500 text-2xl rounded-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
          reversedCourseData?.length <= 0 && <Skeleton count={23 || reversedCourseData?.length} height={30} borderRadius={10} />
        }
      </div>
    </div>
  );
};

export default AllCourses;
