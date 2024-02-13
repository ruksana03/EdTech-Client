
import BlogNev from "../../components/blogComponents/BlogNev";
import { Outlet } from "react-router-dom";
import BlogFooter from "./BlogFooter";

const Blog = () => {
    // const user = useSelector((state) => state.data.user.user);
    // console.log(user)
    return (
        <div>
            <div className="lg:fixed top-0 left-0 w-full z-50">
                <BlogNev />
            </div >
            <div className=' min-h-[calc(100vh-48px)]'>
                <Outlet></Outlet>
            </div>
            <BlogFooter />
        </div>
    );
};

export default Blog;