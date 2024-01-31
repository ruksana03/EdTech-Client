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
    <>
      <DNavbar />
      <div className={`flex justify-between bg-white dark:bg-zinc-800 dark:text-gray-400  py-[10px] w-[calc(100%-250px)] ${isActive ? 'transition-all duration-200 w-[calc(100%-100px)]' : 'w-[calc(100%-250px)]'} float-right px-5 border-l`}>
        <div className="border-1 border-black">
          <DSidebar handleReverse={handleReverse} isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className={"bg-[#f1f5f9] dark:bg-zinc-800 dark:text-gray-400 w-full h-screen"}>
          <Outlet />
        </div>
      </div>
    </>

  );
};

export default DashboardLayout;
