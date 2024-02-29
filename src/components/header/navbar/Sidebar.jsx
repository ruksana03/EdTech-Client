/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImProfile } from 'react-icons/im';
import { BiLogIn } from 'react-icons/bi';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import ManuList from '../../shared/ManuList';
import { useState } from 'react';

const Sidebar = ({ handleClick }) => {
  const user = useSelector((state) => state.data.user.user);
  const location = useLocation();
  const [t, i18n] = useTranslation('global');
  
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const handleChangeLanguage = () => {
    const newLanguage = isEnglish ? "bn" : "en";
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="pt-16 menu bg-black text-white flex gap-3 items-start pl-12 h-screen relative">
      <div className="absolute right-1 top-0 flex items-center justify-end w-full gap-3 py-2 pr-4 bg-first text-white">
        <button onClick={handleClick} className="text-2xl text-black ">
          <RiDeleteBack2Line />
        </button>
              {/* language chage button  */}
              <button onClick={handleChangeLanguage} className="mr-4 text-black">
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

      <div className="flex-none">
        <ul className={`menu menu-horizontal flex flex-col text-white p__cormorant`}>
          {/* Navbar menu content here */}
          <ManuList address={'/'} linkTitle={t('navHome.home')}  />
          <ManuList address={'all-courses'} linkTitle={t('navAllCourse.all-course')}  />
          <ManuList address={'blog'} linkTitle={t('navBlog.blog')}  />
          <ManuList address={'contact'} linkTitle={t('navContact.contact')} />
          <ManuList address={'quest'} linkTitle={t('navQuiz.quiz')} />
        </ul>
      </div>

      <div className="p__cormorant text-white">
        {user ? (
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
        ) : (
          <li
            className={`menu-item ${location.pathname.startsWith('/login') ? 'active' : ''}`}
          >
            <Link to="/login">
              <h1>
                <BiLogIn />
              </h1>
              <p> {t("navLogin.login")}</p>
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
