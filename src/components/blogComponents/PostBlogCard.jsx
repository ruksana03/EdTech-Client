/* eslint-disable react/prop-types */
import "../../Styles/scrollbar.css"
// import { useEffect, useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";

const PostBlogCard = ({ blog, user }) => {
    console.log(user?.email)
    const { _id, userPhoto, userName, userEmail, postTime, title, content, imageUrl } = blog || {};

    const currentUserEmail = user?.email;

    // Determine if the current user is the author of the blog
    const isCurrentUserAuthor = currentUserEmail === userEmail;

    return (
        <div>
            <div className=" dark:text-gray-300  border border-black mb-4 p-4 rounded-lg bg-[#333333] text-white">
                <div className="flex gap-2 justify-start items-center">
                    <img className="h-8 w-8 my-2 rounded-full" src={userPhoto} alt="blog-image" />
                    <p className="text-xs font-medium">{userName}</p>
                    <p className="text-xs font-medium">{postTime}</p>
                </div>
                <h1 className="text-xl font-bold my-2">{title}</h1>
                <div className="flex justify-between">
                    <p className="overflow-hidden overflow-ellipsis line-clamp-2 w-1/2">{content}</p>
                    <img className="h-40 rounded-lg object-cover w-1/2" src={imageUrl} alt="post-image" />
                </div>
                {/* <hr className="border-[1px] border-black my-2"/> */}
                <div className="flex my-3 text-2xl gap-3 justify-between">
                    <p className="text-xs">Front End Development</p>
                    <div className="flex gap-2 text-xl">

                        {/* <Link to={`/blog/blog-updated/${blog?._id}`}>
                            <div className="group relative">
                                <CiEdit className="cursor-pointer border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% hover:text-white" />
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">
                                    Edit
                                </span>
                            </div>
                        </Link> */}

                        <Link to={isCurrentUserAuthor ? `/blog/blog-updated/${_id}` : '#'} className={isCurrentUserAuthor ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}>
                            <div className="group relative">
                                <CiEdit className="border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% hover:text-white" />
                                {isCurrentUserAuthor && (
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">
                                        Edit
                                    </span>
                                )}
                            </div>
                        </Link>

                        <div className="group relative">
                            <CiSaveDown2 className="cursor-pointer border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% hover:text-white" />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">
                                Save
                            </span>
                        </div>

                        <div className="group relative">
                            <IoIosRemoveCircleOutline className="cursor-pointer border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% hover:text-white" />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">
                                Remove
                            </span>
                        </div>
                        <div className="group relative">
                            <IoIosMore className="cursor-pointer border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% hover:text-white" />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">
                                More
                            </span>
                        </div>


                        {/* <Link to={`/blog-details/${blog?._id}`}> */}
                        <div className="group relative">
                            <Link to={`/blog/blog-details/${_id}`}>
                                <TbListDetails className="cursor-pointer border-2 border-white rounded-full p-1 text-2xl font-bold group-hover:underline hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% hover:text-white" />
                            </Link>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white p-1 rounded-md text-xs hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">
                                Details
                            </span>
                        </div>

                        {/* <Link to={`/blog/blog-details/${_id}`} className="flex items-center rounded-md btn-style btn-sm focus:outline-none focus:ring-4 focus:ring-blue-300">
                            <LiaDirectionsSolid className="text-lg" />
                            <span className="ml-2">More</span>
                        </Link> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBlogCard;