/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import useAdmin from "../../../Hooks/useAdmin";
import { logOut } from "../../../Features/Utilities";
import { logoutUser } from "../../../Features/UserSlice";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HiMiniBellAlert } from "react-icons/hi2";
import UserProfileDropdown from "./UserProfileDropdown ";


const DNavbar = () => {
    const user = useSelector(state => state.data.user.user);
    const [isAdmin] = useAdmin();
    const dispatch = useDispatch();
    const handleLogout = () => {
        logOut()
            .then(() => {
                dispatch(logoutUser());
            }).catch((error) => {
                console.log(error.massage);
            })
    }
    return (
       
         <div className=" flex justify-end items-center text-white gap-5 bg-first">
         <button className="relative">
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