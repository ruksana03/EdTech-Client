/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import NavLinkMenu from "./NavLinkMenu";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUserCircle, FaCartPlus } from "react-icons/fa";
import { logOut } from "../../../Features/Utilities";
import { logoutUser } from "../../../Features/UserSlice";
import Logo from "../../shared/Logo";
// import noticeIcon from "../../../assets/new.gif";
import noticeIcon from '../../../assets/new-n.gif';
import NavUserButton from "../NavUserButton";
import useTheme from "../../../Hooks/useTheme";
import Sidebar from "./Sidebar";
import useStudentSpecificNotices from "../../../Hooks/useStudentSpecificNotices";
import useTeacherSpecificNotices from "../../../Hooks/useTeacherSpecificNotices";
import useUserRole from "../../../Hooks/useUserRole";
import useCommonNotices from "../../../Hooks/useCommonNotices";

// const Navbar = ({ children }) => {
const Navbar = () => {
    const { changeTheme, mode } = useTheme()
    const [userNotices, studentRefetch,] = useStudentSpecificNotices();
    const [teacherNotices, teacherRefetch,] = useTeacherSpecificNotices();
    const [commonNotices, commonRefetch, isLoading] = useCommonNotices();
    const [role,] = useUserRole();
    const currentRole = role[0]?.role;
    const [active, setActive] = useState(true);
    const user = useSelector(state => state.data.user.user);
    const [isScrolled, setIsScrolled] = useState(false);
    console.log(userNotices, user);
    studentRefetch();
    teacherRefetch();
    commonRefetch();
    const dispatch = useDispatch();
    const handleClick = () => {
        setActive(!active)
    }
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("successfully logout ");
                dispatch(logoutUser());
            }).catch((error) => {
                console.log(error.massage);
            })
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className={`drawer-content flex flex-col dark:bg-zinc-800   ${isScrolled ? " fixed top-0 left-0 w-full z-50 bg-first text-white" : " bg-base-300"}`}>
                    {/* Navbar */}
                    <div className="w-full section-container navbar flex items-center justify-between lg:flex-row lg:justify-between dark:border-first sticky inset-0 z-10 ">
                        <div className="flex-none lg:hidden dark:text-white text-black">
                            <div className={`w-72 md:w-96 z-10 h-[100vh] fixed  dark:bg-zinc-800 dark:text-gray-400 inset-0 lg:hidden transition-all duration-200 ${active && '-translate-x-full dark:bg-zinc-800 '}`}>
                                <Sidebar handleClick={handleClick} />
                            </div>
                            <button
                                onClick={handleClick}
                                className="block text-black lg:hidden text-3xl cursor-pointer  dark:text-gray-400" >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16">
                                    </path>
                                </svg>
                            </button>

                        </div>
                        <Logo />
                        <NavLinkMenu isScrolled={isScrolled} />
                        <div>
                            <NavUserButton user={user} handleLogout={handleLogout} />
                            <div className="hidden lg:block">
                                {/* notice show here  */}
                                <div className="flex items-center justify-center gap-4">
                                    {
                                        currentRole === 'student' && <Link to='notices/user-notices'>
                                            <button
                                                className="text-[18px] font-medium w-8 h-8 mr-5 duration-200 transformhover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
                                                {/* <IoNotificationsSharp /> */}
                                                <img src={noticeIcon} alt="notice" className="w-full h-full scale-110 rounded-full" />
                                                <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-white rounded-full flex items-center justify-center">{userNotices?.length}</span>
                                            </button> 
                                            </Link>
                                    }
                                    {
                                        currentRole === 'teacher' &&
                                        <Link to='notices/teacher-notices'> <button
                                            className="text-[18px] font-medium w-8 h-8 mr-3 mt-4 duration-200 transformhover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
                                            {/* <IoNotificationsSharp /> */}
                                            <img src={noticeIcon} alt="notice" className="w-full h-full scale-110 rounded-full" />
                                            <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-white rounded-full flex items-center justify-center">{teacherNotices?.length}</span>
                                        </button>
                                        </Link>
                                    }
                                    {
                                        (currentRole !== 'student' && currentRole !== 'teacher') && currentRole !== 'admin' && <Link to='notices/new-notices'> <button
                                            className="text-[18px] font-medium w-8 h-8 mr-5 duration-200 transformhover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
                                            {/* <IoNotificationsSharp /> */}
                                            <img src={noticeIcon} alt="notice" className="w-full h-full scale-110 rounded-full" />
                                            <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-white rounded-full flex items-center justify-center">{commonNotices?.length}</span>
                                        </button>
                                        </Link>
                                    }

                                    <button onClick={changeTheme} className="swap swap-rotate ">
                                        {
                                            mode === "dark"
                                                ?
                                                <FiSun
                                                    className="w-8 h-8 text-white" />
                                                :
                                                <MdOutlineDarkMode
                                                    className="w-8 h-8" />
                                        }
                                    </button>
                                    <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
                                        <FaCartPlus />
                                    </button>
                                    {
                                        user
                                            ? (
                                                <div
                                                    className="dropdown dropdown-hover">
                                                    <div
                                                        className="w-12"
                                                        tabIndex={0}
                                                        role="button">

                                                        {
                                                            user
                                                                ? (
                                                                    <img className="h-12 w-12 rounded-full border border-green-950 p-1"
                                                                        src={user?.photo}
                                                                        alt="" />
                                                                ) : (
                                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="h-12 w-12 rounded-full"  />
                                                                )}
                                                    </div>
                                                    <ul
                                                        tabIndex={0}
                                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-44 relative right-1">
                                                        <li>
                                                            <Link to='/dashboard/dashboard'
                                                                className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
                                                                Dashboard
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={handleLogout}
                                                                className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
                                                                Logout
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ) : (
                                                <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"><FaRegUserCircle />
                                                </button>
                                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


