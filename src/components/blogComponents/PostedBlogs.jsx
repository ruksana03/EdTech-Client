/* eslint-disable react/prop-types */
import "../../Styles/scrollbar.css"
import { useEffect, useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";



const PostedBlogs = () => {
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch('../../../public/blogPost.json')
            .then(res => res.json())
            .then(data => {
                setBlogData(data);
            })
    }, []);

    // console.log(blogData);
    return (
        <div className="w-full md:w-10/12 lg:w-10/12 mx-auto pr-4 custom-scrollbar overflow-y-auto max-h-[80vh]">
            <div>
                {
                    blogData?.length > 0 && blogData?.map(data =>
                        <div key={data?.id} className=" dark:text-gray-300">
                            <div className="flex gap-2 justify-start items-center">
                                <img className="h-8 w-8 my-2 rounded-full" src={data?.post_image} alt="blog-image" />
                                <p className="text-xs font-medium">{data?.host_user}</p>
                                <p className="text-xs font-medium">Oct 27, 2023 # Member-only</p>
                            </div>
                            <h1 className="text-xl font-bold my-2">Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                            <div className="flex">
                                <p className="overflow-hidden overflow-ellipsis line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ipsum praesentium non autem at quibusdam distinctio quidem ipsam voluptatem officiis quae numquam nisi, temporibus enim ipsa labore magnam nihil alias? Beatae!</p>
                                <img className="h-20 w-full" src={data?.post_image} alt="post-image" />
                            </div>
                            {/* <hr className="border-[1px] border-black my-2"/> */}
                            <div className="flex my-3 text-2xl gap-3 justify-between">
                                <p className="text-xs">Front End Development</p>
                                <div className="flex gap-2 text-xl">
                                    <div className="group relative">
                                        <CiSaveDown2 className="cursor-pointer border border-black rounded-full p-1 text-2xl font-bold group-hover:underline" />
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs">
                                            Save
                                        </span>
                                    </div>

                                    <div className="group relative">
                                        <IoIosRemoveCircleOutline className="cursor-pointer border border-black rounded-full p-1 text-2xl font-bold group-hover:underline" />
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs">
                                            Remove
                                        </span>
                                    </div>

                                    <div className="group relative">
                                        <IoIosMore className="cursor-pointer border border-black rounded-full p-1 text-2xl font-bold group-hover:underline" />
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs">
                                            More
                                        </span>
                                    </div>

                                    <div className="group relative">
                                        <TbListDetails className="cursor-pointer border border-black rounded-full p-1 text-2xl font-bold group-hover:underline" />
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs">
                                            Details
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 text-xs">
                                <p>USer-name</p>
                                <p>Captions</p>
                            </div>
                            <p>comment</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PostedBlogs;