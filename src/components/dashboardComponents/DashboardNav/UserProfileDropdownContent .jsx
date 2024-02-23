/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { MdOutlineChatBubble, MdOutlineForwardToInbox } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";

const UserProfileDropdownContent = ({ user, handleLogout }) => {
    console.log(user)
    return (
        <ul className="text-black dark:bg-zinc-800 dark:border dark:text-gray-400 p-2 shadow menu dropdown-content z-1 bg-base-100 rounded-box w-56 h-auto relative mt-3 -right-1 md:-right-0 lg:-right-2">
            <small className="text-[14px] my-1">welecome to Innavate Edu... </small>
            <div className="flex items-center gap-5">
                <div>
                    <h1 className="text-xl font-bold">{user?.name}</h1>
                    <h2 className="font-medium">CEO & Founder</h2>
                </div>
            </div>
            <div className="mt-2">
                <button className="flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-first dark:hover:text-green-600 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <FaUser /> Profile</button>
                <div className="flex items-center justify-start gap-1">
                    <button className="flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-first dark:hover:text-green-600 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <MdOutlineForwardToInbox /> Inbox</button>
                    <article className="flex items-center justify-center w-6 h-6 text-white bg-red-400 rounded-full text-base">5</article>
                </div>
                <button className="flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-first dark:hover:text-green-600 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <MdOutlineChatBubble /> Chat</button>
                <div className="flex items-center justify-start">
                    <button className="flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-first dark:hover:text-green-600 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <FaUser /> Upgrade</button>
                    <button className="bg-first text-white px-3 py-1 rounded text-[17px]">Pro</button>
                </div>
                <hr className="my-1" />
                <button onClick={handleLogout} className="flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-first dark:hover:text-green-600 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <PiSignOutFill /> Logout</button>
            </div>
        </ul>
    );
};

export default UserProfileDropdownContent;
