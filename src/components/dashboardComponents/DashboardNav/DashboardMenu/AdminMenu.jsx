/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { GiMicrophone } from "react-icons/gi";
import { FaBlog } from "react-icons/fa6";
import { SiContentful } from "react-icons/si";
import { FaUsersViewfinder } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";


const AdminMenu = ({ isActive }) => {
    const adminLinks = ['/allUsers', '/applications', '/allNotices', '/allBlogs', '/allCourses', '/allPaymentInfo'];
    const adminMenu = ['Users','Application', 'Notices', 'Blogs', 'Courses', 'Payment Info'];
    const icons = [
        <FaUsersViewfinder key={adminLinks[0]} className="text-2xl" />,
        <IoIosApps key={adminLinks[1]} className="text-2xl" />,
        <GiMicrophone key={adminLinks[2]} className="text-2xl" />,
        <FaBlog key={adminLinks[3]} className="text-2xl" />,
        <SiContentful key={adminLinks[4]} className="text-2xl" />,
        <RiSecurePaymentFill key={adminLinks[5]} className="text-2xl" />
    ];

    const location = useLocation();
    return (
        <div className="">
            {adminLinks.map((link, index) => (
                <ol key={link} className={`flex gap-3 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                    <li style={{
                        padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                        fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                        color: location.pathname.startsWith(`/dashboard${link}`) ? "white" : "white",
                    }} className={`flex gap-3 font-alt text-xl ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                        <Link to={`/dashboard${link}`} className={`flex gap-3 my-2 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                            {icons[index]}
                            <p className={`flex gap-3 dark:text-white ${isActive ? 'flex-col text-xs  items-start' : ''}`}>{adminMenu[index]}</p>

                        </Link>
                    </li>
                </ol>
            ))}
        </div>
    );
};

export default AdminMenu;