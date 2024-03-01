import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useFeedback from "../../../../Hooks/useFeedback";
import { FaQuoteLeft } from "react-icons/fa6";
const AllFeedback = () => {
    const [feedbacks, refetch] = useFeedback();
    const axiosPublic = useAxiosPublic();
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
        <div className="mt-10 p-5">
            <div className="grid grid-cols-4 items-center justify-center w-full gap-5">
                {
                    feedbacks?.map((feedback) =>
                        <div key={feedback?._id} className="bg-black text-white border border-white rounded-md hover:bg-gradient-to-b from-first to-blue-second transition ease-in-out cursor-pointer w-full h-auto p-5">
                            <div className="flex items-center gap-3">
                                <figure>
                                    <img src="https://i.ibb.co/TwVdxt0/testimonial.jpg" alt="feedback-image" className="w-24 h-24 rounded-full" />
                                </figure>
                                <article>
                                    <h1 className="text-2xl font-serif">{feedback?.name}</h1>
                                    <p className="text-xl font-serif">{feedback?.email}</p>
                                </article>
                            </div>
                            <p className="relative pl-5 mt-5">
                                <FaQuoteLeft className="absolute -top-1 -left-3 text-3xl" />
                                {
                                    feedback?.feedbackMessage?.length > 160 ? feedback?.feedbackMessage?.slice(0, 160) + "  ....." : feedback?.feedbackMessage
                                }
                                <button className="link link-hover">show more</button>
                            </p>
                            <button onClick={() => handleDelete(feedback?._id)} className="btn-style w-full mt-5">Delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllFeedback;