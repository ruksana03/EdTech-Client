/* eslint-disable react/prop-types */
import useBlogs from "../../../../Hooks/useBlogs";
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import { IoMdEye } from "react-icons/io";
import BlogModal from "./BlogModal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Skeleton from "react-loading-skeleton";


const AllBlogs = () => {
  const { AllBlogs, refetch } = useBlogs();
  const [blog, setBlog] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleView = (blog) => {
    setBlog(blog);
    document.getElementById('my_modal_1').showModal();
  };

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/blog/delete/${id}`)
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

  return (
    <div className='mt-16'>
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
            <tr  >
              <th className="py-3">#</th>
              <th className="py-3">Image</th>
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Blog Title</th>
              <th className="py-3">View Post</th>
              <th className="py-3">Delete</th>

            </tr>
          </thead>
          <tbody className="text-gray-700  ">
            {AllBlogs?.map((blog, index) => (
              <tr
                key={blog._id}
                className="p__opensans"
              >
                <td className="py-3 font-bold">{index + 1}</td>
                <td className="py-3 font-bold"><img className="rounded-full w-8 h-8" src={blog?.imageUrl} alt="" /></td>

                <td className="py-3 font-bold">{blog?.userName}</td>
                <td className="py-3 font-bold">{blog?.userEmail}</td>
                <td className="py-3 font-bold cursor-pointer">{blog?.title}</td>
                <td className="py-3 text-red-500 font-bold cursor-pointer">
                  <button onClick={() => handleView(blog)}>
                    <IoMdEye className="text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(blog?._id)}>
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        AllBlogs?.length <= 0 && <Skeleton count={20 || AllBlogs?.length} height={30} borderRadius={10} />
      }
      <BlogModal blog={blog} />
    </div>
  );
};

export default AllBlogs;