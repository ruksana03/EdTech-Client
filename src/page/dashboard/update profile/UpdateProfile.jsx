/* eslint-disable no-unused-vars */
import { useState } from "react";
import { imageUpload } from "../../../api/getData";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../../Features/Utilities";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.data.user.user);
    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const image = form.image.files[0];
        const name = form.name.value;
        const loadImage = await imageUpload(image);
        const photo = loadImage?.data?.url;
        try {
            updateUserProfile(name, photo)
                .then((res) => {
                    setLoading(false);
                    toast.success('Profile updated successfully')
                    return navigate('/dashboard/profile')
                })
                .catch((error) => {
                    toast.error(error.message)
                });
        }
        catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
    };
    const handleCancel = () => {
        return navigate(-1)
    }
    
    return (
        <div className="w-full h-screen bg-black text-white pt-10">
            <form onSubmit={handleUpdate} className="w-full md:w-2/3 lg:w-2/3 mx-auto shadow-lg px-5 py-8 border">
                <h1 className="text-2xl font-bold text-center my-5">Updated Your Personal Information</h1>
                <div>
                    <div className=" flex items-center justify-center flex-col gap-3">
                        <div className="avatar">
                            <div className="w-24  rounded-full ring ring-white ring-offset-1">
                                <img src={user?.photo} alt="user-photo" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 lg:w-2/3 mx-auto mt-5">
                        <label className="block font-bold text-start md:mb-0 pr-4 text-[17px]">
                            Set New Image *
                        </label>
                        <div className='file_upload px-5 py-3 relative border-4 mt-3 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                            <input name='image' type="file" className="file-input file-input-bordered bg-black text-black file-input-success border-first w-full" required />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 lg:w-2/3 mx-auto mt-5">
                    <div className="mb-6">
                        <div className="md:w-1/3">
                            <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                                New Full Name *
                            </label>
                        </div>
                        <div className="md:w-full mt-2">
                            <input className="bg-black dark:bg-zinc-600 text-[18px] text-white appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:border-first" id="inline-full-name" name='name' type="text" placeholder="Name" required />
                        </div>
                    </div>
                    <div className="flex items-end justify-end gap-3">
                        <button onClick={handleCancel} className="shadow hover:bg-[#256330] cursor-pointer transition-all focus:shadow-outline focus:outline-none py-2 px-4 rounded-2xl text-[17px] bg-red-600 text-white hover:text-red-600">Cancel</button>
                        <button className="shadow bg-first hover:bg-[#256330] cursor-pointer transition-all focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-2xl text-[17px]" type="submit">
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

export default UpdateProfile;