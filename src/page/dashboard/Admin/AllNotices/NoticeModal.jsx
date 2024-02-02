/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { imageUpload } from "../../../../api/getData";
import Modal from "../../../../components/shared/Modal";



const NoticeModal = ({ isOpen, setIsOpen }) => {
    const axiosPublic = useAxiosPublic();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.files[0];
        const title = form.title.value;
        const description = form.description.value;
        const email = form.email.value;
        try {
            handleCancel();
            const loadImage = await imageUpload(image);
            const noticeData = {
                image: loadImage?.data?.url,
                date: new Date(),
                title,
                description,
                email,
            }
            console.log(noticeData);
            axiosPublic.post('/notices', noticeData)
            .then(res => {
                if(res.data?.insertedId){
                   return toast.success('created successfully')
                }
            })
        }
        catch (error) {
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
                            <label className="text-xl font-bold" htmlFor="description">Set Email*</label>
                            <select className=" border border-gray-300 text-black focus:outline-none focus:bg-white focus:border-first leading-tight input" name="email" required>
                                <option disabled selected>select</option>
                                <option>sushil@gmail.com</option>
                                <option>apurbo@gmail.com</option>
                                <option>sunil@gmail.com</option>
                            </select>
                        </div>
                        <div className="flex items-end justify-end mt-3 gap-3">
                            <button onClick={handleCancel} className="btn bg-red-600 text-white hover:text-red-600">Cancel</button>
                            <button type="submit" className="btn bg-first text-white hover:text-first">Published</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default NoticeModal;