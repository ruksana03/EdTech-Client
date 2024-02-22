/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";
import DSidebarMenu from "./DSidebarMenu";

const DSidebar = ({ handleReverse, isActive, handleToggle }) => {
  return (
    <div className=" border-e-2 relative">
      <div className={`z-10 fixed pt-3 p__cormorant  overflow-y-auto w-full  px-2 inset-y-0 left-0 transform ${isActive && ' transition-all  duration-200'} lg:translate-x-0 bg-black transition duration-200 ease-in-out `}>
        {/* <DSidebarMenu/> */}
        <div className="block md:hidden lg:hidden">
          <FaDeleteLeft onClick={handleToggle} className=" absolute right-2 top-2 text-3xl cursor-pointer hover:text-red-600 z-50" />
        </div>
        <DSidebarMenu handleReverse={handleReverse} isActive={isActive} />
      </div>
    </div>
  );
};
export default DSidebar;
