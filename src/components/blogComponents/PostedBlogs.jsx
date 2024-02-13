/* eslint-disable react/prop-types */
import "../../Styles/scrollbar.css";
import useBlogs from "../../Hooks/useBlogs";
import PostBlogCard from "./PostBlogCard";
// import { Link } from "react-router-dom";

const PostedBlogs = ({user}) => {
    const { AllBlogs } = useBlogs();
    console.log(AllBlogs);

    const reversedAllBlogs = [...AllBlogs].reverse();
  
    return (
        <div className="w-full md:w-10/12 lg:w-10/12 mx-auto pr-4 custom-scrollbar overflow-y-auto max-h-[80vh]">
         {/* <Link to='/blog-details'>   <button>hi</button></Link> */}
            <div className="">
                {
                    reversedAllBlogs?.length > 0 && reversedAllBlogs.map(blog => <PostBlogCard key={blog._id} blog={blog} user={user}/>
                    )
                }
            </div>
        </div>
    );
};

export default PostedBlogs;
