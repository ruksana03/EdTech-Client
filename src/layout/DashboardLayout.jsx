/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DSidebar from "../components/dashboardComponents/DashboardSidebar/DSidebar";
import { useDispatch } from "react-redux";
import { loginUser, setLoading } from "../Features/UserSlice";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
import DNavbar from "../components/dashboardComponents/DashboardNav/DNavbar";
import { FaAnglesRight } from "react-icons/fa6";
import DSidebarMenu from "../components/dashboardComponents/DashboardSidebar/DSidebarMenu";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();

  const [isActive, setIsActive] = useState(false);

  const handleReverse = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          loginUser({
            name: currentUser.displayName,
            email: currentUser.email,
            photo: currentUser.photoURL,
          })
        );
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            dispatch(setLoading(false));
          }
        });
      } else {
        // Remove token
        localStorage.removeItem("access-token");
        dispatch(setLoading(false));
      }
    });

    return () => {
      return unsubscribe;
    };
  }, [dispatch, axiosPublic]);

  return (
    <div>
      <div className={`flex  items-center justify-between bg-first dark:bg-zinc-800 dark:text-gray-400 float-right md:px-5 shadow sticky inset-0 top-0 z-10 mb-5 py-[10px] ${isActive ? 'transition-all duration-200 w-[calc(100%-80px)] md:w-[calc(100%-250px)] lg:w-[calc(100%-150px)]' : 'w-[calc(100%-80px)] md:w-[calc(100%-150px)] '}  `}>
        <div className="relative">
            <span onClick={handleReverse} className={` absolute z-50  -top-6 left-6 flex items-center gap-0 cursor-pointer border rounded-full p-2 ${isActive && 'rotate-180 -left-16 z-50 cursor-pointer border rounded-full p-2'}`}>
          <FaAnglesRight />
        </span>  
        </div>

        {/* <div className={`flex justify-between bg-white dark:bg-zinc-800 dark:text-gray-400 lg:w-[150px]  py-[10px] ${isActive && 'lg:w-[calc(100%-150px)]'}`}> */}
    
        {/* <div className={`z-10 fixed pt-3 bg-white overflow-y-auto  w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive ? 'transition-all duration-200 w-[100px] px-0' : 'lg:translate-x-0'} dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}> */}
        <div className={`z-10 fixed pt-3 bg-white overflow-y-autoh-screen px-2 inset-y-0  left-0 transform lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out ${isActive ? ' transition-all duration-200 w-[80px] lg:w-[calc(100%-150px]' : ' w-20 lg:w-[250px]' }`}>
          {/* <DSidebarMenu/> */}
          <DSidebarMenu handleReverse={handleReverse} isActive={isActive} />
        </div>
        <DNavbar />
      </div>
      <div className={`bg-[#f1f5f9] dark:bg-zinc-800 mb-12 dark:text-gray-400 w-full h-screen ${isActive ? 'md:ml-[150px] md:w-[calc(100%-150px)]  lg:ml-[150px] lg:w-[calc(100%-150px)] transition-all duration-200 ' : ' md:ml-[256px] md:w-[calc(100%-256px)] lg:ml-[250px] lg:w-[calc(100%-250px)]'}`}>
        <Outlet />
      </div>
    </div>

  );
};

export default DashboardLayout;
{/* <div className={`z-10 fixed pt-3 bg-white overflow-y-auto w-[48px] md:w-[140px] lg:w-[240px] h-screen px-2 inset-y-0 left-0 transform ${isActive && ' transition-all duration-200 w-[calc(100%-250px)] md:w-[80px] lg:w-[calc(100%-120px]'} lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}> */ }

{/* <div className="border-1 border-black">
          <DSidebar handleReverse={handleReverse} isActive={isActive} setIsActive={setIsActive} />
        </div> */}
{/* <div className={`bg-[#f1f5f9] dark:bg-zinc-800 dark:text-gray-400 w-full h-screen ${isActive ? ' md:ml-[250px] md:w-[calc(100%-250px)] lg:ml-[48px] lg:w-[calc(100%-48px)] transition-all duration-200 ' : 'ml-[48px] w-[calc(100%-48px)] md:ml-[48px] md:w-[calc(100%-48px)] lg:ml-[250px] lg:w-[calc(100%-250px)]'}`}> */ }