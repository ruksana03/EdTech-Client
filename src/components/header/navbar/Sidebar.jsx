/* eslint-disable react/prop-types */
import { FiSun } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaBlog } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import {  useSelector } from "react-redux";
import { ImProfile } from "react-icons/im";
import { BiLogIn } from "react-icons/bi";
import { RiDeleteBack2Line   } from "react-icons/ri";




const Sidebar = ({ handleClick }) => {
  const { changeTheme, mode } = useTheme();
  const user = useSelector(state=>state.data.user.user);

  return (
    <>
      <div>
        <ul className="menu dark:bg-zinc-800 bg-blue-50 flex gap-3 items-start pl-12 text-black dark:text-gray-400 relative">
          <div className="absolute right-3 top-2 flex items-center justify-end w-full gap-3">
            <button onClick={changeTheme} className="swap swap-rotate">
              {
                mode === "dark" ?
                  <FiSun className="w-8 h-8 text-white" />
                  :
                  <MdOutlineDarkMode className="w-8 h-8 text-black" />
              }
            </button>
            <button onClick={handleClick} className="text-2xl ">
              <RiDeleteBack2Line  />
            </button>
          </div>
          
            <li>
              <Link to={'/'}>
                <h1><FaHome/></h1>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to={'all-courses'}>
                <h1><HiOutlineExternalLink/></h1>
                <p>All Courses</p>
              </Link>
            </li>
            <li>
              <Link to={'blog'}>
                <h1><FaBlog/></h1>
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link to={'contact'}>
                <h1><IoIosContacts/></h1>
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link to={'dashboard'}>
                <h1><MdDashboardCustomize/></h1>
                <p>Dashboard</p>
              </Link>
            </li>
            {
              user?( <li>
                <Link to={'profile'}>
                  <h1><ImProfile/></h1>
                  <p>Profile</p>
                </Link>
              </li>):( <li>
                <Link to={'login'}>
                  <h1><BiLogIn/></h1>
                  <p>Login</p>
                </Link>
              </li>)
            }       
           
        </ul>
      </div>
    </>
  );
};

export default Sidebar;