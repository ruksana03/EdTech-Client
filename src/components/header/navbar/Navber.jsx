/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavLinkMenu from "./NavLinkMenu";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { logOut } from "../../../Features/Utilities";
import { logoutUser } from "../../../Features/UserSlice";
import Logo from "../../shared/Logo";
import NavUserButton from "../NavUserButton";
import Sidebar from "./Sidebar";
import useStudentSpecificNotices from "../../../Hooks/useStudentSpecificNotices";
import useTeacherSpecificNotices from "../../../Hooks/useTeacherSpecificNotices";
import useUserRole from "../../../Hooks/useUserRole";
import useCart from "../../../Hooks/useCart";
import useCommonNotices from "../../../Hooks/useCommonNotices";
import { IoNotificationsSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { CiMenuFries } from "react-icons/ci";
import { ImProfile } from "react-icons/im";


const Navbar = () => {
  const [userNotices, studentRefetch] = useStudentSpecificNotices();
  const [teacherNotices, teacherRefetch] = useTeacherSpecificNotices();
  const [commonNotices, commonRefetch,] = useCommonNotices();
  const [role] = useUserRole();
  const currentRole = role[0]?.role;
  const [active, setActive] = useState(true);
  const user = useSelector((state) => state.data.user.user);
  const [cart] = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  // const [t, i18n] = useTranslation("global");

  const [t, i18n] = useTranslation("global");
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const handleChangeLanguage = () => {
    const newLanguage = isEnglish ? "bn" : "en";
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(newLanguage);
  };

  studentRefetch();
  teacherRefetch();
  commonRefetch();
  const dispatch = useDispatch();
  const handleClick = () => {
    setActive(!active);
  };
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("successfully logout ");
        dispatch(logoutUser());
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:fixed top-0 left-0 w-full z-50">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div
          className={`drawer-content flex flex-col text-white ${isScrolled ? "" : "bg-transparent"
            }`}
          style={{ backdropFilter: isScrolled ? "blur(5px)" : "none" }} >
          {/* Navbar */}
          <div className="w-full section-container navbar flex items-center justify-between lg:flex-row lg:justify-between dark:border-first sticky inset-0 z-10 ">
            <div className="flex-none lg:hidden  text-white">
              <div
                className={`w-72 md:w-96 z-10 h-[100vh] fixed inset-0 lg:hidden transition-all duration-200 ${active && "-translate-x-full  "
                  }`}
              >
                <Sidebar handleClick={handleClick} />
              </div>
              {/* icon for small device  */}
              <button onClick={handleClick} className="block text-first lg:hidden text-2xl cursor-pointer" >
                <CiMenuFries />
              </button>
            </div>
            {/* logo  */}
            <Logo />
            {/* nav manu show ui  */}
            <NavLinkMenu isScrolled={isScrolled} />
            <div>
              <NavUserButton user={user} handleLogout={handleLogout} />
              <div className="hidden lg:block">
                {/* notice show here  */}
                <div className="flex items-center justify-center gap-4">
                  {
                    currentRole === 'student' && <Link to='notices/user-notices'>
                      <button
                        className="text-[18px] font-medium w-8 h-8 mr-5 duration-200 transformhover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
                        <IoNotificationsSharp className="text-2xl" />
                        {/* <img src={noticeIcon} alt="notice" className="w-full h-full scale-110 rounded-full" /> */}
                        <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-black rounded-full flex items-center justify-center">{userNotices?.length}</span>
                      </button>
                    </Link>
                  }
                  {
                    currentRole === 'teacher' &&
                    <Link to='notices/teacher-notices'> <button
                      className="text-[18px] font-medium w-8 h-8 mr-3 mt-4 duration-200 transformhover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
                      <IoNotificationsSharp className="text-2xl" />
                      {/* <img src={noticeIcon} alt="notice" className="w-full h-full scale-110 rounded-full" /> */}
                      <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-black rounded-full flex items-center justify-center">{teacherNotices?.length}</span>
                    </button>
                    </Link>
                  }
                  {
                    (currentRole !== 'student' && currentRole !== 'teacher') && currentRole !== 'admin' && <Link to='notices/new-notices'> <button
                      className="text-[18px] font-medium w-8 h-8 mr-5 duration-200 transformhover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
                      <IoNotificationsSharp className="text-2xl" />
                      {/* <img src={noticeIcon} alt="notice" className="w-full h-full scale-110 rounded-full" /> */}
                      <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-black rounded-full flex items-center justify-center">{commonNotices?.length}</span>
                    </button>
                    </Link>
                  }

                  <Link to='/dashboard/my-cart'><button className="flex items-center">
                    <FaShoppingCart className="mr-2 text-xl"></FaShoppingCart>
                    <div className="badge badge-warning">+{cart.length}</div>
                  </button></Link>
                  {user ? (
                    <div className="dropdown dropdown-hover">
                      <div className="w-12" tabIndex={0} role="button">
                        {user ? (
                          <img
                            className="h-12 w-12 rounded-full border border-green-950 p-1"
                            src={user?.photo}
                            alt=""
                          />
                        ) : (
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        )}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-44 relative right-1"
                      >
                       
                        <li
                          className={`menu-item ${location.pathname.startsWith('/profile') ? 'active' : ''}`}
                        >
                          <Link to="dashboard/profile">
                            <h1>
                              <ImProfile />
                            </h1>
                            <p>{t("navProfile.profile")}</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/dashboard/dashboard"
                            className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"
                          >
                            {t("navbarDash.dashboard")}
                          </Link>

                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"
                          >
                            {t("navLogout.logout")}
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to={`/login`}>
                      <button className="flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 duration-200 transform   text-first hover:bg-transparent hover:text-gray-400 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
                        <GrLogin />
                        {t("navLogin.login")}
                      </button>
                    </Link>
                  )}

                  {/* language chage button  */}
                  <button onClick={handleChangeLanguage} className="mr-4">
                    {isEnglish ? (
                      <div className="flex items-center">
                        <img className="h-4 w-6" src="https://i.ibb.co/SQdjzFm/uk.png" alt="UK Flag" />
                        <span className="ml-1">En</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <img className="h-4 w-6" src="https://i.ibb.co/pLsw4Qd/bn.png" alt="Bangladesh Flag" />
                        <span className="ml-1">বাং</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;