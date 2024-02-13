/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/shared/Logo';
import { postBlog } from '../../api/blogs';
import toast from 'react-hot-toast';
// import { useLocation } from 'react-router-dom';

const WriteBlog = () => {
    const user = useSelector((state) => state.data.user.user);
    console.log(user)

    // const {photo,name,email} = user || {}

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            title,
            content,
            imageUrl,
            userPhoto: user?.photo,
            userName: user?.name,
            userEmail: user?.email
        };
    
        console.log(formData);
    
        try {
            const savedPost = await postBlog(formData);
            console.log('Blog post saved successfully:', savedPost);
            toast.success("Blog post submitted successfully");
    
            // Clear form fields after successful submission
            setTitle('');
            setContent('');
            setImageUrl('');
    
            // Redirect to the blog page
            navigate('/blog');
        } catch (error) {
            console.error('Error saving blog post:', error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    };
    

    return (

        <div className="max-w-7xl mx-auto py-12  px-12 bg-third w-10/12 ">
        <Link to={'/'} className='flex text-xs font-bold justify-start items-center '><Logo /><p> Draft in {user?.name}</p></Link>
        <h1 className="text-3xl font-bold mb-4 mt-8">Write a story</h1>
        <form onSubmit={handleSubmit}>
            {/* <form> */}

            <div className=' flex flex-col md:flex-row gap-4'>
                <div className="mb-4">
                    <label htmlFor="userPhoto" className="block text-lg font-semibold mb-2">User Photo</label>
                    <input type="text" id="userPhoto" value={user?.photo} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-none" readOnly />
                </div>

                <div className="mb-4">
                    <label htmlFor="userName" className="block text-lg font-semibold mb-2">User Name</label>
                    <input type="text" id="userName" value={user?.name} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" readOnly />
                </div>

                <div className="mb-4">
                    <label htmlFor="userName" className="block text-lg font-semibold mb-2">User Name</label>
                    <input type="text" id="userName" value={user?.email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" readOnly />
                </div>
            </div>


            <div className="mb-4">
                {/* <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label> */}
                <input type="text" id="title" value={title} placeholder='Title' onChange={handleTitleChange} className="w-full px-4 py-2  rounded-lg focus:outline-none focus:border-first" />
            </div>
            <div className="mb-4">
                <textarea id="content" value={content} onChange={handleContentChange} placeholder='Tell Your story...' rows="8" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-lg font-semibold mb-2">Image</label>
                <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" placeholder="Enter image URL or upload" />
            </div>



            <button type="submit" className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#6a6767] transition-colors duration-300">Submit</button>
        </form>
    </div>

    );
};

export default WriteBlog;
