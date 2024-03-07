/* eslint-disable no-unused-vars */
import { useState } from "react";
import Modal from "../../../../components/shared/Modal";
import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


const Feedback = () => {
    let [isOpne, setIsOpen] = useState(true);
    const [feedbackAll, setFeedbackAll] = useState({});
    const fildId = feedbackAll?._id;
    const axiosPublic = useAxiosPublic();
    const [rating, setRating] = useState(0);
    const [feedbackMessage, setFeedbackMessage] = useState({});
    const user = useSelector((state) => state.data.user.user);
    const name = user?.name;
    const email = user?.email;
    const image = user?.photo;
    const feedbackData = { name, email, image, feedbackMessage, rating };

    const handleModal = () => {
        const idFind = document.getElementById('my_modal_5').showModal()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axiosPublic.post('/create-feedback', feedbackData)
                .then(res => {
                    setFeedbackAll(res.data)
                })
            handleClose();
            handleModal();
        }
        catch (error) {
            toast.error(error.message)
        }
    };

    if (rating > 0) {
        const feedbackData = { name, email, image, feedbackMessage, rating };
        axiosPublic.put(`/updated-feedback/${fildId}`, feedbackData)
            .then(res => {
                toast.success('your feedback has been submitted!')
            })
        return <form method="dialog"></form>
    }

    const handleOpne = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <div className="p__cormorant">
            <h1 className="text-3xl font-bold text-white my-8 text-center">Get Your Feedback here...!</h1>
            <div className="flex items-center justify-center gap-5">
                <button onClick={handleOpne} className="btn-style">Feedback Open</button>
                <button className="btn-style">Feedback Close</button>
            </div>
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-black text-white border border-white overflow-hidden">
                        <div className="modal-action justify-center">
                            <button onClick={handleClose} className="absolute -top-1 -right-1 btn btn-circle"><RxCross2 className="text-4xl" /></button>
                            <span className="flex items-center justify-center flex-col gap-2">
                                <h1 className="text-3xl font-bold text-center text-white">Please Rating Us!</h1>
                                <Rating
                                    style={{ maxWidth: 180, color: '#f59e0b', zIndex: ' 1' }}
                                    value={rating}
                                    onChange={setRating}
                                />
                            </span>
                        </div>
                    </div>
                </dialog>
            </div>
            <Modal isOpen={isOpne} setIsOpen={setIsOpen} title={'Please Give Your Comment Here for this Course!'}>
                <button onClick={handleClose} className="absolute -top-1 -right-1 btn btn-circle"><RxCross2 className="text-4xl" /></button>
                <form onSubmit={handleSubmit}>
                    <div className="text-white font-sans text-xl space-y-3">
                        <h1>Write About Your Feedback Here</h1>
                        <textarea name="feedbackMessage" onChange={() => setFeedbackMessage(event.target.value)} className="bg-black focurs:outline-none border-2 border-gray-200 rounded w-full h-28 py-2 text-[17px] px-4 focus:border-first input outline-none" placeholder='Write description....' required ></textarea>
                    </div>
                    <button type="submit" className="btn-style">Submit</button>
                </form>
            </Modal>
        </div >
    );
};

export default Feedback;