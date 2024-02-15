/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ManuList = ({ address, linkTitle }) => {
    return (
        <NavLink
            to={address}
            className={({ isActive }) =>
                ` flex items-center text-xl font-medium px-4 py-2 duration-200 transform hover:bg-transparent hover:text-first rounded-2xl hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${isActive ? ' text-red-300 font-extrabold border-x-0 ' : ''
                }`} >
            {linkTitle}
        </NavLink>
    );
};

export default ManuList;