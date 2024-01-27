import { Link } from "react-router-dom";


const BlogNev = () => {
    return (
        <nav className=" p-4 ">
            <ul className="flex flex-col justify-start items-start  text-black">
                <li className=" px-4 py-1">
                    <Link to="/blog">Home</Link>
                </li>
                <li className=" px-4 py-1"> 
                    <Link to="/blog/blog-settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default BlogNev;