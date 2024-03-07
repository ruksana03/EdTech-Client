/* eslint-disable no-unused-vars */
import { PiChalkboardTeacherBold } from "react-icons/pi";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import { useSelector } from "react-redux";
import useUserRole from "../../../Hooks/useUserRole";
import { useState } from "react";
import toast from "react-hot-toast";

const AdmissionForm = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.data.user.user);
    const userPhoto = user?.photo;
    const [role] = useUserRole();
    const userRole = role[0]?.role;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const fullName = form.fullname.value;
        const email = form.form_email.value;
        const phoneNumber = form.phonenumber.value;
        const streetAddress = form.streetaddress.value;
        const education = form.education.value;
        const gender = form.form_gender.value;
        const instituteName = form.institutename.value;
        const message = form.form_message.value;
        const admissionFormData = {
            userRole,
            fullName,
            email,
            phoneNumber,
            streetAddress,
            education,
            gender,
            instituteName,
            message,
            profile_photo: userPhoto
        }
        toast.error('something went wrong!')
        try {
            await axiosPublic.post('/online-admission', admissionFormData)
                .then(res => {
                    setLoading(false)
                    if (res.data) {
                        navigate('/')
                        return toast.success('applied successfully')
                    }
                })
        }
        catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }
    return (
        <div className="section-container mb-5">
            {/* banner image  */}
            <div className="relative w-full h-[55vh] pt-28">
                <img src="https://i.ibb.co/MZmyGQG/image.png" alt="banner-image" className="w-full h-full" />
            </div>
            {/* heading  */}
            <div className="mt-10">
                <h1 className="headtext__cormorant text-center my-5 flex items-center justify-center gap-2 flex-wrap px-10">
                    Please Fill Up the Form
                </h1>

                {/* form section here  */}
                <div className="lg:my-5 p-5 lg:p-8  md:w-11/12 lg:w-10/12 mx-auto md:border lg:border p__cormorant">
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-6">
                            <div className="">
                                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                    Which course are you interested in Admission?
                                </label>
                            </div>
                            <div className="md:w-full mt-2">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    id=""
                                    name="positionname"
                                    type="text"
                                    placeholder="Which course are you interested in teaching?..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                        </div>
                        {/* name and mail and phon number  start here  */}
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            {/* name  */}
                            <div className="mb-6 w-full md:w-5/12">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 text-sm border-none outline-none focus:ring-0"
                                    id="inline-full-name"
                                    name="fullname"
                                    type="text"
                                    placeholder="Enter Your Full Name*..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                            {/* email */}
                            <div className="mb-6 w-full md:w-5/12">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 text-sm border-none outline-none focus:ring-0"
                                    id="inline-password"
                                    name="form_email"
                                    type="email"
                                    placeholder="Enter your Email*..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                            <div className="mb-6 w-full md:w-2/12">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 text-sm border-none outline-none focus:ring-0"
                                    id="inline-password"
                                    name="phonenumber"
                                    type="number"
                                    placeholder="Your phone number*..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                        </div>
                        {/* Address and gender section  */}
                        <div className="flex flex-col md:flex-row justify-between  gap-4 items-center">
                            <div className="mb-6 w-full">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 text-sm border-none outline-none focus:ring-0"
                                    id="inline-password"
                                    name="streetaddress"
                                    type="text"
                                    placeholder=" Street Address *..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                            <div className="mb-6 w-full md:w-1/2">
                                <select name="form_gender" className="bg-transparent py-2 px-4 w-full outline-none focus:ring-0 border-none">
                                    <option className="text-black">Select Your Gender...</option>
                                    <option className="text-black" value="male">Male</option>
                                    <option className="text-black" value="female">Female</option>
                                    <option className="text-black" value="other">Other</option>
                                </select>
                                <hr className="border-t border-first" />
                            </div>
                        </div>
                        {/* educational   */}
                        <div className="flex items-center gap-4">
                            <div className="mb-6 w-full md:1/2 lg:w-1/2 mt-2">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    id="inline-full-name"
                                    name="education"
                                    type="text"
                                    placeholder="Education* (hsc/bsc/msc etc)..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                            <div className="mb-6 w-full md:1/2 lg:w-1/2  mt-2">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    id="inline-full-name"
                                    name="institutename"
                                    type="text"
                                    placeholder="Varsity or institute name..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="md:w-full mt-2 ">
                                <textarea className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    name="form_message"
                                    type="text"
                                    placeholder="Tell us why apply for online *..."
                                    required
                                ></textarea>
                                <hr className="border-t border-first" />
                            </div>
                        </div>

                        <div className="flex items-end justify-end">
                            <button
                                className="shadow btn-style w-full  hover:bg-second transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
                                type="submit">
                                {loading ?
                                    <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Apply'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;