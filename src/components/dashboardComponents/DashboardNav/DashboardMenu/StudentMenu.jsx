/* eslint-disable react/prop-types */
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { GrResources } from "react-icons/gr";


const StudentMenu = ({ isActive }) => {
    const studentLinks = ['/my-class','/my-lab','/resources','/recommended','/studentdashboard'];
    const studentMenu = ['My Class','My Lab','Resources','Recommended','student dashboard'];
    const icons = [
        <MdOutlineDashboardCustomize key={studentLinks[0]} />,
        <SiBookstack key={studentLinks[1]} />,
        <GrResources key={studentLinks[2]}/>,
        <GrResources key={studentLinks[3]}/>,
        <GrResources key={studentLinks[4]}/>,

    ];

    const location = useLocation();
    return (
        <div className="">
        {studentLinks.map((link, index) => (
           <ol key={link} className={`flex gap-3  ${isActive ? 'flex-col justify-center items-center' : ''}`}>
               <li style={{
                   padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                   fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                   color: location.pathname.startsWith(`/dashboard${link}`) ? "white" : "white",
               }} className={`flex gap-3   ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                   <Link to={`/dashboard${link}`} className={`flex gap-3 my-2 dark:text-white ${isActive ? 'flex-col justify-center items-center' : ''}`}>
                       {icons[index]}
                       <p className={`flex gap-3 dark:text-white ${isActive ? 'flex-col text-xs  items-start' : ''}`}>{studentMenu[index]}</p>
                        
                   </Link>
               </li>
           </ol>
       ))}
   </div>
    );
};

export default StudentMenu;