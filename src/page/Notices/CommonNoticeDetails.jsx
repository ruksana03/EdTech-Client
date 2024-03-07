/* eslint-disable no-unused-vars */
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram ,FaFacebookF,FaFacebookMessenger,FaWhatsapp ,FaLinkedinIn,FaYoutube,FaTelegramPlane } from "react-icons/fa";
import { BsBing } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
const CommonNoticeDetails = () => {

    const data = useLoaderData();
    const {image,date,title,description,hostEmail,hostName,sentForCourse,sentNotices,_id} = data || {};

    return (
        <div className="section-container my-12 p__cormorant">
            <div className="">
                <h1 className="text-xl font-semibold ">Job Title Hellow Sushil How Are You</h1>
                <p>Published on 12-05-2023</p>
                <hr className="my-8" />
            </div>
            <div className="w-full mb-5">
                <figure className="w-full h-[350px]"> 
                    <img src={image} alt="notice-image" className="w-full h-full" />
                </figure>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, inventore fuga temporibus nemo explicabo error sit aspernatur magni harum dolorum qui voluptates, rem sint pariatur quia dicta dolor natus laboriosam tempora odio? Labore quisquam cum amet odit maiores, voluptate illo aspernatur vitae obcaecati minima eum natus corporis, recusandae totam sit quidem unde ut vero ipsum deserunt veniam autem error excepturi suscipit. Sint aperiam distinctio recusandae animi culpa corrupti. Quia praesentium, quisquam eligendi, beatae tenetur saepe rem ipsam officiis pariatur, alias delectus dolorem velit error maxime illo! Velit quae beatae est aliquam unde? Ipsum rerum architecto, esse qui quidem officiis facere tempore asperiores aspernatur deserunt magnam nulla possimus, quia cupiditate. Deserunt quae quas tenetur officia placeat nulla odio commodi cum consectetur est similique sit atque, id excepturi ullam. Quidem cupiditate praesentium nisi tenetur quo corporis. Soluta nobis ipsam magnam maxime, distinctio blanditiis qui mollitia voluptatibus dolore aut vitae, neque quae voluptatum sint, velit ab ullam dicta? Quibusdam facilis molestias iure similique culpa. Veniam nostrum nihil quos cum. Obcaecati porro, doloribus ut blanditiis quasi quibusdam quo animi odit aut harum vel tempore nisi at error commodi magni accusantium? Sequi tempora iure dignissimos cupiditate quaerat error blanditiis ab ratione. Voluptatum hic neque voluptatibus?</p>
            <div className="space-y-1 my-6">
                <h1 className="font-bold">Jhon Deo</h1>
                <h4>Director</h4>
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

export default CommonNoticeDetails;