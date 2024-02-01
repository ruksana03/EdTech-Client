/* eslint-disable react/prop-types */
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaBlog } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import { useSelector } from "react-redux";
import { ImProfile } from "react-icons/im";
import { BiLogIn } from "react-icons/bi";
import { RiDeleteBack2Line } from "react-icons/ri";
import useTheme from "../../../Hooks/useTheme";

const Sidebar = ({ handleClick }) => {
    const { changeTheme, mode } = useTheme();
    const user = useSelector((state) => state.data.user.user);
    const location = useLocation();

    const navLinks = ['/', '/all-courses', '/blog', '/contact', '/dashboard'];
    const menuNames = ['Home', 'Courses', 'Blogs', 'Contact', 'Dashboard'];
    const icons = [
        <FaHome key={navLinks[0]} />,
        <HiOutlineExternalLink key={navLinks[1]} />,
        <FaBlog key={navLinks[2]} />,
        <IoIosContacts key={navLinks[3]} />,
        <MdDashboardCustomize key={navLinks[5]} />
    ];

    return (
     
            <div className="pt-16 menu dark:bg-zinc-800 dark:text-white bg-fourth flex gap-3 items-start pl-12 text-black  h-screen relative">
                <div className="absolute right-1 top-0 flex items-center justify-end w-full gap-3 py-2 pr-4 dark:text-white bg-first text-white">
                    <button onClick={changeTheme} className="swap swap-rotate">
                        {mode === "dark" ? <FiSun className="w-8 h-8 text-white" /> : <MdOutlineDarkMode className="w-8 h-8 text-white" />}
                    </button>
                    <button onClick={handleClick} className="text-2xl ">
                        <RiDeleteBack2Line />
                    </button>
                </div>

                {navLinks.map((link, index) => (
                <ol key={link}>
                    <li style={{
                        padding:location.pathname.startsWith(`${link}`) ? "4px 2px " : "",
                        border: location.pathname.startsWith(`${link}`) ? "1px solid black" : "", 
                        fontWeight: location.pathname.startsWith(`${link}`) ? "bold" : "normal",
                        color: location.pathname.startsWith(`${link}`) ? "black" : "black",
                    }} className="dark:text-white">
                        <Link to={`${link}`} className="flex gap-3 dark:text-white">
                            {icons[index]}
                            {menuNames[index]}
                        </Link>
                    </li>
                </ol>
            ))}

                <div>
                    {
                        user ? (
                            <li className={`menu-item ${location.pathname.startsWith('/profile') ? 'active' : ''}`}>
                                <Link to={'/profile'}>
                                    <h1><ImProfile /></h1>
                                    <p>Profile</p>
                                </Link>
                            </li>
                        ) : (
                            <li className={`menu-item ${location.pathname.startsWith('/login') ? 'active' : ''}`}>
                                <Link to={'/login'}>
                                    <h1><BiLogIn /></h1>
                                    <p>Login</p>
                                </Link>
                            </li>
                        )
                    }
                </div>
            </div>
      
    );
};

export default Sidebar;
