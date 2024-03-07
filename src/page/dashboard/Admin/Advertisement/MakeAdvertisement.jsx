import axios from "axios";
import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaSpinner, FaTrash } from "react-icons/fa";
import useGetAllAdvertisement from "../../../../Hooks/useGetAllAdvertisement";
import toast from "react-hot-toast";
// image  upload credintials 
const cloudinary_cloud_name = "dffbo5cwe";
const cloudinary_upload_preset = "testing_uplod";
const cloudinary_upload_url = `https://api.cloudinary.com/v1_1/${cloudinary_cloud_name}/upload`;
const MakeAdvertisement = () => {
    const axiosPublic = useAxiosPublic()
    const { allAd, refetch } = useGetAllAdvertisement()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: " ",
        description: " "
        // Add other fields here 
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const file = event.target.elements.file.files[0];
        if (!file) {
            // Handle error: No file selected
            setLoading(false)
            return console.error('Please select a file to upload');
        }
        try {
            // Create FormData for file upload
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('upload_preset', cloudinary_upload_preset);
            // Upload file to Cloudinary
            const response = await axios.post(cloudinary_upload_url, uploadFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            // ar vitore thakbe pdf file cloudniry back link 
            const uploadedImgUrl = response.data.secure_url;
            // Combine form data and uploaded file URL into a single object
            const finalData = { ...formData, imgLink: uploadedImgUrl };
            // console.log("datataa", finalData);
            // Send the combined data to your backend endpoint
            const backendResponse = await axiosPublic.post('/post-advertise', finalData);
            console.log(backendResponse);
            if (backendResponse) {
                setLoading(false)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `upload Resource successfully `,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('Data sent to backend successfully:', backendResponse.data);
            }
            refetch()
        } catch (error) {
            setLoading(false)
            console.error('Upload error:', error);
        }
    };
    // ad deleted function 
    const handleDeleteOffer = async (adId) => {
        console.log(adId);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosPublic.delete(`/delete-advertise/${adId}`);
                    console.log(' deleted:', response.data);
                    refetch();
                    toast.success("Delete Successfully");
                } catch (error) {
                    console.error("Error deleting ad:", error);
                    toast.error("Failed to delete AD");
                }
            }
        });
    };
    return (
        <>
            <div className="mt-14 p__cormorant">
                <div className="w-[800px] mx-auto p-6 border border-white rounded-xl flex justify-center">
                    <form
                        onSubmit={handleSubmit} >
                        {/* title field  */}
                        <div className="flex justify-between gap-4">
                            <div>
                                <label className="text-xl text-white"> Title</label><br />
                                <input type="text"
                                    placeholder="Advertisement Title"
                                    name='title'
                                    className="w-full py-2 bg-transparent transition-colors peer pl-3 font-poppins text-sm border-none outline-none focus:ring-0  focus:text-white"
                                    onChange={handleChange}
                                />
                                <hr className="border-t border-first" />
                            </div>
                            {/*  Description field  */}
                            <div>
                                <label className="text-xl text-white">Description</label><br />
                                <input type="text"
                                    placeholder='Description'
                                    name='description'
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0 focus:text-white"
                                    onChange={handleChange}
                                />
                                <hr className="border-t border-first" />
                            </div>
                        </div>
                        {/* img field  */}
                        <div
                            className="border border-white border-dashed  mt-6 flex justify-center">
                            <input
                                type="file"
                                accept="image/*" // Accepts any image format (JPEG, PNG, GIF, etc.)
                                name='file'
                                required
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0  focus:text-white"
                            />
                            <hr className="border-t border-first" />
                        </div>

                        <div>
                            <button
                                className="my-4 shadow btn-style w-full hover:bg-second transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
                                type="submit">
                                {loading ?
                                    <span className='flex items-center justify-center gap-1'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Submit'
                                }
                            </button>
                        </div>
                    </form>
                </div>
                {/* show here all advertise data  */}
                <div className="w-[800px] mx-auto p-6 border border-black rounded-xl my-8">
                    <div className="overflow-x-auto">
                        <h1 className='text-center text-4xl text-first font-bold mb-4'>All Advertisement Here</h1>
                        <table className="table  border border-black">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-white'>Index</th>
                                    <th className='text-white'>AD Title</th>
                                    <th className='text-white'>Ad Description</th>
                                    <th className='text-white'>Delete AD</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    allAd.length > 0 &&
                                    allAd.map((ad, index) => {
                                        return (
                                            <tr key={ad._id}>
                                                <td className='text-white'>{index + 1}</td>
                                                <td className='text-white'>
                                                    {ad.title}
                                                </td>
                                                <td className='text-white'>
                                                    {ad.description}
                                                </td>
                                                <td className="my-4">
                                                    <button
                                                        onClick={() => handleDeleteOffer(ad._id)}
                                                        className="bg-first text-white p-2 rounded-full text-2xl my-4"><FaTrash></FaTrash></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {/* {
                        allOffers?.length <= 0 && <Skeleton count={15 || allOffers?.length} height={30} borderRadius={10} />
                    } */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeAdvertisement;