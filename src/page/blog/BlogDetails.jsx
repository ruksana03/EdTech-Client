import { CiEdit, CiSaveDown2 } from "react-icons/ci";
import { IoIosMore, IoIosRemoveCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blog = useLoaderData();

    const user = useSelector((state) => state.data.user.user);
    const { _id, userPhoto, userName,userEmail, postTime, title, contents, imageUrl } = blog || {};

    const currentUserEmail = user?.email;
    const isCurrentUserAuthor = currentUserEmail === userEmail;

    return (
        <div className="w-8/12 mx-auto pt-24">
            <h1 className="headtext__cormorant">{title}</h1>
            <hr className="mb-2" />
            <div className="flex justify-start gap-4 items-center p__cormorant">
                <img className="w-12 h-12 rounded-full" src={userPhoto} alt="" />
                <p>{userName}</p>
                <p>{postTime}</p>
            </div>

            <div className="my-12 flex justify-between">
                <img className="w-full h-80" src={imageUrl} alt="" />
            </div>
            <Link to={`/blog/blog-updated/${_id}`}> <button>Update</button></Link>
            <p className="text-sm p__cormorant  ">
                {contents.map(content => (
                    <p className="py-4" key={content._id}>{content.value}</p>
                ))}
            </p>
            <hr className="mb-4" />
            <div className="flex justify-between mb-12"> 
                <div>

                </div>
                <div className="flex gap-2 text-xl">
                    <Link to={isCurrentUserAuthor ? `/blog/blog-updated/${_id}` : '#'} className={isCurrentUserAuthor ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}>
                    <div className="group relative">
                        <CiEdit className="border-2 bg-white text-black border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-second from-10% via-first via-30% to-[#0F0F0F] to-90% hover:text-black " />
                        {isCurrentUserAuthor && (
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-first from-10% via-second via-30% to-[#0F0F0F] to-90%">
                            Edit
                        </span>
                        )} 
                    </div>
                     </Link> 

                    <div className="group relative">
                        <CiSaveDown2 className="cursor-pointer bg-white text-black border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-first from-10% via-first via-30% to-[#0F0F0F] to-90% hover:text-white" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-first from-10% via-first via-30% to-[#0F0F0F] to-90%">
                            Save
                        </span>
                    </div>

                    <div className="group relative">
                        <IoIosRemoveCircleOutline className="cursor-pointer bg-white text-black border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-first from-10% via-first via-30% to-[#0F0F0F] to-90% hover:text-white" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-first from-10% via-first via-30% to-[#0F0F0F] to-90%">
                            Remove
                        </span>
                    </div>
                    <div className="group relative">
                        <IoIosMore className="cursor-pointer border-2 bg-white text-black border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-first from-10% via-first via-30% to-[#0F0F0F] to-90% hover:text-white" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-first from-10% via-first via-30% to-[#0F0F0F] to-90%">
                            More
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
