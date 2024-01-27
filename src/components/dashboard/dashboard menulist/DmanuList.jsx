/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const DmanuList = ({ address, icon: Icon, linkTitle }) => {
    return (
        <>
            <NavLink
                to={address}
                className={({ isActive }) =>
                    ` flex items-center text-[18px] font-medium px-4 gap-1 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 my-2 hover:bg-blue-50 ${isActive ? ' bg-blue-50 dark:bg-blue-200 my-2 text-blue-500 dark:text-gray-800' : ''
                    }`} >
                <span>{<Icon className="w-5 h-8 mr-1 " />}</span>
                {linkTitle}
            </NavLink>
        </>
    );
};

export default DmanuList;