import { useLoaderData, useNavigate } from "react-router-dom";

const NoticeDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { _id, image, date, title, description, email } = data || {};
    console.log(image);
    const handleCancel = () => {
        return navigate(-1)
    }
    return (
        <div className={`section-container py-12 bg-[url('https://i.ibb.co/qN8LxhB/notice.jpg')] bg-no-repeat object-fill bg-cover relative z-0`}>
            <div className="bg-black w-full h-full opacity-45 -z-10 absolute top-0 right-0"></div>
            <div className="w-2/3 h-auto mx-auto z-10 opacity-100">
                <figure className="w-full h-[450px] border">
                    <img src={image} alt="image" className="w-full h-full cursor-pointer" />
                </figure>
                <div>
                    <div className="flex justify-between mt-5 gap-5 text-gray-300">
                        <h1 className="text-[23px] flex-1 font-bold">{title}</h1>
                        <h1 className="text-xl font-medium">Date : {date?.slice(0,10)}</h1>
                    </div>
                    <p className="text-gray-300">{description}</p>
                </div>
                <button onClick={handleCancel} className="btn bg-first text-white hover:text-first border-0 mt-7">Go Back</button>
            </div>
        </div>
    );
};

export default NoticeDetails;