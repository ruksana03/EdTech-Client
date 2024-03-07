import { useFieldArray, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axiosSecure from "../../../../api/axiosSecure";
import toast from "react-hot-toast";

const UpdateCourseVideo = () => {
    const video = useLoaderData();
    const navigate = useNavigate();
    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            videos: video.videos.map(({ title, link }) => ({ title, link }))
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "videos"
    });

    const onSubmit = async (data) => {
        try {
            const response = await axiosSecure.put(`video/update/${video?._id}`, {
                videos: data.videos
            });
            console.log(response.data);
            if (response) {
                reset();
                toast.success("Videos updated successfully");
                navigate('/dashboard/all-class'); // Move navigation here
            }
        } catch (error) {
            console.error("Error updating course videos:", error);
            toast.error("Failed to update videos");
        }
    };


    return (
        <div className="p__cormorant w-8/12 mx-auto">
            <h2 className="my-2 text-2xl text-first">
                Add Videos on
                <span className="mx-2 text-white border-b border-first hover:border-2 hover:text-second ">
                    {video?.title}
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

                <div className="my-4 flex justify-end items-end">
                    <button type="submit" className="btn-style mx-auto text-center">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCourseVideo;
