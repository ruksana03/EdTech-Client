/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Modal from "../../../../components/shared/Modal";
import { imageUpload } from "../../../../api/getData";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

// admin form 
const NoticeModal = ({ isOpen, setIsOpen, refetch }) => {
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxiosPublic();
    const user = useSelector(state => state.data.user.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const image = form.image.files[0];
        const title = form.title.value;
        const description = form.description.value;
        const sentNotices = form.sentFor.value;
        try {
            const loadImage = await imageUpload(image);
            handleCancel();
            const noticeData = {
                image: loadImage?.data?.url,
                date: new Date(),
                title,
                description,
                sentNotices,
                hostName: user?.name,
                hostEmail: user?.email
            }
            axiosPublic.post('/admin-notices', noticeData)
                .then(res => {
                    if (res.data) {
                        setLoading(false);
                        refetch();
                        return toast.success('created successfully')
                    }
                })
        }
        catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
    };
    const handleCancel = () => {
        setIsOpen(false);
    }
    return (
        <div className="">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Create Notice" >
                <form onSubmit={handleSubmit}>
                    <div className="text-white space-y-3 mt-5 p__cormorant">
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Set Photo*</label>
                            <div className='file_upload px-5 py-3 relative  border-gray-300 rounded-lg overflow-hidden'>
                                <input name='image' type="file" className="file-input bg-black file-input-bordered file-input-first border-first w-full" required />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Title*</label>
                            <input className="bg-black  appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none  focus:border-first" name='title' type="text" placeholder='Enter Your Title....' required />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description"> Description*</label>
                            <textarea name="description" className="appearance-none border-2 border-gray-200 dark:border rounded w-full h-28 py-2 text-[17px] px-4 leading-tight dark:focus:border-first bg-black focus:border-first input outline-none" placeholder='Write description....' required ></textarea>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Set Role*</label>
                            <select className=" border border-gray-300  focus:outline-none bg-black focus:border-first leading-tight input" name="sentFor" required>
                                <option disabled selected>Select for sent Notice</option>
                                <option className="text-white" value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="common">Common</option>
                            </select>
                        </div>
                        <div className="flex items-end justify-end mt-3 gap-3">
                            <button onClick={handleCancel} className=" px-2 py-2  bg-red-600 text-white hover:text-red-600">Cancel</button>
                            <button type="submit" className="btn-style bg-first text-white hover:text-first">
                                {loading ?
                                    <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Published'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default NoticeModal;
