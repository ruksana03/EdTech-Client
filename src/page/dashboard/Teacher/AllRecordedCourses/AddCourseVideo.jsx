/* eslint-disable no-unused-vars */
import { useFieldArray, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axiosSecure from "../../../../api/axiosSecure";
import toast from "react-hot-toast";
import useCourseVideo from "../../../../Hooks/useCourseVideo";
import useCourseResources from "../../../../Hooks/useCourseResources";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const AddCourseVideo = () => {
    const course = useLoaderData()
    const navigate = useNavigate();
    const { CourseAllVideo, loading, refetch } = useCourseVideo()
    // Function to filter CourseAllVideo by courseId
    const filterData = CourseAllVideo.filter((video) => video.courseId === course?._id);
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            videos: [{ title: "", link: "" }]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "videos"
    });
    const onSubmit = async (data) => {
        try {
            if (filterData.length === 0) {
                const response = await axiosSecure.post("/videos", {
                    title: course?.title,
                    courseId: course._id,
                    videos: data.videos,
                });
                toast.success("Videos added successfully");
                refetch();
                navigate(`/dashboard/teacher-course-details/${course?._id}`);
            } else {
                // Videos already exist for this course
                toast.info("Videos already exist for this course");
            }
        } catch (error) {
            toast.error("Failed to add videos");
        }
    };
    const deleteVideo = async (id) => {
        try {
            const { data } = await axiosSecure.delete(`/video/delete/${id}`);

            if (data.deletedCount === 1) {
                toast.success("Video deleted successfully");
                refetch()
            }
        } catch (error) {
            toast.error("Failed to delete class");
        }
    };
    const handleBack = () => { return navigate(-1) }
    return (
        <div className="p__cormorant w-8/12 mx-auto mt-24 ">
            <button onClick={handleBack}
                className="my-4 border rounded-full p-2 hover:text-first hover:bg-black hover:text-xl">
                <FaArrowLeft />
            </button>

            <div className="grid grid-cols-4 gap-4">
                {CourseAllVideo?.map(video => (
                    <div key={video._id} className="flex gap-4 justify-start items-center border rounded-lg p-1">
                        <p>{video.title}</p>
                        <button className="p-2 bg-red-900 rounded-full" onClick={() => deleteVideo(video._id)}><FaDeleteLeft className="text-white text-2xl " /></button>
                    </div>
                ))}
            </div>
            <hr className="border-first my-8" />
            <h2 className="my-2 text-2xl text-first">
                Add Videos on
                <span className="mx-2 text-white border-b border-first hover:border-2 hover:text-second ">
                    {course?.title}
                </span>
                Course
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((item, index) => (
                    <div key={item.id} className="mb-4 flex gap-4">
                        <div className="w-full">
                            <input
                                {...register(`videos.${index}.title`)}
                                type="text"
                                placeholder="Enter video title"
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            />
                            <hr className="border-t border-first" />
                        </div>
                        <div className="w-full">
                            <input
                                {...register(`videos.${index}.link`)}
                                type="text"
                                placeholder="Enter video link"
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            />
                            <hr className="border-t border-first" />
                        </div>
                        <button type="button" onClick={() => remove(index)}><MdDelete /></button>
                    </div>
                ))}

                <div className="">
                    <button
                        type="button"
                        className=" border rounded-full bg-second text-white"
                        onClick={() => append({ title: "", link: "" })}>
                        <MdAddCircleOutline className="text-2xl" />
                    </button>
                </div>

                <button type="submit" className="btn-style w-full mx-auto text-center">Submit</button>
            </form>
        </div>
    );
};

export default AddCourseVideo;
