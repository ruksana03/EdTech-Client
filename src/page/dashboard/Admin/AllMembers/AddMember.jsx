/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { TbFidgetSpinner } from "react-icons/tb";
import { postMember } from "../../../../api/member";
import toast from "react-hot-toast";
import useMember from "../../../../Hooks/useMember";
import MemberCard from "./MemberCard";
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddMember = () => {
    const [loading, setLoading] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { AllMember, refetch } = useMember();

    const handleImageUrlChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('image', profilePicture);

            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });

            if (res.data.success) {
                const form = e.target;
                const memberName = form.memberName.value;
                const designation = form.designation.value;
                const joinDate = form.joinDate.value;
                const phoneNumber = form.phoneNumber.value;
                const email = form.email.value;
                const gender = form.gender.value;
                const address = form.address.value;
                const portfolio = form.portfolio.value
                const profilePicture = res.data.data.display_url;

                const postData = {
                    memberName,
                    designation,
                    joinDate,
                    phoneNumber,
                    email,
                    gender,
                    address,
                    portfolio,
                    profilePicture
                };
                const savedMemberInfo = await postMember(postData);
                form.reset();
                refetch();
                toast.success("Member data submitted successfully");
            } else {
                toast.error('Image upload failed:', res.data.error);
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            {/* show all member  */}
            <div className="grid grid-cols-12 gap-4 mx-2">
                {
                    AllMember.map(member => <MemberCard key={member._id} member={member} refetch={refetch} setProfilePicture={setProfilePicture} loading={loading} setLoading={setLoading}/>
                    )
                }
            </div>

            {/* Add new member  */}
            <h1 className="headtext__cormorant text-center">Add A New Member</h1>

            {/* start a form  */}
            <form onSubmit={handleSubmit} className="w-8/12 mx-auto border border-white p-6" action="">
                <div className="grid grid-cols-12 gap-4 items-center">

                    {/* name  */}
                    <div className="mb-6 p__cormorant col-span-4">
                        <div className="">
                            <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                Your Name
                            </label>
                        </div>
                        <div className="md:w-full mt-2 text-white ">
                            <input
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                id=""
                                name="memberName"
                                type="text"
                                placeholder="Name..."
                                required
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>

                    {/* designation */}
                    <div className="mb-6 p__cormorant col-span-4">
                        <div className="">
                            <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                Designation
                            </label>
                        </div>
                        <div className="md:w-full mt-2 text-white">
                            <select
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                id="designation"
                                name="designation"
                                required
                            >
                                <option className="text-black" value="">Select Designation</option>
                                <option className="text-black" value="CEO & Founder">CEO & Founder</option>
                                <option className="text-black" value="FrontEnd Developer">FrontEnd Developer</option>
                                <option className="text-black" value="Backend Develope">Backend Developer</option>
                            </select>
                            <hr className="border-t border-first" />
                        </div>
                    </div>

                    {/* Join Date */}
                    <div className="mb-6 p__cormorant col-span-4">
                        <div>
                            <label htmlFor="joinDate" className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                Join Date
                            </label>
                        </div>
                        <div className="md:w-full mt-2 text-black">
                            <input
                                className="py-2  transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                id="joinDate"
                                name="joinDate"
                                type="date"
                                required
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>

                </div>


                <div>
                    <div className="grid grid-cols-12 gap-4">

                        {/* phone number*/}
                        <div className="mb-6 p__cormorant col-span-4">
                            <div className="">
                                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                    Phon Number
                                </label>
                            </div>
                            <div className="md:w-full mt-2 text-white">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    id=""
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="phone number..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                        </div>

                        {/* email  */}
                        <div className="mb-6 p__cormorant col-span-4">
                            <div className="">
                                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                    Email Address
                                </label>
                            </div>
                            <div className="md:w-full mt-2 text-white">
                                <input
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    id=""
                                    name="email"
                                    type="email"
                                    placeholder="Email Address..."
                                    required
                                />
                                <hr className="border-t border-first" />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="mb-6 p__cormorant col-span-4">
                            <div>
                                <label htmlFor="gender" className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                    Gender
                                </label>
                            </div>
                            <div className="md:w-full mt-2 text-white">
                                <select
                                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                    id="gender"
                                    name="gender"
                                    required
                                >
                                    <option className="text-black" value="">Select Gender</option>
                                    <option className="text-black" value="male">Male</option>
                                    <option className="text-black" value="female">Female</option>
                                    <option className="text-black" value="other">Other</option>
                                </select>
                                <hr className="border-t border-first" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between items-center gap-4 w-full">
                    {/* Address  */}
                    <div className="mb-6 p__cormorant w-1/2">
                        <div className="">
                            <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                Address
                            </label>
                        </div>
                        <div className="md:w-full mt-2 text-white">
                            <textarea
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                id=""
                                name="address"
                                placeholder="Address..."
                                required
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className="mb-6 p__cormorant w-1/2 text-white">
                        <div>
                            <label htmlFor="profilePicture" className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                Profile Picture
                            </label>
                        </div>
                        <div className="md:w-full mt-2 text-white">
                            <input
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                id="profilePicture"
                                name="profilePicture"
                                type="file"
                                onChange={handleImageUrlChange}
                                accept="image/*"
                                required
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>
                </div>
                <div className="mb-6 p__cormorant  text-white">
                        <div>
                            <label htmlFor="profilePicture" className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                Portfolio
                            </label>
                        </div>
                        <div className="md:w-full mt-2 text-white">
                            <input
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                id="portfolio"
                                name="portfolio"
                                type="text"
                                required
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>

                <button type="submit" className=" btn-style w-full"> {loading ? (
                    <TbFidgetSpinner className="animate-spin text-black m-auto" />
                ) : (
                    "Add Member"
                )}</button>

            </form>


        </div>
    );
}

export default AddMember;
