/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoNotificationsSharp } from "react-icons/io5";

const NotificationButton = ({ to, notificationCount }) => (
  <Link to={to}>
    <button className="text-[18px] font-medium w-8 h-8 mr-5 duration-200 transform hover:bg-transparent rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 relative">
      <IoNotificationsSharp className="text-2xl" />
      <span className="w-6 h-6 absolute -top-3 left-4 bg-first text-black rounded-full flex items-center justify-center">{notificationCount}</span>
    </button>
  </Link>
);
export default NotificationButton;