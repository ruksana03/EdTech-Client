import BlogBanner from "../../components/blogComponents/BlogBanner";
import BlogOptions from "../../components/blogComponents/BlogOptions";
import PostedBlogs from "../../components/blogComponents/PostedBlogs";


const BlogHome = () => {
    return (
        <div>
            <BlogBanner/>
            <BlogOptions/>
            <PostedBlogs/>
        </div>
    );
};

export default BlogHome;
