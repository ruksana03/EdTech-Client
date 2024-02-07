// import BlogRightSide from "./BlogRightSide";
// import { Outlet } from "react-router-dom";
// import BlogNev from "../../components/blogComponents/BlogNev";

// const Blog = () => {
//     return (
//         // <div className="grid grid-cols-12">
//         <div className="grid grid-cols-12">
//             <div className="col-span-0 md:col-span-0 lg:col-span-1">
//                 <BlogNev />
//             </div>
//             <div className="col-span-9 px-3 md:col-span-8 py-2 lg:col-span-8 border-e-[1px] border-s-[1px] border-[#0B4534] mb-4">
//                 <Outlet />
//             </div>
//             <div className="hidden col-span-3 md:block md:col-span-4 md: lg:block lg:col-span-3 ">
//                 <BlogRightSide />
//             </div>

//         </div>
//     );
// };

// export default Blog;
import BlogNev from "../../components/blogComponents/BlogNev";
import { Outlet } from "react-router-dom";
import BlogFooter from "./BlogFooter";
import { useSelector } from "react-redux";

const Blog = () => {
    const user = useSelector((state) => state.data.user.user);
    console.log(user)
    return (
        <div>
        <div className="lg:fixed top-0 left-0 w-full z-50">
        <BlogNev user={user}/>
        </div>
        
        <Outlet></Outlet>
       <BlogFooter/>
    </div>
    );
};

export default Blog;