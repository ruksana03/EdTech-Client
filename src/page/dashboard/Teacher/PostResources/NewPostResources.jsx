/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { FaFileDownload, FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useGetAllPdf from '../../../../Hooks/useGetAllPdf';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
const cloudinary_cloud_name = "dffbo5cwe";
const cloudinary_upload_preset = "testing_uplod";
const cloudinary_upload_url = `https://api.cloudinary.com/v1_1/${cloudinary_cloud_name}/upload`;

const NewPostResources = () => {
    const { allPdf, refetch } = useGetAllPdf()
    const user = useSelector(state => state.data.user.user);
    const [courses, setCourses] = useState([]);
    const axiosPublic = useAxiosPublic()
    const teacherName = user?.name;
    const teacherEmail = user?.email;
    const [formData, setFormData] = useState({
        teacherName: teacherName,
        teacherEmail: teacherEmail,
        courseName: " "
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
            // return console.error('Please select a file to upload');
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
            // Send the combined data to your backend endpoint
            const backendResponse = await axiosPublic.post('/pdf-upload', finalData);
            if (backendResponse) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `upload Resource successfully `,
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            // console.error('Upload error:', error);
        }
    };
    // this function work to open pdf file in the new tab 
    const handelOpenPdf = (pdfLink) => {
        // Open the PDF link in a new tab
        window.open(pdfLink, '_blank');
    };
    // this function work for  deleted pdf file 
    const handleDeletePdf = (pdfId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // added deleted operation here 
                try {
                    const response = axiosPublic.delete(`/delete-pdf/${pdfId}`);
                    refetch()
                } catch (error) {
                    toast.error(error);
                }
                toast.success("Delete Successfully")
            }
        });

    };
    // this is courec name get from backend  here
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/courses");
                const data = await res.json();
                setCourses(data);
            } catch (error) {
                // console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="mt-12 p__cormorant w-10/12 mx-auto">
            <div className="w-[800px] mx-auto p-6 border border-white rounded-xl flex justify-center">
                <form
                    onSubmit={handleSubmit} >
                    {/* name and email field  */}
                    <div className="flex justify-between gap-4">
                        <div>
                            <label className="text-xl">Your Name</label><br />
                            <input type="text"
                                placeholder={user?.name}
                                readOnly
                                className="w-full py-2 bg-transparent transition-colors peer pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            />
                            <hr className="border-t border-first" />
                        </div>
                        {/*  email field  */}
                        <div>
                            <label className="text-xl">Your Email</label><br />
                            <input type="text"
                                placeholder={user?.email}
                                readOnly
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>
                    <div className='flex justify-between gap-4'>
                        {/* resources title  */}
                        <div className=" mt-6">
                            <label className="text-xl">Resource Title</label><br />
                            <input type="text"
                                placeholder="Title"
                                required
                                name='title'
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            />
                            <hr className="border-t border-first" />
                        </div>
                        {/* Course  dropdown  */}
                        <div className=" mt-6">
                            <label className="text-xl">Set Our Course Here*</label>
                            <select className=" border border-gray-300 focus:outline-none bg-black text-white focus:border-first leading-tight input"
                                name="courseName"
                                onChange={handleChange}
                                required>
                                <option disabled selected>set course</option>
                                {courses?.map(course => <option key={course?._id} defaultValue={course?.category}>
                                    {course?.category}</option>)}
                            </select>
                        </div>
                    </div>
                    {/* pdf field  */}
                    <div
                        className="border border-white border-dashed  mt-6 flex justify-center">
                        <input
                            type="file"
                            accept="application/pdf"
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

            {/* show here teacher given pdf file  */}
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl my-8">
                <div className="overflow-x-auto">
                    <h1 className='text-center text-4xl text-first font-bold mb-4'>Your Uploaded File</h1>
                    <table className="table  border border-black">
                        {/* head */}
                        <thead>
                            <tr className='text-lg font-bold'>
                                <th className='text-white'>Index</th>
                                <th className='text-white'>Teacher Name</th>
                                <th className='text-white'>Courses</th>
                                <th className='text-white'>Title</th>
                                <th className='text-white'>Pdf Resource</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allPdf && allPdf.map((pdf, index) => {
                                    return (
                                        <tr key={pdf?._id}>
                                            <td>{index + 1}</td>
                                            <td>{pdf?.teacherName}</td>
                                            <td>{pdf && pdf.courseName ? pdf.courseName : "Not Given"}</td>
                                            <td>{pdf?.title} </td>
                                            <td>
                                                <button
                                                    onClick={() => handelOpenPdf(pdf.pdfLink)}
                                                    className="bg-first text-white p-2 rounded-full text-2xl"><FaFileDownload />
                                                    </button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => handleDeletePdf(pdf._id)}
                                                    className="bg-first text-white p-2 rounded-full text-2xl"><FaTrash></FaTrash></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        allPdf?.length <= 0 && <Skeleton count={15 || allPdf?.length} height={30} borderRadius={10} />
                    }
                </div>
            </div>

        </div>
    );
};

export default NewPostResources;