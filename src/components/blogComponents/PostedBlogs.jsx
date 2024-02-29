/* eslint-disable react/prop-types */
import "../../Styles/scrollbar.css";
import useBlogs from "../../Hooks/useBlogs";
import PostBlogCard from "./PostBlogCard";
import { useSelector } from "react-redux";


const PostedBlogs = () => {
    const { AllBlogs } = useBlogs();
    const user = useSelector((state) => state.data.user.user);
    const sortedAllBlogs = [...AllBlogs].reverse();

    return (
        <div className="w-full md:w-10/12 lg:w-10/12 mx-auto pr-4 custom-scrollbar overflow-y-auto max-h-[80vh]">
            <div className="">
                {
                    sortedAllBlogs?.length > 0 && sortedAllBlogs.map(blog => <PostBlogCard key={blog._id} blog={blog} user={user} />
                    )
                }
            </div>

        </div>
    );
};

export default PostedBlogs;
