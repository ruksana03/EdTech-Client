import { useState } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { TiEyeOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { FaAnglesLeft } from "react-icons/fa6";
import DmanuList from "../dashboard menulist/DmanuList";
import Swal from "sweetalert2";
import PDMenuList from "../PDMenuList";
import { IoMenu } from "react-icons/io5";


const BookmarkLayout = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setActive(!active)
    }
    const handleClickModal = () => {
        Swal.fire({
            title: "Do you want to show more content?",
            text: "Show there then add bookmarks.",
            showCancelButton: true,
            confirmButtonText: "Show",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    return navigate('/dashboard/my-class');
                }
            });
    }
    return (
        <div className="h-screen">
            <div className="mx-5 flex flex-col md:flex-row lg:flex-row items-start gap-10">
                <div className="w-full md:w-auto lg:w-auto">
                    <div className="flex items-center gap-5">
                        <span onClick={handleClick} className={`cursor-pointer text-2xl text-black hover:text-first bg-white dark:bg-zinc-700 dark:text-gray-400 px-5 py-2 rounded-full flex items-center justify-center gap-2 ${active ? 'block' : 'hidden'}`}><IoMenu /></span>
                        <span className={`flex items-center justify-center gap-3 text-2xl ${active ? 'block' : 'hidden'}`}>
                            <PDMenuList address={'show-bookmarks'} icon={TiEyeOutline} />
                            <button onClick={handleClickModal} className="w-full flex items-center justify-center text-2xl font-medium px-4 gap-1 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 my-2 hover:bg-blue-50"> <span><MdBookmarkAdded /></span></button>
                        </span>
                    </div>
                    <div className={`z-10 w-fullmd:w-56 lg:w-64  h-auto bg-white px-5 py-8 mt-5 overflow-x-hidde overflow-y-auto inset-y-0 left-0 transform ${active && ' transition-all duration-200  hidden'} lg:translate-x-0 dark:text-gray-400 dark:bg-zinc-700 transition duration-200 ease-in-out `}>
                        {
                            active ? <span onClick={handleClick} className="absolute right-2 top-1 text-black text-2xl cursor-pointer block md:hidden lg:hidden">
                                <FaAnglesLeft />
                            </span> : <RxCross1 onClick={handleClick} className="absolute right-2 top-1 text-black dark:text-gray-400 text-2xl cursor-pointer block md:hidden lg:hidden" />
                        }
                        <DmanuList address={'show-bookmarks'} linkTitle={'Show Bookmarks'} icon={TiEyeOutline} />
                        <button onClick={handleClickModal} className="w-full flex items-start text-[18px] font-medium px-4 gap-1 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 my-2 hover:bg-blue-50"> <span><MdBookmarkAdded /></span>Add Bookmarks</button>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default BookmarkLayout;