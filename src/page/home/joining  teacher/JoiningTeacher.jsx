import { PiChalkboardTeacherBold } from "react-icons/pi";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JoiningTeacher = () => {
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
    const streetAddress = form.streetaddress.value;
    const education = form.educat.value;
    const gradePoint = form.gradepoint.value;
    const passedYear = form.passedyear.value;
    const gender = form.form_gender.value;
    const instituteName = form.institutename.value;
    const position = form.positionname.value;
    const message = form.form_message.value;
    const cvLink = form.cvlink.value;
    const applicationData = {
      fullName,
      email,
      phoneNumber,
      streetAddress,
      education,
      gradePoint,
      passedYear,
      gender,
      instituteName,
      position,
      message,
      cvLink,
      profile_photo: userPhoto
    }

    try {
      await axiosPublic.post('/applications', applicationData)
        .then(res => {
          setLoading(false)
          if (res.data) {
            navigate('/')
            return toast.success('created successfully')
          }
        })
    }
    catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
 
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (
    <div className="w-full h-full mb-5">
      {/* banner image  */}
      <div className="relative w-full h-[55vh]">
        <img src="https://i.ibb.co/Khc2wmt/clark-tibbs-oq-Stl2-L5ox-I-unsplash.jpg" alt="banner-image" className="w-full h-full" />
      </div>

      {/* heading  */}

      <div className="mt-10">
        <h1 className="headtext__cormorant text-center my-5 flex items-center justify-center gap-2 flex-wrap px-10">
          Please Fill the Form to be a{" "}
          <span className="text-first  ">Teacher</span>{" "}
          <PiChalkboardTeacherBold className="text-first text-3xl  " />
        </h1>

        {/* form section here  */}
        <div className="lg:my-5 p-5 lg:p-8  md:w-11/12 lg:w-10/12 mx-auto md:border lg:border p__cormorant">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Street Address *
                </label>
              </div>
              <div className=" md:w-full mt-2">
                <input
                  className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                  id="inline-password"
                  name="streetaddress"
                  type="text"
                  placeholder="street address..."
                  required
                />
              </div>
            </div>
            {/* new addition  */}
            <div className="mb-6 grid grid-cols-2 gap-5">
              <div>
                <div>
                  <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                    Education *
                  </label>
                </div>
                <div className=" md:w-full mt-2">
                  <input
                    className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                    id="inline-password"
                    name="educat"
                    type="text"
                    placeholder="example hsc/bsc/msc etc..."
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                    Grade Point *
                  </label>
                </div>
                <div className=" md:w-full mt-2">
                  <input
                    className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                    id="inline-password"
                    name="gradepoint"
                    type="text"
                    placeholder="grade point..."
                    required
                  />
                </div>

              </div>
            </div>
            <div className="mb-6 grid grid-cols-2 gap-5">
              <div>
                <div>
                  <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                    Passed Year *
                  </label>
                </div>
                <div className=" md:w-full mt-2">
                  <input
                    className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                    id="inline-password"
                    name="passedyear"
                    type="text"
                    placeholder="passed year..."
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                    Gender *
                  </label>
                </div>
                <div className=" md:w-full mt-2">
                  <select name="form_gender" className="bg-gray-200 dark:bg-zinc-600 text-[17px] appearance-none input border-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-first">
                    <option selected disabled>Select Here...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Varsity/Institute Name *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200 dark:bg-zinc-600 text-[17px] appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                  id="inline-full-name"
                  name="institutename"
                  type="text"
                  placeholder="varsity or institute name..."
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="">
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                  Which course are you interested in teaching?
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
            <div className="mb-6 flex gap-4">
              <div className="w-full md:w-1/3 mt-2">
                <input
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0 "
                  id="inline-password"
                  name="educat"
                  type="text"
                  placeholder="Education* (hsc/bsc/msc etc)..."
                  required
                />
                <hr className="border-t border-first" />
              </div>


              <div className=" w-full md:w-1/3 mt-2">
                <input
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  id="inline-password"
                  name="gradepoint"
                  type="text"
                  placeholder="Grade point..."
                  required
                />
                <hr className="border-t border-first" />
              </div>
              <div className=" w-full md:w-1/3 mt-2">
                <input
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  id="inline-password"
                  name="passedyear"
                  type="text"
                  placeholder="Passed year..."
                  required
                />
                <hr className="border-t border-first" />
              </div>
            </div>
            <div className="mb-6 md:w-full mt-2">
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
            <div className="mb-6">
              <div className="md:w-full mt-2 ">
                <textarea
                  className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                  name="form_message"
                  type="text"
                  placeholder="Tell us something about this course *..."
                  required
                ></textarea>
                <hr className="border-t border-first" />
              </div>
            </div>
            <div className="mb-6">
              <input
                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                id="inline-password"
                name="cvlink"
                type="Link"
                pattern="https://.*"
                placeholder="Please Give Your CV/Resume link Here *..."
                required
              />
              <hr className="border-t border-first" />
            </div>
            <div className="flex items-end justify-end">
              <button
                className="shadow btn-style w-full  hover:bg-[#256330] transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
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

export default JoiningTeacher;





