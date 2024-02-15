
import axios from 'axios';
import { useState } from 'react';
// user import by useselector
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { FaEye, FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useGetAllPdf from '../../../../Hooks/useGetAllPdf';
const cloudinary_cloud_name = "dffbo5cwe";
const cloudinary_upload_preset = "testing_uplod";
const cloudinary_upload_url = `https://api.cloudinary.com/v1_1/${cloudinary_cloud_name}/upload`;

const NewPostResources = () => {
    const [allPdf] = useGetAllPdf()
    console.log("newPost line 18", allPdf);
    const user = useSelector(state => state.data.user.user);
    // const [pdfFile, setPdfFile] = useState(null);
    const axiosPublic = useAxiosPublic()
    const teacherName = user?.name;
    const teacherEmail = user?.email;
    const [formData, setFormData] = useState({
        teacherName: teacherName,
        teacherEmail: teacherEmail,
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
            const uploadedFileUrl = response.data.secure_url;

            // Combine form data and uploaded file URL into a single object
            const finalData = { ...formData, pdfLink: uploadedFileUrl };
            console.log(finalData);
            // Send the combined data to your backend endpoint
            const backendResponse = await axiosPublic.post('/pdf-upload', finalData);
            console.log(backendResponse);
            if (backendResponse) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `upload Resource successfully `,
                    showConfirmButton: false,
                    timer: 1500
                })

                console.log('Data sent to backend successfully:', backendResponse.data);
            }

        } catch (error) {
            // Handle errors gracefully (e.g., display error message)
            console.error('Upload error:', error);
        }
    };
    // fetch the all pdf data to backend 

    // const showPdf = (pdf) => {
    //     // window.open(`http://localhost:5000/files/${pdf}`);
    //     setPdfFile(`http://localhost:5000/files/${pdf}`);
    // }
    return (
        <div className="mt-12">
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl flex justify-center">


                <form
                    onSubmit={handleSubmit}
                >
                    <div className="flex gap-6 justify-between items-center">
                        <div>
                            <label className="text-xl">Your Name</label><br />
                            <input type="text"
                                placeholder={user?.name}
                                readOnly
                                className="w-[350px]"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-xl">Your Email</label><br />
                            <input type="text"
                                placeholder={user?.email}
                                readOnly
                                className="w-[350px]"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div>
                            <label className="text-xl">Resource Title</label><br />
                            <input type="text"
                                placeholder="Title"
                                required
                                name='title'
                                className="w-[750px]"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="border border-black border-dashed p-12 mt-6 flex justify-center">
                        <input type="file"
                            accept="application/pdf"
                            name='file'
                            required
                            className="w-[600px]"
                        />
                    </div>

                    <button className="bg-first text-white text-2xl py-1 rounded-xl w-full mt-6" type="submit">Submit</button>
                </form>

            </div>
            {/* show here teacher given pdf file  */}
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl my-8">
                <div className="overflow-x-auto">
                    <h1 className='text-center text-4xl text-first font-bold mb-4'>Your Uploaded File</h1>
                    <table className="table table-zebra border border-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-white'>Teacher Name</th>
                                <th className='text-white'>File Name</th>
                                <th className='text-white'>Pdf Resource</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allPdf && allPdf.map((pdf) => {
                                    return (
                                        <tr key={pdf._id}>
                                            <td>{pdf.teacherName}</td>
                                            <td>{pdf.title}</td>
                                            <td>
                                                <button
                                                    onClick={() => (pdf.pdf)}
                                                    className="bg-first text-white p-2 rounded-full text-2xl"><FaEye></FaEye></button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => (pdf.pdf)}
                                                    className="bg-first text-white p-2 rounded-full text-2xl"><FaTrash></FaTrash></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <PdfView pdfFile={pdfFile}></PdfView> */}
        </div>
    );
};

export default NewPostResources;