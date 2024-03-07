/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPlus, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import { postCover, updateCoverPhoto } from "../../api/coverPhoto";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUserRole from "../../Hooks/useUserRole";
import { updateUserPassword } from "../../Features/Utilities";
import useCover from "../../Hooks/useCover";
import { PiNotePencilLight } from "react-icons/pi";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const defaultCoverPhoto = "https://i.ibb.co/8mdj06s/abstract-1264071-1280.png";

const UserProfile = () => {
  const user = useSelector((state) => state.data.user.user);
  const axiosPublic = useAxiosPublic();
  const [role] = useUserRole();
  const { AllCovers, refetch } = useCover();
  const currenUserRole = role[0]?.role;
  const email = user?.email;
  const [showDropdown, setShowDropdown] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(defaultCoverPhoto);
  const [postCoverPhoto, setPostCoverPhoto] = useState(false)

  const filteredCover = AllCovers.filter(cover => cover?.userEmail === email);
  const id = filteredCover[0]?._id;

  let imageURL = null;
  if (filteredCover.length > 0) {
    imageURL = filteredCover[0].image;
  }


  useEffect(() => {
    const emailExists = AllCovers.some(cover => cover?.userEmail === email);
    if (emailExists) {
      setPostCoverPhoto(true);
    }
  }, [AllCovers, email]);


  const handleImageUrlChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePostCover = async (event) => {
    event.preventDefault();
    setLoading(true);



    try {
      if (!imageFile) {
        // If imageFile is not defined, show an error message and return early
        toast.error("Please select an image file.");
        return;
      }


      if (postCoverPhoto === 'true') {
        // If the user has already posted a cover photo, show an error message and return early
        toast.error("You have already posted a cover photo.");
        return;
      }
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const formData = {
          image: res.data.data.url, // Use the uploaded image URL
          userName: user?.name,
          userEmail: user?.email,
        };

        const savedPost = await postCover(formData);
        toast.success("Cover Photo Updated successfully");
        refetch();

        // Update the cover photo state with the new image URL
        setPostCoverPhoto(true);

        // Clear the image file state
        setImageFile(null);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCover = async (event) => {
    event.preventDefault();

    try {
      setLoading(true); // Set loading state to true to indicate processing

      const formData = new FormData();
      formData.append("image", imageFile); // Append the image file to the FormData object

      // Post the image to the hosting API
      const resUpload = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (resUpload.data.success) {
        // If image upload is successful, update the cover photo
        const updatedData = {
          image: resUpload.data.data.url, // Use the uploaded image URL
        };

        const resUpdate = await updateCoverPhoto(id, updatedData);
        refetch();

        if (resUpdate) {
          toast.success("Updated successfully");
        } else {
          toast.error("Failed to update cover photo");
        }
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  const handleClose = () => {
    setShowDropdown(false);
  };

  const handleChangePassword = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Change Your Password",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      updateUserPassword(email)
        .then((res) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "OK, check Your Email, then change your password",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
              },
            });
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    });
  };


  return (
    <div className=" w-full min-h-[calc(100vh-83px)] pt-10  p__cormorant">
      <div className="bg-cover relative bg-no-repeat w-full h-[350px] md:h-[350px] lg:h-[45vh]" style={{ backgroundImage: `url(${imageURL || coverPhoto})` }}>
        {
          postCoverPhoto ? (
            <button className="btn-style flex justify-center items-center gap-2" onClick={toggleDropdown}>
              <FaPlus />Update Cover Photo
            </button>
          ) : (
            <button className="btn-style flex justify-center items-center gap-2" onClick={toggleDropdown}>
              <FaPlus /> post Cover Photo
            </button>
          )
        }
        {
          showDropdown && postCoverPhoto && (
            <div className="z-10 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
              <div className="bg-second p-4 rounded-md shadow-md relative">
                <button
                  className="text-black absolute top-0 right-0 mr-2 mt-2 hover:text-gray-800"
                  onClick={handleClose}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <form onSubmit={handleUpdateCover}>
                  <div className="my-6">
                    <input
                      type="file"
                      id="image"
                      onChange={handleImageUrlChange}
                      name="image"
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                  <button
                    className="shadow btn-style w-full hover:bg-second transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
                    type="submit"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <FaSpinner className="m-auto animate-spin" size={24} /> Processing....
                      </span>
                    ) : (
                      "Update The Cover Photo"
                    )}
                  </button>
                </form>
              </div>
            </div>
          )
        }
        {
          showDropdown && !postCoverPhoto && (
            <div className="z-10 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-4 rounded-md shadow-md relative">
                <button
                  className="text-black absolute top-0 right-0 mr-2 mt-2 hover:text-gray-800"
                  onClick={handleClose}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <form onSubmit={handlePostCover}>
                  <div className="my-6">
                    <input
                      type="file"
                      id="image"
                      onChange={handleImageUrlChange}
                      name="image"
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                  <button
                    className="shadow btn-style w-full hover:bg-second transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
                    type="submit"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <FaSpinner className="m-auto animate-spin" size={24} /> Processing....
                      </span>
                    ) : (
                      "Post The Cover Photo"
                    )}
                  </button>
                </form>
              </div>
            </div>
          )
        }
        <figure className="absolute -bottom-16 w-32 h-32 left-[36%] md:left-[5%] lg:left-[5%]">
          <img alt="profile" src={user?.photo} className="mx-auto object-cover rounded-full w-full h-full border-4 border-first" />
        </figure>
      </div>

      {/* lg  */}
      <div className="hidden md:hidden lg:block text-sm absolute w-32 h-32 left-[33%]">
        <h1 className="">{currenUserRole}</h1>
        <h1 className="font-bold">{user?.name}</h1>
        <h1 className="font-bold">{user?.email}</h1>
        <hr />
      </div>
      {/* md  */}
      <div className="hidden md:block lg:hidden text-sm absolute w-32 h-32 left-[30%]">
        <h1 className="">{currenUserRole}</h1>
        <h1 className="font-bold">{user?.name}</h1>
        <h1 className="font-bold">{user?.email}</h1>
        <hr />
      </div>
      {/* sm  */}
      <div className="text-sm absolute w-32 h-32 left-[36%] -bottom-44 md:hidden">
        <h1 className="">{currenUserRole}</h1>
        <h1 className="font-bold">{user?.name}</h1>
        <h1 className="font-bold">{user?.email}</h1>
        <hr />
      </div>

      <div className=" p-2 mt-40 lg:mt-24 flex flex-col lg:flex-row justify-between w-10/12 mx-auto text-sm">
        <div className="flex flex-col lg:flex-row gap-3">

          <button className=" btn-style mb-1">
            <Link to='/updated-profile'>
              Update Profile
            </Link>
          </button>

          <button onClick={handleChangePassword} className="  px-6 py-1  btn-style">
            Change Password
          </button>

          <button className=" btn-style mb-1">
            <Link to='/all-courses'>
              View All Courses
            </Link>
          </button>
        </div>

        <div className=" mt-4">
          <h1 className="flex gap-2 justify-start items-center">List Your Personal Task <PiNotePencilLight /></h1>
          <Link to='/dashboard/notes' className="border-b hover:text-second hover:font-extrabold">Click Here to add note </Link>
        </div>
      </div>

    </div>
  );
}
export default UserProfile;
