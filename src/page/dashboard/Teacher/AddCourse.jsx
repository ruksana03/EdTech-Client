import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCourse = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector((state) => state.data.user.user);
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const instructors = [];
        for (let i = 1; i <= 3; i++) {
          if (data[`instructorName${i}`] && data[`instructorEmail${i}`]) {
            instructors.push({
              name: data[`instructorName${i}`],
              email: data[`instructorEmail${i}`]
            });
          }
        }

        const courseItem = {
          title: data.title,
          duration: data.duration,
          name: user?.name,
          email: user?.email,
          price: parseFloat(data.price),
          category: data.category,
          details: data.details,
          image: res.data.data.display_url,
          instructors: instructors,
          video: { title: data.videoTitle, link: data.videoLink },
          requirements: data.requirements
        };

        const { data: datas = [] } = await axiosPublic.post(
          "/courses",
          courseItem
        );

        if (datas) {
          reset();
          toast.success("Your class is pending! Wait for admin approval");
        }
      }
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 mt-16 bg-transparent rounded-md shadow-md p__cormorant text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Title*
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter the title..."
            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
          />
            <hr className="border-t border-first" />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Duration*
          </label>
          <input
            {...register("duration", { required: true })}
            type="number"
            placeholder="Enter the title..."
            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
            />
              <hr className="border-t border-first" />
        </div>

        {/* Price and Category */}
        <div className="flex items-center gap-6">
          {/* Price */}
          <div className="flex-1">
            <label className="block  text-sm font-bold mb-2">
              Price*
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Enter the price"
              className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
              />
                <hr className="border-t border-first" />
          </div>

          {/* Category */}
          <div className="flex-1">
            <label className="block  text-sm font-bold mb-2">
              Category*
            </label>
            <select
              {...register("category", { required: true })}
              className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
            >
              <option className="text-black" value="" disabled>
                Select a category
              </option>
              <option className="text-black" value="popular">Popular</option>
              <option className="text-black" value="law">Law</option>
              <option className="text-black" value="physics">Physics</option>
              <option className="text-black" value="chemistry">Chemistry</option>
              <option className="text-black" value="programming">Programming</option>
              <option className="text-black" value="engineering">Engineering</option>
            </select>
            <hr className="border-t border-first" />
          </div>
        </div>

        {/* Details */}
        <div className="my-6 ">
          <label className="block  text-sm font-bold mb-2">
            Details
          </label>
          <textarea
            {...register("details", { required: true })}
            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
            placeholder="Enter details..."
          ></textarea>
           <hr className="border-t border-first" />
        </div>

        {/* Instructor Name and Email */}
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Instructor Name and Email*
          </label>
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex-1">
                <input
                  {...register(`instructorName${index}`)}
                  type="text"
                  placeholder={`Instructor ${index} Name`}
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                />
                <hr className="border-t border-first" />
              </div>
              <div className="flex-1">
                <input
                  {...register(`instructorEmail${index}`)}
                  type="email"
                  placeholder={`Instructor ${index} Email`}
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  />
                    <hr className="border-t border-first" />
              </div>
            </div>
          ))}
        </div>

        {/* Video Title and Link */}
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <label className="block  text-sm font-bold mb-2">
              Video Title
            </label>
            <input
              {...register("videoTitle")}
              type="text"
              placeholder="Enter video title"
              className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
              />
                <hr className="border-t border-first" />
          </div>
          <div className="flex-1">
            <label className="block  text-sm font-bold mb-2">
              Video Link
            </label>
            <input
              {...register("videoLink")}
              type="url"
              placeholder="Enter video link"
              className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
              />
                <hr className="border-t border-first" />
          </div>
        </div>

        {/* Requirements */}
        <div className="my-6">
          <label className="block  text-sm font-bold mb-2">
            Requirements
          </label>
          <textarea
            {...register("requirements")}
            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
            placeholder="Enter requirements..."
          ></textarea>
          <hr className="border-t border-first" />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block  text-sm font-bold mb-2">
            Image
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
            />
              <hr className="border-t border-first" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn text-black bg-gradient-to-r text-xl from-second to-first font-extrabold focus:outline-none focus:ring-0 rounded-lg  px-5 py-2.5 text-center w-full"
          disabled={loading}
        >
          {loading ? (
            <TbFidgetSpinner className="animate-spin text-white m-auto" />
          ) : (
            "Add Course"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
