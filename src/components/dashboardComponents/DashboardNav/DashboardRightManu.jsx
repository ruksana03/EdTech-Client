/* eslint-disable react/prop-types */
import { FiShoppingCart, FiSun } from "react-icons/fi";
import UserProfileDropdownContent from "./UserProfileDropdownContent ";
import { IoMdSettings } from "react-icons/io";
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";

const DashboardRightManu = ({ changeTheme, mode, user, handleLogout }) => {
    return (
        <div className="flex items-center justify-center gap-5  text-white">
            <button onClick={changeTheme} className="swap swap-rotate ">
                {
                    mode === "dark" ? <FiSun className="w-8 h-8 text-white" /> : <MdOutlineDarkMode className="w-8 h-8  text-white" />
                }
            </button>
            <button className="relative"> <FiShoppingCart className="text-2xl" /> </button>
            <button><IoMdSettings className="text-2xl" /></button>
            <button><HiMiniBellAlert className="text-2xl" /></button>
            <details className="dropdown">
                <summary className="m-1">
                    <div className="avatar cursor-pointer">
                        <div className="w-12">
                            <img src={user?.photo} alt="profile-photo" className="w-full rounded-full" />
                        </div>
                    </div>
                </summary>
                <UserProfileDropdownContent user={user} handleLogout={handleLogout} />
            </details>
        </div>



    );
};

export default DashboardRightManu;