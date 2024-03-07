/* eslint-disable react/prop-types */
import { ImProfile } from "react-icons/im";
import { PiSignOutFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import useUserRole from "../../../Hooks/useUserRole";

const UserProfileDropdownContent = ({ user, handleLogout }) => {
    const [role] = useUserRole();
    const currenUserRole = role[0]?.role;
    return (
        <div className="dropdown dropdown-hover p__cormorant">
            <div className="w-10" tabIndex={0} role="button">
                {user ? (
                    <img
                        className="h-10 w-10 rounded-full border border-green-950 p-1"
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
                    <Link to="/dashboard/profile">
                        <ImProfile />
                        Profile
                    </Link>
                </li>


                <li>  <small className="text-sm">Welcome to Innavate Edu... </small></li>
                <hr className="border-[1px] border-second mb-2" />
                <li className="text-xl font-bold">{user?.name}</li>
                <li className="text-xl font-extrabold">{currenUserRole}</li>
                <li>
                    <div className="mt-2 border-[1px] border-second">
                        <hr className="my-1" />
                        <button onClick={handleLogout} className="flex items-center text-[18px] font-medium gap-1 p-2 duration-200 transform hover:text-second hover:font-extrabold rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "> <PiSignOutFill /> Logout</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default UserProfileDropdownContent;
