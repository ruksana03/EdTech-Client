/* eslint-disable react/prop-types */
import "../../Styles/scrollbar.css";
import useBlogs from "../../Hooks/useBlogs";
import PostBlogCard from "./PostBlogCard";

const PostedBlogs = () => {
    const { AllBlogs } = useBlogs();
    console.log(AllBlogs);

    const sortedAllBlogs = [...AllBlogs].sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
  
    return (
        <div className="w-full md:w-10/12 lg:w-10/12 mx-auto pr-4 custom-scrollbar overflow-y-auto max-h-[80vh]">
            <div className="">
                {
                    sortedAllBlogs?.length > 0 && sortedAllBlogs.map(blog => <PostBlogCard key={blog._id} blog={blog}/>
                    )
                }
            </div>
        </div>
    );
};

export default PostedBlogs;
