/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import NavLinkMenu from "./NavLinkMenu";
import { useDispatch, useSelector } from "react-redux";
import useAdmin from "../../../Hooks/useAdmin";
import { FaRegUserCircle, FaCartPlus } from "react-icons/fa";
import { logOut } from "../../../Features/Utilities";
import { logoutUser } from "../../../Features/UserSlice";
import Logo from "../../shared/Logo";
import NavUserButton from "../NavUserButton";
import useTheme from "../../../Hooks/useTheme";
import Sidebar from "./Sidebar";

const Navbar = ({ children }) => {
    const { changeTheme, mode } = useTheme()
    const [active, setActive] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleClick = () => {
        setActive(!active)
    }
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
                    <div className="w-full section-container navbar flex items-center justify-between lg:flex-row lg:justify-between border-b dark:border-first sticky inset-0 z-10 ">
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
                        <NavLinkMenu isScrolled={isScrolled}/>
                        <div>
                            <NavUserButton
                                user={user}
                                handleLogout={handleLogout} />
                            <div
                                className="hidden lg:block">
                                <div
                                    className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={changeTheme}
                                        className="swap swap-rotate ">
                                        {
                                            mode === "dark"
                                                ?
                                                <FiSun
                                                    className="w-8 h-8 text-white" />
                                                :
                                                <MdOutlineDarkMode
                                                    className="w-8 h-8 text-black" />
                                        }
                                    </button>
                                    <button
                                        className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
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
                                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                                                <button
                                                    className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"
                                                ><FaRegUserCircle />
                                                </button>
                                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Navbar;


// const Navber = () => {
//     return (
//         <div>
//             Navber
//         </div>
//     );
// };

// export default Navber;