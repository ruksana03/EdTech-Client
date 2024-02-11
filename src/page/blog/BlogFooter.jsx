import { FaGithub,FaFacebook,FaInstagram  } from "react-icons/fa";

const BlogFooter = () => {
    return (
        <div className="bg-[#BFCFE7] h-12 flex flex-col justify-center md:flex-row gap-4 items-center"> 
            <FaGithub/>
            <FaFacebook/>
            <FaInstagram/>
        </div>
    );
};

export default BlogFooter;