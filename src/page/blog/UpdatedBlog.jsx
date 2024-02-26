/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const UpdatedBlog = () => {
    const updatedBlog = useLoaderData();

    const { contents = [],
        createdAt = '',
        imageUrl = '',
        tags = [],
        title = '',
        userEmail = '',
        userName = '',
        userPhoto = ''} =updatedBlog ||{}

        console.log(tags,contents)

    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    return (
        <div className="max-w-7xl mx-auto pt-28 pb-12  px-12  w-10/12 text-white">
             <p className="p__cormorant">
                    Update The Blog <span className='headtext__cormorant'>"{title}"</span>
                    
                </p>
        </div>
    );
};

export default UpdatedBlog;