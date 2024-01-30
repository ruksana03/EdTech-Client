import BlogRightSide from "./BlogRightSide";
import { Outlet } from "react-router-dom";
import BlogNev from "../../components/blogComponents/BlogNev";

const Blog = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-0 md:col-span-0 lg:col-span-1">
                <BlogNev />
            </div>
            <div className="col-span-9 px-3 md:col-span-8 py-2 lg:col-span-8 border-e-[1px] border-s-[1px] border-[#0B4534] mb-4">
                <Outlet />
            </div>
            <div className="hidden col-span-3 md:block md:col-span-4 md: lg:block lg:col-span-3 ">
                <BlogRightSide />
            </div>

        </div>
    );
};

export default Blog;