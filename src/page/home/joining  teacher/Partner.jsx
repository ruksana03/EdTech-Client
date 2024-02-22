import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.data.user.user);
  const userPhoto = user?.photo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const fullName = form.fullname.value;
    const email = form.form_email.value;
    const phoneNumber = form.phonenumber.value;
    const organization = form.organization.value;
    const message = form.form_message.value;
    const applicationData = {
      fullName,
      email,
      phoneNumber,
      organization,
      message,
      profile_photo: userPhoto
    };

    try {
      await axiosPublic.post("/partner-applications", applicationData).then((res) => {
        setLoading(false);
        if (res.data) {
          navigate("/");
          return toast.success("Application submitted successfully");
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="w-full h-full mb-5">
      {/* banner image */}
      <div className="relative w-full h-[60vh]">
        <img src="https://i.ibb.co/9yFqjR8/businessmen-on-a-meeting-with-market-chart-at-the.jpg" alt="banner-image" className="w-full h-full" />
      </div>

      {/* heading */}
      <div className="mt-10">
        <h1 className="headtext__cormorant text-center my-5 flex items-center justify-center gap-2 flex-wrap px-10">
          Please Fill the Form to be a 
          <span className="text-first  ">Partner or Sponsor</span>
        </h1>

        {/* form section here */}
        <div className="lg:my-5 p-5 lg:p-8  md:w-11/12 lg:w-10/12 mx-auto md:border lg:border p__cormorant">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Full Name *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200  appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first text-black"
                  id="inline-full-name"
                  name="fullname"
                  type="text"
                  placeholder="Enter Your Full Name*..."
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Email *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200  appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first text-black"
                  id="inline-password"
                  name="form_email"
                  type="email"
                  placeholder="Enter your Email*..."
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Phone Number *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200  appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first text-black"
                  id="inline-password"
                  name="phonenumber"
                  type="number"
                  placeholder="Your phone number*..."
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Organization Name *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200  appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first text-black"
                  id="inline-password"
                  name="organization"
                  type="text"
                  placeholder="Organization Name*..."
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="">
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                  Message *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <textarea
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0 "
                  name="form_message"
                  type="text"
                  placeholder="Your message..."
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

export default Partner;
