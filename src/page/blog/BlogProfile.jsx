import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Features/Utilities";
import { logoutUser } from "../../Features/UserSlice";
import useBlogs from "../../Hooks/useBlogs";
import PostBlogCard from "../../components/blogComponents/PostBlogCard";
import { AiOutlineLogout } from "react-icons/ai";

const BlogProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.data.user.user);

    const { AllBlogs } = useBlogs();
    console.log(AllBlogs);
    const currentUserEmail = user?.email;

    const filteredBlogs = AllBlogs.filter(blog => blog.userEmail === currentUserEmail);
    console.log(filteredBlogs);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("successfully logout ");
                dispatch(logoutUser());
            })
            .catch((error) => {
                console.log(error.massage);
            });
    };

    return (
        <div className="w-10/12 mx-auto md:pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center my-4">
                <div className="my-8 flex flex-col md:flex-row gap-4">
                    <img className="h-24 w-24 rounded-full" src={user?.photo} alt="" />
                    <h1 className="headtext__cormorant">{user?.name}</h1>
                </div>
                <div className="p__cormorant flex">
                    <button className="btn-style mx-4">Edit Profile</button>
                    <button className="btn-style flex gap-4 justify-center items-center" onClick={handleLogout}>Logout <AiOutlineLogout/></button>
                </div>
            </div>
            <div>
                {
                    filteredBlogs?.length > 0 && filteredBlogs.map(blog => <PostBlogCard key={blog._id} blog={blog} user={user} />)
                }
            </div>

        </div>
    );
};

export default BlogProfile;