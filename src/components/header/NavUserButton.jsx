/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NavUserButton = ({user,handleLogout}) => {
    return (
        <div className="w-full lg:hidden block">
                <div className="dropdown dropdown-hover">
                  <div className="w-12" tabIndex={0} role="button">
                   
                        {
                          user?(<img className="h-12 w-12 rounded-full border border-green-950 p-1" src={user?.photo} alt="" />):(<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />)
                        }
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-44 relative right-1">
                    <li><Link to='/dashboard/dashboard' className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Dashboard</Link> </li>
                    <li><button onClick={handleLogout}  className="text-[18px] font-medium px-4 py-2 duration-200 transform text-black hover:bg-transparent hover:text-red-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100">Logout</button></li>
                  </ul>
                </div>
              </div>
    );
};

export default NavUserButton;