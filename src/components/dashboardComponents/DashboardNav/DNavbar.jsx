/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
// import useTheme from "../../../Hooks/useTheme";
import useAdmin from "../../../Hooks/useAdmin";
import { logOut } from "../../../Features/Utilities";
import { logoutUser } from "../../../Features/UserSlice";
// import { FiSun } from "react-icons/fi";
// import { MdOutlineDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HiMiniBellAlert } from "react-icons/hi2";
import UserProfileDropdown from "./UserProfileDropdown ";


const DNavbar = () => {
    // const { changeTheme, mode } = useTheme()
    const user = useSelector(state => state.data.user.user);
    console.log(user)
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
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
       
         <div className=" flex justify-end items-center text-white gap-5 bg-first">
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
    );
};

export default DNavbar;