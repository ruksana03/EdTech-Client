/* eslint-disable react/prop-types */
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";


const TeacherMenu = ({ isActive }) => {
    const teacherLinks = ['/post-resources'];
    const teacherMenu = ['Resources'];
    const icons = [
        <MdOutlineDashboardCustomize key={teacherLinks[0]} />];

    const location = useLocation();
    return (
        <div className="">
        {teacherLinks.map((link, index) => (
           <ol key={link} className={`flex gap-3 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
               <li style={{
                   padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                   // border: location.pathname.startsWith(`/dashboard${link}`) ? "1px solid black" : "",
                   fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                   color: location.pathname.startsWith(`/dashboard${link}`) ? "black" : "black",
               }} className={`flex gap-3 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
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