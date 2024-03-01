/* eslint-disable react/prop-types */
import { MdOutlineDashboardCustomize, MdRecommend} from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { GrResources } from "react-icons/gr";
import { FaCalendarDay } from "react-icons/fa";
// import { AiFillLike } from "react-icons/ai";
// import { SlCalender } from "react-icons/sl";
// import { FaTentArrowsDown } from "react-icons/fa6";


const StudentMenu = ({ isActive }) => {
    const studentLinks = ['/my-class','/my-lab','/resources','/recommended','/studentdashboard','/routine','/my-enroll','/certifications'];
    const studentMenu = ['My Class','My Lab','Resources','Recommended','student dashboard', 'Routine','My Enroll','Certifications'];
    
    const icons = [
        <MdOutlineDashboardCustomize key={studentLinks[0]} />,
        <SiBookstack key={studentLinks[1]} />,
        <GrResources key={studentLinks[2]}/>,
        <MdRecommend key={studentLinks[3]}/>,
        <GrResources key={studentLinks[4]} />,
        <FaCalendarDay key={studentLinks[5]}/>,
        <GrResources key={studentLinks[6]}/>,
        <LiaCertificateSolid key={studentLinks[7]}/>,
        

    ];

    const location = useLocation();
    return (
        <div className="p__cormorant">
        {studentLinks.map((link, index) => (
           <ol key={link} className={`flex gap-3 text-base ${isActive ? 'flex-col justify-center items-center' : ''}`}>
               <li style={{
                   padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                   fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                   color: location.pathname.startsWith(`/dashboard${link}`) ? "white" : "white",
               }} className={`flex gap-3   ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                   <Link to={`/dashboard${link}`} className={`flex justify-center items-center gap-3 my-2  ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                       {icons[index]}
                       <p className={`flex gap-3  ${isActive ? 'flex-col text-xs  items-start' : ''}`}>{studentMenu[index]}</p>
                        
                   </Link>
               </li>
           </ol>
       ))}
   </div>
    );
};

export default StudentMenu;