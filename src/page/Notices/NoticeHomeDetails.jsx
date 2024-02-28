import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram ,FaFacebookF,FaFacebookMessenger,FaWhatsapp ,FaLinkedinIn,FaYoutube,FaTelegramPlane } from "react-icons/fa";
import { BsBing } from "react-icons/bs";
// import image from '../../assets/NOTICE.png'
import { useLoaderData } from "react-router-dom";
const NoticeHomeDetails = () => {
    const data = useLoaderData();
    const {image,date,title,description,} = data || {};
    // console.log(data);
    return (
        <div className="section-container pt-24 pb-12 text-white font-serif">
            <div className="font-serif">
                <h1 className="text-2xl font-semibold ">{title}</h1>
                <p>Published on {date?.slice(0,10)}</p>
                <hr className="my-8" />
            </div>
            <div className="w-full mb-5">
                <figure className="w-full h-[350px]"> 
                    <img src={image} alt="notice-image" className="w-full h-full" />
                </figure>
            </div>
            <p>{description}</p>
            <div className="space-y-1 my-6">
                <h1 className="font-bold">Jhon Deo</h1>
                <h4>Teacher</h4>
                <p>Career Guidance & Counseling (CGC)</p>
            </div>
            <div className="space-y-3">
                <h1>Share This</h1>
                <div className="flex items-center gap-1">
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaTwitter className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FcGoogle className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaFacebookF className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaInstagram className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaFacebookMessenger  className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaWhatsapp  className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <BsBing className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaLinkedinIn  className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaYoutube  className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                    <div className="w-20 h-12 rounded flex items-center justify-center bg-first hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                        <FaTelegramPlane className="text-white w-full h-full p-3 hover:scale-110 hover:text-green-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeHomeDetails;