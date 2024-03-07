import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useFeedback from "../../../../Hooks/useFeedback";
import { FaQuoteLeft } from "react-icons/fa6";
import Modal from "../../../../components/shared/Modal";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const AllFeedback = () => {
    const [feedbacks, refetch] = useFeedback();
    const axiosPublic = useAxiosPublic();
    let [isOpen, setIsOpen] = useState(false);
    const [findFeedback, setFindFeedback] = useState([]);

    const handleDetails = (findId) => {
        setIsOpen(true)
        const findData = feedbacks.find(item => item?._id === findId);
        setFindFeedback(findData);
    }
    const handleDelete = (id) => {
        axiosPublic.delete(`/deleted-feedback/${id}`)
            .then(res => {
                if (res.data) {
                    toast.success('deleted successfully')
                    refetch()
                }
            })
    }

    return (
        <div className="mt-10 p-5 p__cormorant">
            <Modal  isOpen={isOpen} setIsOpen={setIsOpen} title={'Feedback'} >
                <button onClick={() => setIsOpen(false)} className="absolute -top-1 -right-1 btn btn-circle"><RxCross2 className="text-xl" /></button>
                <div className=" text-white rounded-md bg-gradient-to-b from-first to-blue-second transition ease-in-out cursor-pointer w-full h-auto p-5 p__cormorant">
                    <div className="flex items-center justify-center flex-col gap-3">
                            <img src={findFeedback?.image} alt="feedback-image" className="w-24 h-24 rounded-full" />
                        <div>
                            <h1 className="text-base ">{findFeedback?.name}</h1>
                            <p className="text-xl ">{findFeedback?.email}</p>
                        </div>
                    </div>
                    <p className="relative pl-5 mt-5 text-xl ">
                        <FaQuoteLeft className="absolute -top-1 -left-3 text-3xl" />
                        {findFeedback?.feedbackMessage}
                    </p>
                </div>
            </Modal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center w-full gap-5">
                {
                    feedbacks?.map((feedback) =>
                        <div key={feedback?._id} className="bg-black text-white border border-white rounded-md  transition ease-in-out cursor-pointer  h-80 px-2 py-5 w-full">
                            <div className="flex flex-col items-left gap-3">

                                <img src={feedback?.image} alt="feedback-image" className="w-24 h-24 rounded-full" />


                                <div className="text-sm">
                                    <h1 className="">{feedback?.name}</h1>
                                    <p className="">{feedback?.email}</p>
                                </div>

                            </div>
                            <p className="relative pl-5 mt-5  text-base">
                                <FaQuoteLeft className="absolute -top-1 -left-0 " />
                                {
                                    feedback?.feedbackMessage?.length > 10 ? feedback?.feedbackMessage?.slice(0, 10) + "  ....." : feedback?.feedbackMessage
                                }
                                <button onClick={() => handleDetails(feedback?._id)} className="link link-hover font-bold text-first block">show more</button>
                            </p>
                            <button onClick={() => handleDelete(feedback?._id)} className="btn-style w-full mt-5">Delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllFeedback;