import toast from "react-hot-toast";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { imageUpload } from "../../../../api/getData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import useUsers from "../../../../Hooks/useUsers";

const CreateNotice = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.data.user.user);
    const axiosPublic = useAxiosPublic();
    const { AllUsers, } = useUsers();
    const [loading, setLoading] = useState(false);

    // console.log(AllUsers);
    const findStudentEmail = AllUsers.filter(email => email?.role === 'student');
    console.log(findStudentEmail);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const image = form.image.files[0];
        const title = form.title.value;
        const description = form.description.value;
        const email = form.email.value;
        try {
            // handleCancel();
            const loadImage = await imageUpload(image);
            const noticeData = {
                image: loadImage?.data?.url,
                date: new Date(),
                title,
                description,
                role: 'student',
                email,
                hostName: user?.name,
                hostEmail: user?.email
            }
            console.log(noticeData);
            axiosPublic.post('/notices', noticeData)
                .then(res => {
                    setLoading(false)
                    console.log(res);
                    if (res.data) {
                        toast.success('created successfully')
                        return navigate('/notices/teacher-notices')
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
        <div className="mt-10">
            <h1 className="w-full text-2xl text-center flex items-center justify-center gap-2 font-bold mt-5">Create Your Notice <RiNotificationBadgeFill className="text-3xl text-first" /></h1>
            <hr className="w-96 h-1 mt-3 bg-first mx-auto" />
            <form onSubmit={handleSubmit} className="p-5 w-full md:w-2/3 lg:w-1/2 mx-auto mt-5 mb-12">
                <div className="space-y-3 mt-5">
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description">Set New Photo*</label>
                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                            <input name='image' type="file" className="file-input file-input-bordered file-input-success border-first w-full" required />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description">Title*</label>
                        <input className="bg-gray-200 dark:text-gray-400 dark:bg-zinc-700 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-first" name='title' type="text" placeholder='Enter Your Title....' required />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description"> Description*</label>
                        <textarea name="description" className="bg-gray-200 dark:text-gray-400 dark:bg-zinc-700 appearance-none focurs:outline-none border-2 border-gray-200 dark:border rounded w-full h-28 py-2 text-[17px] px-4 leading-tight dark:focus:border-first focus:bg-white focus:border-first input outline-none" placeholder='Write description....' required ></textarea>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xl font-bold" htmlFor="description">Which student do you want to send the notice to?*</label>
                        {/* <textarea name="email" className="bg-gray-200 dark:text-gray-400 dark:bg-zinc-700 appearance-none focurs:outline-none border-2 border-gray-200 dark:border rounded w-full h-28 py-2 text-[17px] px-4 leading-tight dark:focus:border-first focus:bg-white focus:border-first input outline-none" placeholder='Write description....' required ></textarea> */}
                        <select className=" border border-gray-300 text-black focus:outline-none focus:bg-white focus:border-first leading-tight input" name="email" required>
                            <option disabled selected>show here.....</option>
                            {findStudentEmail?.map(email =>
                                <option key={email?._id} defaultValue={email?.email}>
                                    {email?.email}
                                </option>)}
                        </select>
                    </div>
                    <div className="flex items-end justify-end mt-3 gap-3">
                        <button onClick={handleCancel} className="btn bg-red-600 text-white hover:text-red-600">Cancel</button>
                        <button type="submit" className="btn bg-first text-white hover:text-first">
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