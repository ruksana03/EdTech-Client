/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import useTeacherNotice from "../../../../Hooks/useTeacherNotice";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useCourses from "../../../../Hooks/useCourses";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";


const TeacherUpdateNotices = () => {
    const { refetch } = useTeacherNotice()
    const user = useSelector(state => state.data.user.user);
    const data = useLoaderData();
    const navigate = useNavigate();
    const { _id, image, date, title, description, email } = data || {};
    const axiosPublic = useAxiosPublic();
    const { AllCourses } = useCourses();
    const [loading, setLoading] = useState(false);

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
                sentNotices,
                hostName: user?.name,
                hostEmail: user?.email
            };

            axiosPublic.put(`/teacher-notice-updated/${_id}`, noticeData).then((res) => {
                if (res.data?.modifiedCount > 0) {
                    refetch();
                    toast.success("Updated successfully");
                    setLoading(false);
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
        <div className="w-full min-h-screen p__cormorant">
            <form onSubmit={handleSubmit} className="w-2/3 mx-auto my-12 text-white">
                <div className="space-y-3 mt-5 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <label className="text-xl font-bold" htmlFor="description">
                            Show Photo*
                        </label>
                        <div className="">
                            <input name="image" readOnly type="text"
                                defaultValue={image}
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                required
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
                            Sent Courses *
                        </label>
                        <select className=" py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            name="sentFor"
                            required>
                            <option disabled selected>set course</option>
                            {AllCourses?.map(course=> <option key={course?._id} className="text-black" defaultValue={course?.category}>
                                {course?.category}</option>)}
                        </select>
                        <hr className="border-t border-first" />
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