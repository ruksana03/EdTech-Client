/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

const WriteBlog = () => {
    const user = useSelector((state) => state.data.user.user);
    console.log(user)
    // const location = useLocation();
    // const user = location.state.user;

    // // Now you can access the user object
    // console.log(user);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // Extracting user data
    // const userName = user ? user.name : '';
    // const userPhoto = user ? user.photo : '';

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic to submit the blog post data here
        console.log('Title:', title);
        console.log('Content:', content);
        console.log('Image URL:', imageUrl);
        // console.log('User Name:', name);
        // console.log('User Photo:', photo);
        // Example: Call an API to save the blog post data
    };

    return (
        <div className="max-w-3xl mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Write a story</h1>
            <form onSubmit={handleSubmit}>

                {/* <div className="mb-4">
                    <label htmlFor="userPhoto" className="block text-lg font-semibold mb-2">User Photo</label>
                    <input type="text" id="userPhoto" value={user?.photo} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" readOnly />
                </div>

                <div className="mb-4">
                    <label htmlFor="userName" className="block text-lg font-semibold mb-2">User Name</label>
                    <input type="text" id="userName" value={user?.name} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" readOnly />
                </div> */}

                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-lg font-semibold mb-2">Image URL</label>
                    <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first" placeholder="Enter image URL or upload" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-lg font-semibold mb-2">Content</label>
                    <textarea id="content" value={content} onChange={handleContentChange} rows="8" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-first"></textarea>
                </div>
                

                <button type="submit" className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#6a6767] transition-colors duration-300">Submit</button>
            </form>
        </div>
    );
};

export default WriteBlog;
