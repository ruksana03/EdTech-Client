import { useState } from "react";

import {  Outlet } from "react-router-dom";
import DSidebar from "../components/dashboardComponents/DashboardSidebar/DSidebar";



const DashboardLayout = () => {
    const [isActive, setIsActive] = useState(false);
  

    const handleReverse = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            {/* Sidebar */}
            <DSidebar isActive={isActive} setIsActive={setIsActive} handleReverse={handleReverse}/>

            {/* Main Content */}
            <div className={`bg-[#f1f5f9] dark:bg-zinc-800 dark:text-gray-400 w-full h-screen ${isActive ? ' md:ml-[250px] md:w-[calc(100%-250px)] lg:ml-[48px] lg:w-[calc(100%-48px)] transition-all duration-200 ' : 'ml-[48px] w-[calc(100%-48px)] md:ml-[48px] md:w-[calc(100%-48px)] lg:ml-[250px] lg:w-[calc(100%-250px)]'}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
