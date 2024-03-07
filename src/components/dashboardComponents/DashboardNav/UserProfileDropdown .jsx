/* eslint-disable react/prop-types */
import UserProfileDropdownContent from "./UserProfileDropdownContent ";

const UserProfileDropdown = ({ user, handleLogout }) => {
    return (
        <details className="dropdown">
            <summary className="m-1">
                {/* User Avatar */}
                <div className="avatar text-black">
                    <div className="w-8">
                        {user ? (
                            <img src={user?.photo} className="w-8 h-8 rounded-full cursor-pointer" alt="User" />
                        ) : (
                            <img
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                className="w-8 h-8 rounded-full"
                                alt="Default User"
                            />
                        )}
                    </div>
                </div>
            </summary>
            {/* User Profile Dropdown Content */}
            <UserProfileDropdownContent user={user} handleLogout={handleLogout} />
        </details>
    );
};

export default UserProfileDropdown;
