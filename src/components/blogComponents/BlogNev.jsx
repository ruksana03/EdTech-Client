/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHome, FaBlog } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { useEffect, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { ImProfile } from "react-icons/im";

const BlogNev = ({ user }) => {
    const [isScrolled, setIsScrolled] = useState(false);
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
        <div className={`flex justify-between items-center p-4  ${isScrolled ?  "text-black" : "text-white"}`}
        style={{ backdropFilter: isScrolled ? "blur(10px)" : "none" ,boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none"  }}>
            <nav className={`   `}>
                <ul className="flex  justify-start items-start  ">
                    <li className=" px-4 py-1">
                        <Link to="/" className="flex gap-2 justify-start items-center text-sm"><FaHome /> Home</Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/blog" className="flex gap-2 justify-start items-center text-sm"><FaBlog /> Blogs</Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/blog/blog-settings" className="flex gap-2 justify-start items-center text-sm"><IoSettings /> Settings</Link>
                    </li>
                    <li className=" px-4 py-1">
                        <Link to="/blog/blog-profile" className="flex gap-2 justify-start items-center text-sm"><ImProfile /> Profile</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <ul className="flex  justify-start items-start  ">
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