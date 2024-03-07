import { useFieldArray, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import axiosSecure from "../../../../api/axiosSecure";
import toast from "react-hot-toast";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";


const UpdateCourseResources = () => {
    const resource = useLoaderData();
    const navigate = useNavigate();
    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            resources: resource.resources.map(({ title, link }) => ({ title, link }))
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "resources"
    });

    const onSubmit = async (data) => {
        try {
            const response = await axiosSecure.put(`/resources/update/${resource?._id}`, {
                resources: data.resources
            });
            if (response) {
                reset();
                toast.success("resources updated successfully");
                navigate('/dashboard/all-class'); // Move navigation here
            }
        } catch (error) {
            // console.error("Error updating course resources:", error);
            toast.error("Failed to update resources");
        }
    };

    const handleBack = () => { return navigate(-1) }
    return (
        <div className="p__cormorant w-8/12 mx-auto">

            <button onClick={handleBack}
                className="my-4 border rounded-full p-2 hover:text-first hover:bg-black hover:text-xl">
                <FaArrowLeft />
            </button>

            <h2 className="my-2 text-2xl text-first">
                Add Resources on
                <span className="mx-2 text-white border-b border-first hover:border-2 hover:text-second ">
                    {resource?.title}
                </span>
                Course
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((item, index) => (
                    <div key={item.id} className="mb-4 flex gap-4">
                        <div className="w-full">
                            <input
                                {...register(`resources.${index}.title`)}
                                type="text"
                                placeholder="Enter resources title"
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            />
                            <hr className="border-t border-first" />
                        </div>
                        <div className="w-full">
                            <input
                                {...register(`resources.${index}.link`)}
                                type="text"
                                placeholder="Enter resources link"
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
export default UpdateCourseResources;