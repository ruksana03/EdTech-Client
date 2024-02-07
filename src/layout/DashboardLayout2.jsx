import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { loginUser, logoutUser, setLoading } from "../Features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FaGraduationCap } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RxCross1 } from 'react-icons/rx';
import DSidebar from "../components/dashboardComponents/DashboardSidebar/DSidebar";
import { FiMenu } from "react-icons/fi";
import useTheme from "../Hooks/useTheme";
// import { PiSignOutFill } from "react-icons/pi";
import DSidebarMenu from "../components/dashboardComponents/DashboardSidebar/DSidebarMenu";
import { logOut } from "../Features/Utilities";
import DashboardRightManu from "../components/dashboardComponents/DashboardNav/DashboardRightManu";

const DashboardLayout2 = () => {
    const dispatch = useDispatch();
    const axiosPublic = useAxiosPublic();
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const [left, setLeft] = useState(false);
    const { changeTheme, mode } = useTheme()
    const user = useSelector((state) => state.data.user.user);
    const handleReverse = () => {
        setIsActive(!isActive);
    };
    const handleToggle = () => {
        setLeft(!left);
    };
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("successfully logout ");
                dispatch(logoutUser());
                return navigate('/')
            }).catch((error) => {
                console.log(error.massage);
            })
    }

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
            <div className={`flex items-center justify-between bg-first dark:bg-zinc-700 dark:text-gray-400  ${isActive ? 'w-full md:w-[calc(100%-150px)] md:pl-8 transition-all duration-200 lg:w-[calc(100%-160px)]' : ' w-full md:w-[calc(100%-186px)] lg:w-[calc(100%-250px)] transition duration-200 ease-in-out'} float-right lg:px-5 px-3 md:px-5 shadow sticky inset-0 top-0 z-10 mb-5 `}>
                <div className=" hidden md:block lg:block relative">
                    <div className={` border-e-2 dark:text-gray-400 dark:bg-zinc-800  overflow-x-hidden z-10 fixed pt-3 bg-white overflow-y-auto h-screen px-2 inset-y-0 left-0 transform ${isActive ? ' transition-all duration-200 w-[calc(100%-160px)] md:w-[150px] lg:w-[160px]' : ' w-[160px] md:w-[186px] lg:w-[250px] lg:translate-x-0 dark:text-gray-400 dark:bg-zinc-800 transition duration-200 ease-in-out'} `}>
                        <Link to="/">
                            <article className="font-bold absolute left-14 top-4 dark:text-gray-400 text-black ">
                                <FaGraduationCap className="  dark:text-green-500 text-first text-4xl " /> <br />
                                <span className="dark:text-green-500 text-first absolute left-0 top-8">ED</span>
                            </article>
                        </Link>
                        <div className="pt-10">
                            {
                                isActive ? <RxCross1 onClick={handleReverse} className="absolute right-0 top-0 dark:text-gray-400 text-black text-2xl cursor-pointer block md:hidden lg:hidden" /> : ''
                            }
                            {isActive ? <DSidebarMenu handleReverse={handleReverse} isActive={isActive} /> : <DSidebar handleReverse={handleReverse} isActive={isActive} setIsActive={setIsActive} />}
                        </div>
                    </div>
                </div>
                {/* hidden for responsive in mobile device */}
                <div className=" block md:hidden lg:hidden">
                    <FiMenu onClick={handleToggle} className="text-3xl cursor-pointer hover:text-green-600 text-white transit duration-200" />
                    <div className={`z-10 fixed pt-3 bg-white overflow-y-auto w-2/3 h-screen px-2 inset-y-0 left-0 transform ${left && ' transition-all duration-200 -translate-x-full'} lg: dark:text-gray-400 dark:bg-zinc-800 transition-all duration-200 border-e-2`}>
                        {/* <FaDeleteLeft onClick={handleToggle} className="relative right-2 top-2 text-5xl cursor-pointer hover:text-red-600" /> */}
                        {/* <DSidebarMenu handleReverse={handleReverse} isActive={isActive} /> */}
                        <DSidebar handleReverse={handleReverse} isActive={isActive} setIsActive={setIsActive} handleToggle={handleToggle} />
                    </div>
                </div>
                <div>
                    <DashboardRightManu changeTheme={changeTheme} mode={mode} user={user} handleLogout={handleLogout} />
                </div>
            </div>
            <div className={`bg-[#f1f5f9] py-5 -z-10 dark:bg-zinc-800 dark:text-gray-400 w-auto ${isActive ? ' md:ml-[150px] md:w-[calc(100%-150px)] lg:ml-[160px] lg:w-[calc(100%-160px)] transition-all duration-200 ' : 'w-auto md:ml-[186px] md:w-[calc(100%-186px)] lg:ml-[250px] lg:w-[calc(100%-250px)] transition-all duration-200'}`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout2;