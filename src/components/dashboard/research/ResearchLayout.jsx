import { useState } from "react";
import { SiRoamresearch } from "react-icons/si";
import { GiAncientRuins } from "react-icons/gi";
import { Outlet } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaAnglesLeft } from "react-icons/fa6";
import DmanuList from "../dashboard menulist/DmanuList";
import PDMenuList from "../PDMenuList";
import { IoMenu } from "react-icons/io5";

const ResearchLayout = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <div className="mx-5 flex flex-col md:flex-row lg:flex-row items-start gap-10">
            <div className="w-full md:w-auto lg:w-auto">
                <div className="flex items-center gap-5">
                    <span onClick={handleClick} className={`cursor-pointer text-2xl text-black hover:text-first bg-white dark:bg-zinc-700 dark:text-gray-400 px-5 py-2 rounded-full flex items-center justify-center gap-2 ${active ? 'block' : 'hidden'}`}><IoMenu /></span>
                    <span className={`flex items-center justify-center gap-3 text-2xl ${active ? 'block' : 'hidden'}`}>
                        <PDMenuList address={'digital-research'} icon={SiRoamresearch} />
                        <PDMenuList address={'ancient-research'} icon={GiAncientRuins} />
                    </span>
                </div>
                <div className={`z-10 w-fullmd:w-56 lg:w-64 h-auto dark:bg-zinc-700 dark:text-gray-400  bg-white px-5 py-8 mt-5 overflow-x-hidde overflow-y-auto inset-y-0 left-0 transform ${active && ' transition-all duration-200  hidden'} lg:translate-x-0 transition duration-200 ease-in-out `}>
                    {
                        active ? <span onClick={handleClick} className="absolute right-2 top-1 text-black text-2xl cursor-pointer block md:hidden lg:hidden">
                            <FaAnglesLeft />
                        </span> : <RxCross1 onClick={handleClick} className="absolute right-2 top-1 text-black text-2xl cursor-pointer block md:hidden lg:hidden" />
                    }
                    <DmanuList address={'digital-research'} linkTitle={'Digital Research'} icon={SiRoamresearch} />
                    <DmanuList address={'ancient-research'} linkTitle={'Ancient Research'} icon={GiAncientRuins} />

                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ResearchLayout;