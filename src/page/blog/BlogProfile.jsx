import { useSelector } from "react-redux";
import useBlogs from "../../Hooks/useBlogs";


const BlogProfile = () => {
    const { AllBlogs } = useBlogs();
    console.log(AllBlogs);

    const user = useSelector((state) => state.data.user.user);
    const currentUserEmail = user?.email;

    const filteredBlogs = AllBlogs.filter(blog => blog.userEmail === currentUserEmail);
console.log(filteredBlogs);


    // // Determine if the current user is the author of the blog
    // const isCurrentUserAuthor = currentUserEmail === userEmail;

    // const reversedAllBlogs = [...AllBlogs].reverse();

    return (
        <div>
            BlogProfile
        </div>
    );
};

export default BlogProfile;