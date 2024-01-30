/* eslint-disable react/prop-types */
import { FaAnglesLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import UserProfileDropdown from "../DashboardNav/UserProfileDropdown ";
import DSidebarMenu from "./DSidebarMenu";
import useTheme from "../../../Hooks/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../Features/Utilities";
import { logoutUser } from "../../../Features/UserSlice";


const DSidebar  = ({ isActive,setIsActive }) => {
    const { changeTheme, mode } = useTheme();
    const user = useSelector(state => state.data.user.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
                logOut()
                    .then(() => {
                        console.log("successfully logout ");
                        dispatch(logoutUser());
                    }).catch((error) => {
                        console.log(error.massage);
                    })
            }

    return (
        <div className="">
            {/* Sidebar Content */}
            <div className={`flex items-center justify-between bg-first dark:bg-black h-12  dark:text-gray-400 w-[calc(100%-3rem)] py-[10px] md:w-[calc(100%-3rem)] ${isActive && 'md:w-[calc(100%-250px)] transition-all duration-200 lg:w-[calc(100%-52px)]'} lg:w-[calc(100%-250px)] float-right px-5 border-l`}>

                <div>
                    <span onClick={() => setIsActive(!isActive)} className={`z-50 absolute top-2 left-56 flex items-center gap-0 cursor-pointer border rounded-full p-2 ${isActive && 'rotate-180 z-50 fixed top-2 left-56 flex items-center gap-0 cursor-pointer border rounded-full p-2'}`}>
                        <FaAnglesLeft />
                    </span>
                    <div className={`z-10 fixed pt-3 bg-white overflow-y-auto w-[48px] lg:w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive && ' transition-all duration-200 w-[calc(100%-250px)] md:w-[250px] lg:w-[50px]'} lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                        <DSidebarMenu/>
                    </div>
                </div>

                {/* Additional Sidebar Content */}
                <div className="flex items-center text-white justify-center gap-5 ">
                    {/* Theme Toggle */}
                    <button onClick={changeTheme} className="swap swap-rotate ">
                        {mode === "dark" ? <FiSun className="w-8 h-8 text-white" /> : <MdOutlineDarkMode className="w-8 h-8 text-black" />}
                    </button>
                    {/* Other Buttons */}
                    <button className="relative">
                        {/* Cart Icon with Notification */}
                        {/* <article className="w-6 h-6 text-white bg-red-400 rounded-full text-base absolute -top-5 left-2">5</article> */}
                        <FaShoppingCart className="text-xl z-10" />
                    </button>
                    <button><IoMdSettings className="text-xl" /></button>
                    <button><HiMiniBellAlert className="text-xl" /></button>
                    {/* User Profile Dropdown */}
                    <UserProfileDropdown user={user} handleLogout={handleLogout} />
                </div>
            </div>
        </div>
    );
};
export default DSidebar;