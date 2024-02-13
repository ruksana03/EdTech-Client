import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Logo from "../../components/shared/Logo";
import { updateBlogInfo } from "../../api/blogs";
import toast from "react-hot-toast";

const UpdatedBlog = () => {
    const navigate = useNavigate();
    const blog = useLoaderData();
    const { content, imageUrl, title, userEmail, userName, userPhoto } = blog || {};

    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedContent, setUpdatedContent] = useState(content);
    const [updatedImageUrl, setUpdatedImageUrl] = useState(imageUrl);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = {
            title: updatedTitle,
            content: updatedContent,
            imageUrl: updatedImageUrl,
            userPhoto,
            userName,
            userEmail
        };

        try {
            const savedPost = await updateBlogInfo(formData);
            console.log('Blog post saved successfully:', savedPost);
            toast.success("Blog post submitted successfully");
            navigate('/blog');
        } catch (error) {
            console.error('Error saving blog post:', error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto py-12 px-12 bg-third w-10/12 ">
                <Link to={'/'} className='flex text-xs font-bold justify-start items-center '><Logo /><p> Draft in {userName}</p></Link>
                <h1 className="text-3xl font-bold mb-4 mt-8">Edit your story</h1>
                <form onSubmit={handleUpdate}>
                    {/* Read-only area */}
                    <div className=' flex flex-col md:flex-row gap-4'>
                        <div className="mb-4">
                            <label htmlFor="userPhoto" className="block text-lg font-semibold mb-2">User Photo</label>
                            <input type="text" id="userPhoto" value={userPhoto} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-none" readOnly />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-lg font-semibold mb-2">User Name</label>
                            <input type="text" id="userName" value={userName} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" readOnly />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="userEmail" className="block text-lg font-semibold mb-2">User Email</label>
                            <input type="text" id="userEmail" value={userEmail} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" readOnly />
                        </div>
                    </div>
                    {/* Editable area */}
                    <div className="mb-4">
                        <input type="text" id="title" value={updatedTitle} placeholder='Title' onChange={(e) => setUpdatedTitle(e.target.value)} className="w-full px-4 py-2  rounded-lg focus:outline-none focus:border-first" />
                    </div>
                    <div className="mb-4">
                        <textarea id="content" value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} placeholder='Tell Your story...' rows="8" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first"></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-lg font-semibold mb-2">Image</label>
                        <input type="text" id="imageUrl" value={updatedImageUrl} onChange={(e) => setUpdatedImageUrl(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" placeholder="Enter image URL or upload" />
                    </div>
                    {/* Button */}
                    <button type="submit" className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#6a6767] transition-colors duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatedBlog;
