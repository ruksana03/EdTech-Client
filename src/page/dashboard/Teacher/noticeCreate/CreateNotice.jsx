import toast from "react-hot-toast";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { imageUpload } from "../../../../api/getData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const CreateNotice = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.data.user.user);
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)
    const [courses,setCourses] = useState([]);
    // console.log(findStudentUser);
  // load data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses");
        const data = await res.json();
        //    console.log(data);
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

//   console.log(courses);

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
                sentNotices: '',
                sentForCourse,
                hostName: user?.name,
                hostEmail: user?.email
            }
            // console.log(noticeData);
            axiosPublic.post('/notices', noticeData)
                .then(res => {
                    setLoading(false)
                    // console.log(res);
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
        <div className=" w-full mt-20 min-h-auto pb-12 ">
            <h1 className="w-full text-center headtext__cormorant flex items-center text-white justify-center gap-2 font-bold">Create Your Notice <RiNotificationBadgeFill className="text-3xl text-first" /></h1>
            <hr className="w-96 h-1 mt-3 bg-first mx-auto" />
            <form onSubmit={handleSubmit} className="p-5 w-full h-auto md:w-2/3 lg:w-1/2 mx-auto mt-5 ">
                <div className="space-y-3 mt-5 p__cormorant">
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description">Set New Photo*</label>
                        <div className='file_upload px-5 py-3 relative  border-gray-300 rounded-lg overflow-hidden'>
                            <input name='image' type="file" className="file-input file-input-bordered file-input-success border-first bg-black w-full" required />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description">Title*</label>
                        <input className=" appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:border-first bg-black" name='title' type="text" placeholder='Enter Your Title....' required />
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description"> Description*</label>
                        <textarea name="description" className="bg-black appearance-none focurs:outline-none border-2 border-gray-200 dark:border rounded w-full h-28 py-2 text-[17px] px-4 leading-tight dark:focus:border-first focus:border-first input outline-none" placeholder='Write description....' required ></textarea>
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                        <label className="text-xl font-bold" htmlFor="description">Set Our Course Here*</label>
                        <select className=" border border-gray-300 focus:outline-none bg-black text-white focus:border-first leading-tight input" name="courseName" required>
                            <option disabled selected>set course</option>
                            {courses?.map(noti => <option key={noti?._id} defaultValue={noti?.category}>
                                {noti?.category}</option>)}
                        </select>
                    </div>
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