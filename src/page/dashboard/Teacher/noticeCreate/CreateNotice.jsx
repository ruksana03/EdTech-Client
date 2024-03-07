/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { imageUpload } from "../../../../api/getData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import {  useState } from "react";
import { FaSpinner } from "react-icons/fa";
import useCourses from "../../../../Hooks/useCourses";

// teacher form 
const CreateNotice = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.data.user.user);
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)
  const {AllCourses, refetch} = useCourses();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const image = form.image.files[0];
        const title = form.title.value;
        const description = form.description.value;
        const sentForCourse = form.courseName.value;
        try {
            // handleCancel();
            const loadImage = await imageUpload(image);
            const noticeData = {
                image: loadImage?.data?.url,
                date: new Date(),
                title,
                description,
                sentForCourse,
                hostName: user?.name,
                hostEmail: user?.email
            }
            axiosPublic.post('/teacher-notices', noticeData)
                .then(res => {
                    setLoading(false)
                    if (res.data) {
                        toast.success('created successfully')
                        return navigate('/dashboard/show-notices')
                    }
                })
        }
        catch (error) {
            setLoading(false)
            toast.error(error.message)
        }

    }
    const handleCancel = () => {
        return navigate(-1)
    }

    return (
        <div className=" w-full mt-20 min-h-auto pb-12 p__cormorant">
            <h1 className="w-full text-center headtext__cormorant flex items-center text-white justify-center gap-2 font-bold">Create Your Notice <RiNotificationBadgeFill className="text-3xl text-first" /></h1>
            <hr className="w-96 h-1 mt-3 bg-first mx-auto" />
            <form onSubmit={handleSubmit} className="p-5 w-full h-auto md:w-2/3 lg:w-1/2 mx-auto mt-5 ">
                <div className="space-y-3 mt-5 p__cormorant">


                    {/* notice image by teacher  */}
                    <label className="text-xl font-bold" htmlFor="description">Set New Photo*</label>
                    <div className='file_upload px-5 py-3 relative  border-gray-300 rounded-lg overflow-hidden'>
                        <input
                            name='image'
                            type="file"
                            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            required />
                        <hr className="border-t border-first" />
                    </div>

                    {/* set notice title by teacher  */}
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description">Title*</label>
                        <input
                            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            name='title'
                            type="text"
                            placeholder='Enter Your Title....'
                            required />
                        <hr className="border-t border-first" />
                    </div>

                    {/* set notice description by teacher  */}
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description"> Description*</label>
                        <textarea
                            name="description"
                            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            placeholder='Write description....'
                            required >
                        </textarea>
                        <hr className="border-t border-first" />
                    </div>

                    {/* set courses options */}
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description">Set Our Course Here*</label>
                        <select
                            className=" py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            name="courseName"
                            required>
                            <option disabled selected>set course</option>
                            {AllCourses?.map(course => <option className="text-black" key={course?._id} defaultValue={course?.title}>
                                {course?.title}</option>)}
                        </select>
                        <hr className="border-t border-first" />
                    </div>
                    {/* buttons section  */}
                    <div className="flex items-end justify-end mt-3 gap-3">
                        <button onClick={handleCancel} className="px-4 py-2 bg-red-600 text-white ">Cancel</button>
                        <button type="submit" className="btn-style bg-first text-white hover:text-first">
                            {loading ?
                                <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Published'
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreateNotice;