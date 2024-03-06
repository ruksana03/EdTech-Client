/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import UserProfileDropdownContent from "./UserProfileDropdownContent ";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import { HiMiniBellAlert } from "react-icons/hi2";
import useTeacherNotice from "../../../Hooks/useTeacherNotice";
import useAdminNotice from "../../../Hooks/useAdminNotice";
import useUserRole from "../../../Hooks/useUserRole";


const DashboardRightManu = ({ user, handleLogout }) => {
    const { AllTeacherNotice } = useTeacherNotice();
    const { AllAdminNotice } = useAdminNotice();
    const [role] = useUserRole();
    const currentRole = role[0]?.role
    const [cart] = useCart();

    return (
        <div className="flex items-center justify-center gap-5  text-white">
            <Link to='/notices' className="flex items-center gap-2">
                <HiMiniBellAlert className="ml-2 text-xl" />
                {currentRole === 'student' && <div className="badge badge-warning">+{AllTeacherNotice?.length}</div>}
                {currentRole === 'teacher' && <div className="badge badge-warning">+{AllAdminNotice?.length}</div>}
            </Link>

            <Link
                to='/dashboard/my-cart'>
                <button
                    className="flex items-center">
                    <FaShoppingCart
                        className="mr-2 text-xl">
                    </FaShoppingCart>
                    <div
                        className="badge badge-warning">
                        +{cart.length}
                    </div>
                </button>
            </Link>
            {/* notice show here  */}
            <div className="flex items-center justify-center gap-4">

                <UserProfileDropdownContent user={user} handleLogout={handleLogout} />
            </div>
        </div>



    );
};

export default DashboardRightManu;