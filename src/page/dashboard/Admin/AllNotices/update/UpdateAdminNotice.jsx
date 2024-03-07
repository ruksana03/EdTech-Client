/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import useAdminNotice from "../../../../../Hooks/useAdminNotice";
import toast from "react-hot-toast";


const UpdateAdminNotice = () => {
    const { refetch} = useAdminNotice()
    const user = useSelector(state => state.data.user.user);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const data = useLoaderData();
    const { _id, image, date, title, description, sentNotices, email } = data || {};
    const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const image = form.image;
    const title = form.title.value;
    const description = form.description.value;
    const sentNotices = form.sentFor.value;
    try {
      handleCancel();

      const noticeData = {
        image: image,
        date: new Date(),
        title,
        description,
        role: 'student',
        sentNotices,
        hostName: user?.name,
        hostEmail: user?.email
      };
      axiosPublic.put(`/admin-notice-updated/${_id}`, noticeData).then((res) => {
        if (res.data?.modifiedCount > 0) {
          refetch();
          toast.success("Updated successfully");
          return navigate("/dashboard/allNotices");
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCancel = () => {
    return navigate(-1);
  };

    return (
        <div className="w-full min-h-screen">
          <form onSubmit={handleSubmit} className="w-2/3 mx-auto my-12 text-white">
            <div className="space-y-3 mt-5 w-full p__cormorant">
              <div className="flex flex-col gap-3 w-full">
                <label className="text-xl font-bold" htmlFor="description">
                  Photo*
                </label>
                <div className="file_upload px-5 py-3 relative  border-gray-300 rounded-lg overflow-hidden">
                  <input
                    name="image"
                    type="text"
                    defaultValue={image}
                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  />
                  <hr className="border-t border-first" />
    
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xl font-bold" htmlFor="description">
                  Title*
                </label>
                <input
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  defaultValue={title}
                  name="title"
                  type="text"
                  placeholder="Enter Your Title...."
                  required
                />
                 <hr className="border-t border-first" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xl font-bold" htmlFor="description">
                  {" "}
                  Description*
                </label>
                <textarea
                  name="description"
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  placeholder="Write description...."
                  defaultValue={description}
                  required
                ></textarea>
                 <hr className="border-t border-first" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xl font-bold" htmlFor="description">
                  Sent Role *
                </label>
                <select
                  className=" border border-gray-300 bg-black text-white focus:outline-none focus:border-first leading-tight input"
                  name="sentFor"
                  defaultValue={sentNotices}
                  required>
                  <option disabled selected>Select for sent Notice</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="common">Common</option>
                  <option value="course">Course</option>
                </select>
              </div>
              <div className="flex items-end justify-end mt-3 gap-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-red-600 text-white hover:text-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-style bg-first text-white hover:text-first"
                >
                  Updated
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    };

export default UpdateAdminNotice;