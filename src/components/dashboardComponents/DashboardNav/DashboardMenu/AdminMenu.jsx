/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { GiMicrophone } from "react-icons/gi";
import { FaBlog, FaUsersViewfinder } from "react-icons/fa6";
import { SiContentful } from "react-icons/si";
import { RiSecurePaymentFill, RiAdvertisementFill } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { FaPlus, FaQuestion } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineUnsubscribe, MdFeedback, MdDashboardCustomize } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { PiHandshakeDuotone } from "react-icons/pi";


const AdminMenu = ({ isActive }) => {
    const adminLinks = ['/allUsers', '/applications', '/online-applications', '/allNotices', '/allBlogs', '/allCourses', '/quiz', '/allPaymentInfo', '/subscriber', '/all-feedback', '/allpartners', '/add-member', '/add-advertisement', '/add-offer', '/dashboard'];
    const adminMenu = ['Users', 'Application', 'Online Applications', 'Notices', 'Blogs', 'Courses', 'Quiz', 'Payment Info', 'Subscribers', 'Feedback', 'Partners', 'Add Member', 'Advertisement', 'Add Offer', 'Dashboard'];

    const icons = [
        <FaUsersViewfinder key={adminLinks[0]} className="text-2xl" />,
        <IoIosApps key={adminLinks[2]} className="text-2xl" />,
        <HiOutlineStatusOnline key={adminLinks[1]} className="text-2xl" />,
        <GiMicrophone key={adminLinks[3]} className="text-2xl" />,
        <FaBlog key={adminLinks[4]} className="text-2xl" />,
        <SiContentful key={adminLinks[5]} className="text-2xl" />,
        <FaQuestion key={adminLinks[6]} className="text-2xl" />,
        <RiSecurePaymentFill key={adminLinks[7]} className="text-2xl" />,
        <MdOutlineUnsubscribe key={adminLinks[8]} className="text-2xl" />,
        <MdFeedback key={adminLinks[9]} className="text-2xl" />,
        <PiHandshakeDuotone key={adminLinks[10]} className="text-2xl" />,
        <IoPersonAdd key={adminLinks[11]} className="text-2xl" />,
        <RiAdvertisementFill key={adminLinks[12]} className="text-2xl" />,
        <FaPlus key={adminLinks[13]} className="text-2xl" />,
        <MdDashboardCustomize key={adminLinks[14]} className="text-2xl" />
    ];

    const location = useLocation();
    return (
        <div className="p__cormorant">
            {adminLinks.map((link, index) => (
                <ol key={link} className={`flex gap-3 text-base ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                    <li style={{
                        padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                        fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                        color: location.pathname.startsWith(`/dashboard${link}`) ? "white" : "white",
                    }} className={`flex gap-3  ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                        <Link to={`/dashboard${link}`} className={`flex gap-3 my-2  ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                            {icons[index]}
                            <p className={`flex gap-3  ${isActive ? 'flex-col text-xs  items-start' : ''}`}>{adminMenu[index]}</p>

                        </Link>
                    </li>
                </ol>
            ))}
        </div>
    );
};

export default AdminMenu;