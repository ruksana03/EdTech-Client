/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHome, FaBlog } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useEffect, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { useSelector } from "react-redux";


const BlogNev = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const user = useSelector((state) => state.data.user.user);

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
        <div className={`flex justify-between items-center p-4 text-white 
        ${isScrolled ? "" : "bg-transparent"}`}
        style={{ backdropFilter: isScrolled ? "blur(5px)" : "none" }}>

            <nav className={`  p__cormorant `}>
                <ul className="flex  justify-start items-start  ">
                    <li className=" px-4 py-1">
                        <Link to="/" className=" flex gap-2 justify-start items-center text-sm"><FaHome /> Home</Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/blog" className="flex gap-2 justify-start items-center text-sm"><FaBlog /> Blogs</Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/blog/blog-settings" className="flex gap-2 justify-start items-center text-sm"><IoSettings /> Settings</Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/Contact" className="flex gap-2 justify-start items-center text-sm"><IoSettings /> Contact</Link>
                    </li>
                    <li className="px-4 py-1">
                        {
                            user ? (
                                <Link to="/blog/blog-profile" className="flex gap-2 justify-start items-center text-sm">
                                    <ImProfile />
                                    Profile
                                </Link>
                            ) : (
                                null 
                            )
                        }
                    </li>

                </ul>
            </nav>
            <div>
                <ul className="flex  justify-start items-start p__cormorant ">
                    <li className=" px-4 py-1">
                        <Link
                            to={{
                                pathname: "/blog/new-blog",
                                state: { user: user }
                            }}
                            className="flex gap-2 justify-start items-center text-sm"
                        >
                            <TfiWrite /> Write
                        </Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/" className="flex gap-2 justify-start items-center text-sm"><IoIosNotifications className="text-2xl" /></Link>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default BlogNev;