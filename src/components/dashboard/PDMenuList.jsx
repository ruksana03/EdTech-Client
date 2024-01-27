/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const PDMenuList = ({ address, icon: Icon, }) => {
    return (
        <>
            <NavLink
                to={address}
                className={({ isActive }) =>
                    ` flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 my-2 hover:bg-blue-50 ${isActive ? ' bg-white rounded-full dark:bg-blue-200 my-2 text-blue-500 dark:text-gray-800' : ''
                    }`} >
                <span>
                    {<Icon className="rounded-full w-9 h-9 text-[22px]" />}</span>
            </NavLink>
        </>
    );
};

export default PDMenuList;