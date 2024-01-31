/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ManuList = ({ address, linkTitle }) => {
    return (
        <NavLink
            to={address}
            className={({ isActive }) =>
                ` flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform hover:bg-transparent hover:text-first rounded-2xl hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${isActive ? ' bg-first text-white' : ''
                }`} >
            {/* <span>{<Icon className="w-5 h-8 mr-1 " />}</span> */}
            {linkTitle}
        </NavLink>
    );
};

export default ManuList;