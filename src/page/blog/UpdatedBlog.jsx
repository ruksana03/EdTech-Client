// /* eslint-disable react/no-unescaped-entities */
// import { useLoaderData, useNavigate } from "react-router-dom";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


// const UpdatedBlog = () => {
//     const updatedBlog = useLoaderData();

//     const { contents = [],
//         createdAt = '',
//         imageUrl = '',
//         tags = [],
//         title = '',
//         userEmail = '',
//         userName = '',
//         userPhoto = '' } = updatedBlog || {}

//     console.log(tags, contents)

//     const navigate = useNavigate();
//     const axiosPublic = useAxiosPublic();

//     // const [title, setTitle] = useState('');

//     const handleTitleChange = (e) => {
//         setTitle(e.target.value);
//     };
//     return (
//         <div className="max-w-7xl mx-auto pt-28 pb-12  px-12  w-10/12 text-white">
//             <p className="p__cormorant">
//                 Update The Blog <span className='headtext__cormorant'>"{title}"</span>

//                 <form action="">
//                     {/* read only - Personal info  */}

//                     <div className='flex flex-col md:flex-row gap-4 my-10 p__cormorant'>
//                         <div className="mb-4">
//                             <label htmlFor="userPhoto" className="block text-lg font-semibold mb-2">Your Photo</label>
//                             <input
//                                 type="text"
//                                 id="userPhoto"
//                                 value={userPhoto}
//                                 className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
//                                 readOnly />
//                             <hr className="border-t border-first" />
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="userName" className="block text-lg font-semibold mb-2">Your Name</label>
//                             <input
//                                 type="text"
//                                 id="userName"
//                                 value={userName}
//                                 className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
//                                 readOnly />
//                             <hr className="border-t border-first" />
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="userName" className="block text-lg font-semibold mb-2">Your Name</label>
//                             <input
//                                 type="text"
//                                 id="userName"
//                                 value={userEmail}
//                                 className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
//                                 readOnly />
//                             <hr className="border-t border-first" />
//                         </div>
//                     </div>

//                     <h1 className="text-3xl font-bold mb-4 mt-8 headtext__cormorant">Write a story</h1>
//                     <div>
//                         <div className="mb-4">
//                             <input
//                                 type="text"
//                                 id="title"
//                                 value={title}
//                                 placeholder='Add A Title Here'
//                                 onChange={handleTitleChange}
//                                 className="py-2 bg-transparent text-4xl transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0" />
//                             <hr className="border-t border-first" />
//                         </div>
//                     </div>

//                 </form>

//             </p>
//         </div>
//     );
// };

// export default UpdatedBlog;



const UpdatedBlog = () => {
    return (
        <div>
            UpdatedBlog
        </div>
    );
};

export default UpdatedBlog;