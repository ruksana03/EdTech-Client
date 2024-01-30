import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { GrResources } from "react-icons/gr";


const StudentMenu = () => {
    const links = ['/my-class','/my-lab','/resources','/recommended'];
    const menuNames = ['My Class','My Lab','Resources','Recommendation'];
    const icons = [
        <MdOutlineDashboardCustomize key={links[0]} />,
        <SiBookstack key={links[1]} />,
        <GrResources key={links[2]}/>,
        <GrResources key={links[3]}/>,

    ];

    const location = useLocation();
    return (
        <div>
            {links.map((link, index) => (
                <ol key={link}>
                    <li style={{
                        padding: location.pathname.startsWith(`/dashboard${link}`) ? "4px 2px " : "",
                        border: location.pathname.startsWith(`/dashboard${link}`) ? "1px solid black" : "",
                        fontWeight: location.pathname.startsWith(`/dashboard${link}`) ? "bold" : "normal",
                        color: location.pathname.startsWith(`/dashboard${link}`) ? "black" : "black",
                    }} className="dark:text-white">
                        <Link to={`/dashboard${link}`} className="flex gap-3 my-2 dark:text-white hover:font-extrabold">
                            {icons[index]}
                            {menuNames[index]}
                        </Link>
                    </li>
                </ol>
            ))}
        </div>
    );
};

export default StudentMenu;