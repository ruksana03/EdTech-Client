/* eslint-disable react/prop-types */
import { FaAnglesRight } from "react-icons/fa6";
import DSidebarMenu from "./DSidebarMenu";

const DSidebar = ({ handleReverse, isActive }) => {


  return (
    <div className="">
      <div>
        <span onClick={handleReverse} className={`fixed z-50  top-2 left-6 flex items-center gap-0 cursor-pointer border rounded-full p-2 ${isActive && 'rotate-180 z-50 flex left-6  transition-all duration-200 items-center gap-0 cursor-pointer border  rounded-full p-2'}`}>
          <FaAnglesRight />
        </span>
        {/* <div className={`z-10 fixed pt-3 bg-white overflow-y-auto  w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive ? 'transition-all duration-200 w-[100px] px-0' : 'lg:translate-x-0'} dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}> */}
        <div className={`z-10 fixed pt-3 bg-white overflow-y-auto w-[48px] md:w-[140px] lg:w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive && ' transition-all duration-200 w-[calc(100%-250px)] md:w-[80px] lg:w-[120px]'} lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
          {/* <DSidebarMenu/> */}
          <DSidebarMenu handleReverse={handleReverse} isActive={isActive} />
        </div>
      </div>
    </div>
  );
};
export default DSidebar;
