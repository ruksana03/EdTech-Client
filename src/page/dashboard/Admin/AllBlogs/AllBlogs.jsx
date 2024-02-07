import Swal from "sweetalert2";
import useBlogs from "../../../../Hooks/useBlogs";
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import BlogModal from "./BlogModal";

const AllBlogs = () => {
  const { AllBlogs, refetch } = useBlogs();
  console.log(AllBlogs);
  const [blog, setBlog] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log("delete Button click on id", id);
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
        axiosSecure.delete(`/blog/${id}`)
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

  const handleView = (blog) => {
    setBlog(blog);
    document.getElementById('my_modal_1').showModal();
  };


  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse border border-gray-300">
        {/* head */}
        <thead className="bg-gray-800 text-white">
          <tr  >
            <th className="py-3">#</th>
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
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-3 font-bold">{index + 1}</td>
              <td className="py-3 font-bold">{blog.host_user}</td>
              <td className="py-3 font-bold">{blog.host_email}</td>
              <td className="py-3 font-bold cursor-pointer">{blog.caption}</td>
              <td className="py-3 text-first font-bold cursor-pointer">
                <button onClick={() => handleView(blog)}>
                  <IoMdEye className="text-xl" />
                </button>
              </td>
              <td className="py-3 text-red-500 font-bold cursor-pointer">
                <button onClick={() => handleDelete(blog._id)}>
                  <MdDelete className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BlogModal blog={blog} />

    </div>
  );
};

export default AllBlogs;