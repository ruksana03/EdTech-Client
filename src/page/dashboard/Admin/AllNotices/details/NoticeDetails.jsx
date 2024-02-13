import { useLoaderData, useNavigate } from "react-router-dom";

const NoticeDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { image, date, title, description } = data || {};
    console.log(image);
    const handleCancel = () => {
        return navigate(-1)
    }
    return (
        <div className="pt-10 w-full h-full">
            <div className={`w-full h-full px-5 pb-20 bg-[url('https://i.ibb.co/qN8LxhB/notice.jpg')] bg-no-repeat object-fill bg-cover relative z-0`}>
                <div className="  w-full h-full opacity-45 -z-10 absolute top-0 right-0"></div>
                <div className=" w-full md:w-[80%] lg:w-2/3 h-auto mx-auto z-10 opacity-100">
                    <figure className="w-full h-[450px] mb-12">
                        <img src={image} alt="image" className="w-full h-full cursor-pointer rounded" />
                    </figure>
                    <div>
                        <div className="flex justify-between gap-5 text-gray-300">
                            <h1 className="text-[23px] flex-1 font-bold  ">{title}</h1>
                            <h1 className="text-xl font-medium">Date : {date?.slice(0, 10)}</h1>
                        </div>
                        <p className="text-gray-300">{description}</p>
                    </div>
                    <p className="text-gray-300">{description}</p>
                    <button onClick={handleCancel} className="btn bg-first text-white hover:text-first border-0 mt-7">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default NoticeDetails;