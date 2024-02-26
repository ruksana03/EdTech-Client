/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavUserButton = ({ user, handleLogout }) => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-full lg:hidden block">
      <div className="dropdown dropdown-hover">
        <div className="w-12" tabIndex={0} role="button">
          {
            user ? (<img className="h-12 w-12 rounded-full border border-green-950 p-1" src={user?.photo} alt="" />) : (<img src="https://i.ibb.co/Ryq7SXV/profile.png" className="h-12 w-12 rounded-full" />)
          }
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-44 relative right-1">
          <li>
            <Link
              to='/dashboard/dashboard'
              className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
              {t("navbarDash.dashboard")}
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard/profile'
              className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
              {t("navProfile.profile")}
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">
              {t("navLogout.logout")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavUserButton;