import { Link, Outlet } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";


const LiveClass = () => {
    const handleClick = () => {
        window.location.reload();
    }

    return (
        <div className=" my-5 mx-4 mt-14 p__cormorant min-h-screen">
            <div className="px-3 py-4 w-full bg-first text-center flex justify-center items-center headtext__cormorant">
                <div className="text-base border border-white bg-second px-4 py-2 hover:bg-white hover:text-black">
                    <Link to={"teacher-help"} className="flex text-black justify-center items-center"><IoMdHelp /> Help</Link>
                </div>
                <div className="px-3 py-4 w-full bg-first text-center flex flex-col justify-center items-center">
                    <h1 className="text-black text-2xl">Click the button and start live class</h1>
                    <button className="text-black animate-bounce"><FaChevronDown /></button>
                    <button onClick={handleClick} className="border border-black rounded-lg">
                        <Link to={"video-class"}>
                            <a href="#" target="blank" className="flex items-center p-2 text-gray-900 hover:bg-gray-100 hover:rounded-lg ">
                                <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap text-black">Live Class</span>
                                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full bg-second text-white">Pro</span>
                            </a>
                        </Link>
                    </button>
                </div>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default LiveClass;