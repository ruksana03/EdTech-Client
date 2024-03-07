/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useCourseResources from "../../../../Hooks/useCourseResources";
import { useFieldArray, useForm } from "react-hook-form";
import axiosSecure from "../../../../api/axiosSecure";
import toast from "react-hot-toast";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import axios from "axios";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const cloudinary_cloud_name = "dffbo5cwe";
const cloudinary_upload_preset = "testing_uplod";
const cloudinary_upload_url = `https://api.cloudinary.com/v1_1/${cloudinary_cloud_name}/upload`;

const AddCourseResources = () => {
    const course = useLoaderData();
    const navigate = useNavigate();
    const [uploadedFileUrls, setUploadedFileUrls] = useState([]);
    const { CourseAllResources, loading, refetch } = useCourseResources();
    const filterData = CourseAllResources.filter(
        (resource) => resource.courseId === course?._id
    );
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            resources: [{ title: "", link: "" }]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "resources"
    });

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", cloudinary_upload_preset);
      
        try {
          const response = await fetch(cloudinary_upload_url, {
            method: "POST",
            body: formData
          });
          if (response.ok) {
            const data = await response.json();
            return data.secure_url; // Return the uploaded file URL
          } else {
            throw new Error("Failed to upload file to Cloudinary");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
          throw error;
        }
      };
      

      const handleFileUpload = async (e, index) => {
        const file = e.target.files[0];
        try {
          const fileUrl = await uploadToCloudinary(file);
          setUploadedFileUrls((prevUrls) => [...prevUrls, fileUrl]);
          toast.success("File uploaded successfully");
        } catch (error) {
          toast.error("Failed to upload file");
        }
      };
      

      const onSubmit = async (data) => {
        try {
          if (filterData.length === 0) {
            // Map each resource data to include the uploaded file URLs
            const resourcesWithFiles = data.resources.map((resource, index) => ({
              ...resource,
              link: uploadedFileUrls[index] // Use the uploaded file URL for the corresponding resource
            }));
      
            const response = await axiosSecure.post("/resources", {
              title: course?.title,
              courseId: course._id,
              resources: resourcesWithFiles, // Use the resources with uploaded file URLs
            });
            toast.success("Resources added successfully");
            refetch();
            navigate(`/dashboard/teacher-course-details/${course?._id}`);
          } else {
            toast.info("Resources already exist for this course");
          }
        } catch (error) {
          // console.error("Error adding course resources:", error);
          toast.error("Failed to add resources");
        }
      };
      
    const deleteResources = async (id) => {
        try {
            const { data } = await axiosSecure.delete(`/resources/delete/${id}`);

            if (data.deletedCount === 1) {
                toast.success("Resources deleted successfully");
                refetch();
            }
        } catch (error) {
            // console.error("Error deleting resources:", error);
            toast.error("Failed to delete resources");
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
                {CourseAllResources?.map((resource) => (
                    <div key={resource._id} className="flex gap-4 justify-start items-center border rounded-lg p-1">
                        <p>{resource.title}</p>
                        <button className="p-2 bg-red-900 rounded-full" onClick={() => deleteResources(resource._id)}><FaDeleteLeft className="text-white text-2xl "/></button>
                    </div>
                ))}
            </div>
            <h2 className="my-2 text-2xl text-first">
                Add Resources on
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
                                {...register(`resources.${index}.title`)}
                                type="text"
                                placeholder="Enter resources title"
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            />
                            <hr className="border-t border-first" />
                        </div>
                        <div className="w-full">
                            <div className="w-full">
                                <input
                                    type="file"
                                    onChange={(e) => handleFileUpload(e, index)}
                                    name={`resources[${index}].file`}
                                    accept=".pdf,.doc,.docx,.txt" // Specify accepted file types
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                />
                                <hr className="border-t border-first" />
                            </div>
                            <hr className="border-t border-first" />
                        </div>
                        <button type="button" onClick={() => remove(index)}>
                            <MdDelete />
                        </button>
                    </div>
                ))}

                <div className="">
                    <button
                        type="button"
                        className=" border rounded-full bg-second text-white"
                        onClick={() => append({ title: "", link: "" })}
                    >
                        <MdAddCircleOutline className="text-2xl" />
                    </button>
                </div>

                <button type="submit" className="btn-style w-full mx-auto text-center">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddCourseResources;
