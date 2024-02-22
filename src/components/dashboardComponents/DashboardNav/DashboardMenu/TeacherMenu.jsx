/* eslint-disable react/prop-types */
import { MdOutlineDashboardCustomize, MdAdd, MdNotificationAdd   } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { BiSolidNotification } from "react-icons/bi";
import { FaCalendarDay } from "react-icons/fa";

const TeacherMenu = ({ isActive }) => {
    const teacherLinks = ['/post-resources', '/add-course','/provide-rutine' ,'/create-notice','/show-notices'];
    const teacherMenu = ['Resources', 'AddCourse', 'Provide Rutine', 'Add Notice','Show Notices'];
    const icons = [
        
        <MdOutlineDashboardCustomize className="text-xl" key={teacherLinks} />,
            <MdAdd className="text-xl" key={teacherLinks[1]} />,
            <FaCalendarDay className="text-xl" key={teacherLinks[2]} />,
            <MdNotificationAdd  className="text-xl" key={teacherLinks[3]} />,
            <BiSolidNotification  className="text-xl" key={teacherLinks[4]} />,
           
       
    
    ];

    const location = useLocation();

    // console.log(isActive);
    return (
        <div className="">
        {teacherLinks.map((link, index) => (
           <ol key={link} className={`flex gap-3 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
               <li style={{
                   padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                    
                   fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                   color: location.pathname.startsWith(`/dashboard${link}`) ? "white" : "white",
               }} className={`flex gap-3 p__cormorant dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                   <Link to={`/dashboard${link}`} className={`flex gap-3 my-2 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                       {icons[index]}
                       <p className={`flex gap-3 dark:text-white ${isActive ? 'flex-col text-xs  items-start' : ''}`}>{teacherMenu[index]}</p>
                       {/* <hr className="border-[1px] border-black w-full" style={{color:location.pathname.startsWith(`/dashboard${link}`)? 'green':'black'}}/> */}
                   </Link>
               </li>
           </ol>
       ))}
   </div>
    );
};

export default TeacherMenu;