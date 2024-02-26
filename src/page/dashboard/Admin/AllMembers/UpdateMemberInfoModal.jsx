/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
// Import your API function for updating member info
import toast from 'react-hot-toast';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { updateMemberInfo } from '../../../../api/member';
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMemberInfoModal = ({ isOpen, setIsOpen, editData,refetch, setProfilePicture }) => {
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const axiosPublic = useAxiosPublic();

    const {
        memberName = '',
        designation = '',
        joinDate = '',
        phoneNumber = '',
        email = '',
        gender = '',
        address = '',
        portfolio = '',
        profilePicture = ''
    } = editData || {};

    const handleImageUrlChange = (e) => {
        setSelectedImage(e.target.files[0]); // Update selectedImage state with the new image file
        setProfilePicture(e.target.files[0]); // Update profile picture in parent component if needed
    };


    const closeModal = () => {
        setIsOpen(false);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const formData = new FormData();
            formData.append('image', selectedImage); // Use selectedImage instead of profilePicture
    
            // Upload the image
            const imageUploadResponse = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
    
            if (imageUploadResponse.data.success) {
                const { memberName, designation, joinDate, phoneNumber, email, gender, address, portfolio } = e.target.elements;
                const newProfilePicture = imageUploadResponse.data.data.display_url; // Get the URL of the uploaded image
    
                const postData = {
                    memberName: memberName.value,
                    designation: designation.value,
                    joinDate: joinDate.value,
                    phoneNumber: phoneNumber.value,
                    email: email.value,
                    gender: gender.value,
                    address: address.value,
                    portfolio: portfolio.value,
                    profilePicture: newProfilePicture, // Update profilePicture with the new URL
                };
    
                // Call the API to update member info
                await updateMemberInfo(editData._id, postData);
 
                // Reset form fields
                e.target.reset();
                refetch();
                // Close modal
                closeModal();
    
                toast.success('Member data updated successfully');
            } else {
                toast.error('Image upload failed:', imageUploadResponse.data.error);
            }
        } catch (error) {
            toast.error('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-white border border-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="">
                                        <h1>{memberName}</h1>

                                        <form onSubmit={handleSubmit} className="w-8/12 mx-auto border border-white p-6" action="">
                                            <div className=" items-center">

                                                {/* name  */}
                                                <div className="mb-6 p__cormorant ">
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
                                                            defaultValue={memberName}
                                                            placeholder="Name..."

                                                        />
                                                        <hr className="border-t border-first" />
                                                    </div>
                                                </div>

                                                {/* designation */}
                                                <div className="mb-6 p__cormorant ">
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
                                                            defaultValue={designation}
                                                        >
                                                            <option className="text-black" value="">Select Designation</option>
                                                            <option className="text-black" value="CEO & Founder">CEO & Founder</option>
                                                            <option className="text-black" value="FrontEnd Developer">FrontEnd Developer</option>
                                                            <option className="text-black" value="Backend Developer">Backend Developer</option> {/* Fixed typo here */}
                                                        </select>

                                                        <hr className="border-t border-first" />
                                                    </div>
                                                </div>

                                                <div className="mb-6 p__cormorant">
                                                    <div>
                                                        <label htmlFor="joinDate" className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                                            Join Date
                                                        </label>
                                                    </div>
                                                    <div className="mt-2 text-black">
                                                        <input
                                                            className="py-2 transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                                            id="joinDate"
                                                            name="joinDate"
                                                            type="date"
                                                            defaultValue={joinDate}
                                                        />
                                                        <hr className="border-t border-first" />
                                                    </div>
                                                </div>


                                            </div>


                                            <div>
                                                <div className="">

                                                    {/* phone number*/}
                                                    <div className="mb-6 p__cormorant ">
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
                                                                defaultValue={phoneNumber}

                                                            />
                                                            <hr className="border-t border-first" />
                                                        </div>
                                                    </div>

                                                    {/* email  */}
                                                    <div className="mb-6 p__cormorant ">
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
                                                                defaultValue={email}

                                                            />
                                                            <hr className="border-t border-first" />
                                                        </div>
                                                    </div>

                                                    {/* Gender */}
                                                    <div className="mb-6 p__cormorant">
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
                                                                defaultValue={gender}
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

                                            <div className=" w-full">
                                                {/* Address  */}
                                                <div className="mb-6 p__cormorant">
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
                                                            defaultValue={address}

                                                        />
                                                        <hr className="border-t border-first" />
                                                    </div>
                                                </div>

                                                {/* Profile Picture */}
                                                <div>
                                                    {/* Display default profile picture if no new image is selected */}
                                                    {!selectedImage && profilePicture && (
                                                        <img src={profilePicture} alt="Profile" className="mb-2 max-w-full" />
                                                    )}

                                                    {/* Input field for selecting a new profile picture */}
                                                    <input
                                                        className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                                        id="profilePicture"
                                                        name="profilePicture"
                                                        type="file"
                                                        onChange={handleImageUrlChange}
                                                        accept="image/*"
                                                    />
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
                                                        defaultValue={portfolio}

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



                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default UpdateMemberInfoModal;







