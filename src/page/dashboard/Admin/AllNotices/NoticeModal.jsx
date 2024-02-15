/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Modal from "../../../../components/shared/Modal";
import { imageUpload } from "../../../../api/getData";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";


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
                role: 'student',
                sentNotices,
                hostName: user?.name,
                hostEmail: user?.email
            }
            // console.log(noticeData);

            axiosPublic.post('/notices', noticeData)
                .then(res => {
                    if (res.data) {
                        setLoading(false);
                        refetch();
                        // console.log(res.data);
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
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Create New Notice" >
                <form onSubmit={handleSubmit}>
                    <div className="space-y-3 mt-5">
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Set Photo*</label>
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
                            <textarea name="description" className="bg-gray-200 dark:text-gray-400 dark:bg-zinc-700 appearance-none border-2 border-gray-200 dark:border rounded w-full h-28 py-2 text-[17px] px-4 leading-tight dark:focus:border-first focus:bg-white focus:border-first input outline-none" placeholder='Write description....' required ></textarea>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Sent Role *</label>
                            <select className=" border border-gray-300 text-black focus:outline-none focus:bg-white focus:border-first leading-tight input" name="sentFor" required>
                                <option disabled selected>Select for sent Notice</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="common">Common</option>
                                <option value="course">Course</option>
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
            </Modal>
        </div>
    );
};

export default NoticeModal;
//