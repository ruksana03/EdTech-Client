/* eslint-disable no-unused-vars */
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram ,FaFacebookF,FaFacebookMessenger,FaWhatsapp ,FaLinkedinIn,FaYoutube,FaTelegramPlane } from "react-icons/fa";
import { BsBing } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
const NoticeHomeDetails = () => {
    const data = useLoaderData();
    const {image,date,title,description,hostEmail,hostName,sentForCourse,sentNotices,_id} = data || {};
    return (
        <div className="section-container pt-24 pb-12 text-white p__cormorant">
            <div className="">
                <h1 className="text-2xl font-semibold headtext__cormorant">{title}</h1>
                <p className="text-sm">Published on {date?.slice(0,10)}</p>
                <hr className="my-8" />
            </div>
            <div className="w-full mb-5">
                <figure className="w-full h-[350px]"> 
                    <img src={image} alt="notice-image" className="w-full h-full" />
                </figure>
            </div>
            <p>{description}</p>
            <div className="space-y-1 my-6">
                <h1 className="font-bold">{hostName}</h1>
                <h4>{sentForCourse}</h4>
                <p>{sentNotices}</p>
            </div> 

            <div className="space-y-3 text-white">
                <h1>Share This</h1>
                <div className="flex items-center gap-1">
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaTwitter className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FcGoogle className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaFacebookF className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaInstagram className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaFacebookMessenger  className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaWhatsapp  className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <BsBing className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaLinkedinIn  className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaYoutube  className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaTelegramPlane className="text-black w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeHomeDetails;