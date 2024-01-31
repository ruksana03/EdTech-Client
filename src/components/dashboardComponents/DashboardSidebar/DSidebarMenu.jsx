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

const DSidebarMenu = () => {

    const user = useSelector(state => state.data.user.user);
    const { AllUsers } = useUsers();
    const getMenuBasedOnRole = () => {
        if (user && AllUsers) {
            const loggedInUser = AllUsers.find(u => u.email === user.email);
            if (loggedInUser) {
                if (loggedInUser.role === 'student') {
                    return <StudentMenu />;
                } else if (loggedInUser.role === 'teacher') {
                    return <TeacherMenu />;
                } else if (loggedInUser.role === 'admin') {
                    return <AdminMenu />;
                }
            }
        }
        return null;
    };

    const links = ['/dashboard', '/notes','/profile'];
    const menuNames = ['Dashboard', 'Notes', 'Profile'];
    const icons = [
        <MdOutlineDashboardCustomize key={links[0]} />,
        <SiBookstack key={links[1]} />];

    const location = useLocation();

    return (
        <div className="fixed pl-4 flex flex-col lg:gap-4 dark:text-white">
            <div className="pt-10">
                <Logo />
            </div>

            <div>
                {user ? (

                    <div >
                        <hr className="my-2" />
                        <div className="flex gap-3 justify-between items-center">
                            <Link to={'/dashboard/profile'}>
                                <div className="flex gap-3 justify-start items-center">
                                    <img
                                        className="h-12 w-12 rounded-full border border-green-950 p-1"
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
                        <hr className="my-2" />
                    </div>

                ) : (
                    <hr />
                )}
            </div>
            <div className='flex flex-col justify-between flex-1 mt-6'>
                {getMenuBasedOnRole()}
            </div>

            <hr className="border border-first dark:border-white"/>

            {links.map((link, index) => (
                <ol key={link}>
                    <li style={{
                        padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                        border: location.pathname.startsWith(`/dashboard${link}`) ? "1px solid black" : "",
                        fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                        color: location.pathname.startsWith(`/dashboard${link}`) ? "black" : "black",
                    }} className="dark:text-white">
                        <Link to={`/dashboard${link}`} className="flex gap-3 dark:text-white">
                            {icons[index]}
                            {menuNames[index]}
                        </Link>
                    </li>
                </ol>
            ))}
        </div>
    );
};

export default DSidebarMenu;