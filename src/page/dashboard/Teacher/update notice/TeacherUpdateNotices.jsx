import { useLoaderData, useNavigate } from "react-router-dom";
import useNotices from "../../../../Hooks/useNotices";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const TeacherUpdateNotices = () => {
    const [, refetch] = useNotices();
    const [courses,setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = useLoaderData();
    const user = useSelector(state => state.data.user.user);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const { _id, image, date, title, description, email } = data || {};
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch("http://localhost:5000/courses");
            const data = await res.json();
            setCourses(data);
          } catch (error) {
            // console.log(error);
          }
        };
        fetchData();
      }, []);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const sentNotices = form.sentFor.value;
      try {
        handleCancel();
        const noticeData = {
          image,
          date: new Date(),
          title,
          description,
          role: 'student',
          sentNotices,
          hostName: user?.name,
          hostEmail: user?.email
        };
  
        axiosPublic.put(`/notice-updated/${_id}`, noticeData).then((res) => {
          if (res.data?.modifiedCount > 0) {
            refetch();
            toast.success("Updated successfully");
            setLoading(false);
            return navigate("/dashboard/show-notices");
          }
        });
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
  
    const handleCancel = () => {
      return navigate(-1);
    };
    return (
        <div className="w-full min-h-screen">
            <form onSubmit={handleSubmit} className="w-2/3 mx-auto my-12 text-white">
                <div className="space-y-3 mt-5 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-xl font-bold" htmlFor="description">
                            Show Photo*
                        </label>
                        <div className="">
                            <input name="image" readOnly type="text"
                                defaultValue={image}
                                className="file-input file-input-bordered file-input-success border-gray-300  bg-black text-white w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description">
                            Title*
                        </label>
                        <input
                            className="bg-black text-white appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:border-first"
                            defaultValue={title}
                            name="title"
                            type="text"
                            placeholder="Enter Your Title...."
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description">
                            {" "}
                            Description*
                        </label>
                        <textarea
                            name="description"
                            className="bg-black text-white appearance-none border-2 border-gray-200 dark:border rounded w-full h-28 py-2 text-[17px] px-4 leading-tight dark:focus:border-first focus:border-first input outline-none"
                            placeholder="Write description...."
                            defaultValue={description}
                            required
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description">
                            Sent Courses *
                        </label>
                        <select className=" border border-gray-300 bg-black text-white focus:outline-none focus:border-first leading-tight input" name="sentFor" required>
                        <option disabled selected>set course</option>
                            {courses?.map(noti => <option key={noti?._id} defaultValue={noti?.category}>
                                {noti?.category}</option>)}
                        </select>
                    </div>
                    <div className="flex items-end justify-end mt-3 gap-3">
                        <button
                            onClick={handleCancel}
                            className="btn bg-red-600 text-white hover:text-red-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn bg-first text-white hover:text-first"
                        >
                            {loading ?
                                <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Updated'
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TeacherUpdateNotices;