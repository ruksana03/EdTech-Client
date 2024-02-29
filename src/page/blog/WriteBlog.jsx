/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/shared/Logo';
import { postBlog } from '../../api/blogs';
import toast from 'react-hot-toast';
import { FaDeleteLeft, FaPlus } from "react-icons/fa6";
import { } from "react-icons/fa6";
import { WithContext as ReactTags } from 'react-tag-input';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { TbFidgetSpinner } from 'react-icons/tb';
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const WriteBlog = () => {
    const user = useSelector((state) => state.data.user.user);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const textArray = [
        "Programming",
        "React",
        "Development",
        "Mern",
        "English",
        "Physics",
        "Chemistry",
        "Math",
        "Calculus",
        "History",
        "History",
        "History",
        "Development",
        "Mern",
        "English",
        "Physics",
    ];

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [contents, setContent] = useState([{ id: 1, value: '' }]);
    // eslint-disable-next-line no-unused-vars
    const [suggestions, setSuggestions] = useState(textArray.map(text => ({ id: text, text: text })));
    const [tags, setTags] = useState([]);
    const [imageFile, setImageFile] = useState(null); // Define imageFile state variable

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };


    // add a text area 
    const addInput = (e) => {
        e.preventDefault();
        const newContent = {
            id: contents.length + 1,
            value: ''
        };
        setContent([...contents, newContent]);
    };

    // Function to remove a text area input
    const removeInput = id => {
        const updateContents = contents.filter(content => content.id !== id);
        setContent(updateContents);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (id, value) => {
        const updatedInputs = contents.map(content =>
            content.id === id ? { ...content, value: value } : content
        );
        setContent(updatedInputs);
    };

    const handleImageUrlChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('image', imageFile);

            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });

            if (res.data.success) {
                const formData = {
                    title,
                    contents,
                    imageUrl: res.data.data.display_url,
                    tags: tags.map(tag => tag.text),
                    userPhoto: user?.photo,
                    userName: user?.name,
                    userEmail: user?.email
                };
                console.log(formData)
                const savedPost = await postBlog(formData);
                console.log('Blog post saved successfully:', savedPost);
                toast.success("Blog post submitted successfully");

                setTitle('');
                setContent([{ id: 1, value: '' }]);
                setImageFile(null);
                setTags([]);

                navigate('/blog');
            }
        } catch (error) {
            console.error('Error saving blog post:', error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };



    return (

        <div className="max-w-7xl mx-auto pt-28 pb-12  px-12  w-10/12 text-white">
            <Link
                to={'/'}
                className='flex text-xs font-bold justify-start items-center text-white'>
                <Logo />
                <p className='p__cormorant'>
                    Draft in <span>{user?.name}</span>
                    
                </p>
            </Link>
            <form
                onSubmit={handleSubmit}>

                {/* read only - Personal info  */}

                <div className='flex flex-col md:flex-row gap-4 my-10 p__cormorant'>
                    <div className="mb-4">
                        <label htmlFor="userPhoto" className="block text-lg font-semibold mb-2">Your Photo</label>
                        <input
                            type="text"
                            id="userPhoto"
                            value={user?.photo}
                            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            readOnly />
                        <hr className="border-t border-first" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-lg font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            id="userName"
                            value={user?.name}
                            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            readOnly />
                        <hr className="border-t border-first" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-lg font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            id="userName"
                            value={user?.email}
                            className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            readOnly />
                        <hr className="border-t border-first" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4 mt-8 headtext__cormorant">Write a story</h1>
                {/* Editable area  */}

                <div className='my-12 p__cormorant'>
                    <div className="my-6 ">
                        <h1> Add Your Blog Category </h1>
                        <div className="bg-transparent text-black my-4">
                            <ReactTags
                                tags={tags}
                                suggestions={suggestions}
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                handleTagClick={handleTagClick}
                                inputFieldPosition="bottom"
                                autocomplete
                                classNames={{
                                    tags: 'bg-transparent',
                                    tagInput: 'bg-transparent',
                                    selected: 'bg-transparent',
                                    tag: 'border-white border  px-2 py-1 text-white mt-1 mb-1',
                                    remove: 'bg-transparent'
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-center md:flex-row gap-4'>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="title"
                                value={title}
                                placeholder='Add A Title Here'
                                onChange={handleTitleChange}
                                className="py-2 bg-transparent text-4xl transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0" />
                            <hr className="border-t border-first" />
                        </div>

                        <div className="mb-4 w-full md:w-1/3">
                            <label className='text-slate-400 text-sm md:text-xl' htmlFor="">Choose any png ,jpg, svg file only </label>
                            <input
                                type="file"
                                id="imageUrl"
                                onChange={handleImageUrlChange}
                                className="py-2 bg-transparent btn-style transition-colors peer w-full pl-3 font-poppins border-none outline-none focus:ring-0"
                                accept="image/*" />
                            <hr className="border-t border-first" />
                        </div>

                    </div>

                    <div>
                        {contents.map(input => (
                            <div key={input.id} className=" grid grid-cols-12">
                                <div className='col-span-11'>
                                    <textarea
                                        value={input.value}
                                        onChange={e => handleContentChange(input.id, e.target.value)}
                                        placeholder='Tell Your story...'
                                        rows="8"
                                        className="py-2 bg-transparent  transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0 h-24"
                                    />
                                    <hr className="border-t border-first" />
                                </div>

                                <div>
                                    <button className='my-12 mx-4 col-span-1 text-slate-400  border w-12 h-12 text-center rounded-full flex justify-center items-center hover:bg-first hover:text-black' onClick={() => removeInput(input.id)}><FaDeleteLeft className='text-2xl' /> </button>
                                </div>

                            </div>
                        ))}
                        <button className=' text-slate-400 w-full text-left pl-4 flex justify-end items-center gap-4 hover:text-white' onClick={(e) => addInput(e)}><FaPlus /> Add Input New Section </button>

                    </div>
                </div>

                <button type="submit" className=" btn-style w-full"> {loading ? (
                    <TbFidgetSpinner className=" animate-spin text-black m-auto" />
                ) : (
                    "Add Blog"
                )}</button>
            </form >
        </div >
    );
};

export default WriteBlog;