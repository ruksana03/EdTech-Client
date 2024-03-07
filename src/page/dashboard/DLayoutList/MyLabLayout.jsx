import {  Outlet } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaAnglesLeft } from "react-icons/fa6";
const MyLabLayout = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <div className="h-screen">
            <div className="mx-5 flex flex-col md:flex-row lg:flex-row items-start gap-10">
                <div className="w-full md:w-auto lg:w-auto">
                    <div className="flex items-center gap-5 ">
                        <span onClick={handleClick} className={`cursor-pointer text-2xl text-black hover:text-first bg-white dark:bg-zinc-700 dark:text-gray-400 px-5 py-2 rounded-full flex items-center justify-center gap-2 ${active ? 'block' : 'hidden'}`}><IoMenu /></span>
                        <span className={`flex items-center justify-center flex-wrap gap-3 text-2xl ${active ? 'block' : 'hidden'}`}>
                        </span>
                    </div>
                    <div className={`z-10 w-full md:w-56 lg:w-64 h-auto bg-white px-5 py-8 mt-5 overflow-x-hidde overflow-y-auto inset-y-0 left-0 transform ${active && ' hidden'} lg:translate-x-0 dark:bg-zinc-700 dark:text-gray-400 transition duration-200 ease-in-out `}>
                        {
                            active ? <span onClick={handleClick} className="absolute right-2 top-1 text-black text-2xl cursor-pointer block md:hidden lg:hidden">
                                <FaAnglesLeft />
                            </span> : <RxCross1 onClick={handleClick} className="absolute right-2 top-1 text-black text-2xl cursor-pointer block md:hidden lg:hidden" />
                        }
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MyLabLayout;