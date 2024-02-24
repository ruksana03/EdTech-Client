import { useSelector } from "react-redux";
import BlogBanner from "../../components/blogComponents/BlogBanner";
import BlogOptions from "../../components/blogComponents/BlogOptions";
import PostedBlogs from "../../components/blogComponents/PostedBlogs";


const BlogHome = () => {
     const user = useSelector((state) => state.data.user.user);
    console.log(user)
    return (
        <div>
            <BlogBanner/>
            <BlogOptions/>
            <PostedBlogs user={user}/>
        </div>
    );
};

export default BlogHome;




