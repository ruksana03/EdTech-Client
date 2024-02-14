/* eslint-disable react/prop-types */
import "../../../Styles/scrollbar.css"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../shared/Logo";
import { useSelector } from "react-redux";
import { HiBellAlert } from "react-icons/hi2";
import useUsers from "../../../Hooks/useUsers";
import StudentMenu from "../DashboardNav/DashboardMenu/StudentMenu";
import TeacherMenu from "../DashboardNav/DashboardMenu/TeacherMenu";
import AdminMenu from "../DashboardNav/DashboardMenu/AdminMenu";
import { CgProfile } from "react-icons/cg";
import { FaAnglesRight } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const DSidebarMenu = ({ handleReverse, isActive }) => {
    // const DSidebarMenu = () => {

    const user = useSelector(state => state.data.user.user);
    const { AllUsers } = useUsers();
    const getMenuBasedOnRole = () => {
        if (user && AllUsers) {
            const loggedInUser = AllUsers.find(u => u.email === user.email);
            if (loggedInUser) {
                if (loggedInUser.role === 'student') {
                    return <StudentMenu handleReverse={handleReverse} isActive={isActive} />;
                } else if (loggedInUser.role === 'teacher') {
                    return <TeacherMenu handleReverse={handleReverse} isActive={isActive} />;
                } else if (loggedInUser.role === 'admin') {
                    return <AdminMenu handleReverse={handleReverse} isActive={isActive} />;
                }
            }
        }
        return null;
    };

    const links = ['/dashboard', '/notes','/my-cart', '/profile'];
    const menuNames = ['Dashboard', 'Notes','My Cart', 'Profile'];
    const icons = [
        <MdOutlineDashboardCustomize key={links[0]} className="text-2xl" />,
        <SiBookstack key={links[1]} className="text-2xl" />,
        <FaShoppingCart key={links[2]} className="text-2xl" />,
        <CgProfile key={links[3]} className="text-2xl" />
    ];

    const location = useLocation();

    return (
        <div className={`fixed pl-4 flex flex-col lg:gap-4  ${isActive ? 'pl-0 ' : ' space-y-2'}`}>
            <div className="flex items-center justify-center fixed right-0 top-4 z-[1]  ">
                <span onClick={handleReverse} className={` hidden md:block lg:block w-auto cursor-pointer border rounded-full text-[26px] px-2 py-[2px] ${isActive ? ' rotate-180 w-12 h-8' : 'bg-first text-white  w-16 h-8 '}`}>
                    <FaAnglesRight className="hover:scale-100" />
                </span>
            </div>
            <div className="pt-8 md:pt-10 lg:pt-3">
                {console.log("isActive:", isActive)}
                {isActive ? '' : <Logo isActive={isActive} />}

            </div>

            <div>
                {user ? (

                    <div >
                        <hr className="mb-3" />
                        <div className={`flex gap-3 justify-between items-center ${isActive ? 'flex-col justify-center ' : ''}`}>
                            <Link to={'/dashboard/profile'}>
                                <div className={`flex gap-3 justify-start items-center ${isActive ? 'flex-col justify-center ' : ''}`}>
                                    <img
                                        className={`h-12 w-12 rounded-full border border-green-950 p-1 ${isActive ? 'h-8 w-8' : ''}`}
                                        src={user?.photo}
                                        alt=""
                                    />
                                    <div className="text-xs font-bold">
                                        <p>Welcome</p>
                                        <p>{user?.name}</p>
                                    </div>
                                </div>
                            </Link>
                            <HiBellAlert />

                        </div>
                        <hr className="mt-2" />
                    </div>

                ) : (
                    <hr />
                )}
            </div>
            <div className='flex flex-col justify-between flex-1 overflow-y-auto max-h-[150px] custom-scrollbar'>
                {getMenuBasedOnRole()}
            </div>

            <hr className="border border-first " />
            {links.map((link, index) => (
                <ol key={link} className={`flex gap-3   ${isActive ? 'flex-col justify-center items-center' : ''}`}>

                    <li style={{
                        padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                         
                        fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                        color: location.pathname.startsWith(`/dashboard${link}`) ? "white" : "white",
                    }} className={`flex gap-3 font-alt text-xl ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                        <Link to={`/dashboard${link}`} className={`flex gap-3 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                            {icons[index]}
                            <p className={`flex gap-3 dark:text-white ${isActive ? 'flex-col text-xs  items-start' : ''}`}>{menuNames[index]}</p>
                        </Link>
                    </li>
                </ol>
            ))}
        </div>
    );
};

export default DSidebarMenu;