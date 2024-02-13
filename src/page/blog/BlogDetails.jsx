import { Link, useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blog = useLoaderData();
    // console.log(blog)

    // content, imageUrl, postTime, title, userEmail, userName, userPhoto, _id


    return (
        <div className="w-10/12 mx-auto mt-24">

            <div className="flex justify-start gap-4 items-center">
                <img className="w-12 h-12 rounded-full" src={blog?.userPhoto} alt="" />
                <p>{blog?.userName}</p>
                <p>{blog?.postTime}</p>
            </div>

            <div className="my-12 flex justify-between">
                <img className="" src={blog?.imageUrl} alt="" />
                <p>{blog?.content}</p>

                <Link to={`/blog/blog-updated/${blog?._id}`}> <button>Update</button></Link>




            </div>



        </div>
    );
};

export default BlogDetails;
