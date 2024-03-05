import axios from "axios";
import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
// image  upload credintials 
const cloudinary_cloud_name = "dffbo5cwe";
const cloudinary_upload_preset = "testing_uplod";
const cloudinary_upload_url = `https://api.cloudinary.com/v1_1/${cloudinary_cloud_name}/upload`;
const MakeAdvertisement = () => {
    const axiosPublic = useAxiosPublic()
    const [formData, setFormData] = useState({
        title: " ",
        description:" "
        // Add other fields here 
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const file = event.target.elements.file.files[0];

        if (!file) {
            // Handle error: No file selected
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
            console.log(finalData);
            // Send the combined data to your backend endpoint
            // const backendResponse = await axiosPublic.post('/pdf-upload', finalData);
            // console.log(backendResponse);
            // if (backendResponse) {
            //     Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: `upload Resource successfully `,
            //         showConfirmButton: false,
            //         timer: 1500
            //     })

            //     console.log('Data sent to backend successfully:', backendResponse.data);
                
            // }

        } catch (error) {
            console.error('Upload error:', error);
        }
    };
    return (
        <>
            <div className="mt-14">
                <div className="w-[800px] mx-auto p-6 border border-white rounded-xl flex justify-center">
                    <form
                        onSubmit={handleSubmit} >
                        {/* title field  */}
                        <div className="flex justify-between gap-4">
                            <div>
                                <label className="text-xl"> Title</label><br />
                                <input type="text"
                                    placeholder="Advertisement Title"
                                    name='title'
                                    className="w-full py-2 bg-transparent transition-colors peer pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    onChange={handleChange}
                                />
                                <hr className="border-t border-first" />
                            </div>
                            {/*  Description field  */}
                            <div>
                                <label className="text-xl">Description</label><br />
                                <input type="text"
                                    placeholder='Description'
                                    name='description'
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
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
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                            />
                            <hr className="border-t border-first" />
                        </div>
                        
                        <button
                            className="btn-style w-full mt-6"
                            type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MakeAdvertisement;