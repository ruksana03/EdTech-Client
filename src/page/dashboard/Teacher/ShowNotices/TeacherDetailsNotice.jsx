import { useLoaderData, useNavigate } from "react-router-dom";

const TeacherDetailsNotice = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { image, date, title, description, sentNotices, hostName } = data || {};
    const handleCancel = () => {
        return navigate(-1)
    }
    return (
        <div className="pt-10 w-full h-full px-5 pb-20 p__cormorant">
            <div className="text-sm">
                <h1 className="text-[23px] headtext__cormorant font-bold  ">{title}</h1>
                <p>Published for {sentNotices}</p>
                <p>Published by {hostName}</p>
            </div>
            <h1 className=" font-medium p__cormorant">Date : {date?.slice(0, 10)}</h1>
            <div>
                <figure className=" w-8/12 h-80 mx-auto my-4">
                    <img src={image} alt="image" className="w-full h-full cursor-pointer rounded" />
                </figure>
            </div>
            <p className=" text-sm">{description}</p>
            <button onClick={handleCancel} className="btn-style border-0 mt-7">Go Back</button>
        </div>

    );
};

export default TeacherDetailsNotice;