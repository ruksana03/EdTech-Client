/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser, updateUserProfile } from "../Features/Utilities";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import LoginWithGoogle from "./LoginWithGoogle/LoginWithGoogle";
import LoginWithGitHub from "./LoginWithGitHUb/LoginWithGitHub";
import LoginWithFacebook from "./LoginWithFacebook/LoginWithFacebook";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, name, password } = data;

    try {
      // Create user
      const userCredential = await createUser(email, password);
      const loggedUser = userCredential.user;

      // Update user profile
      await updateUserProfile(name, 'https://i.ibb.co/QjPBymx/a-red-orange-column-of-smoke-in-darkness.jpg');

      // Post user data to backend
      const userInfo = { name, email, photo: "https://ibb.co/7Nncsy0" };
      const res = await axiosPublic.post("/users", userInfo);

      // if (res.data.insertedId) {
        // Reset form
        reset();
        navigate("/dashboard/profile");

        // Show success message
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      // }
    } catch (error) {
      // Handle errors
      const errorMessage = error.message;
      toast.error(errorMessage.slice(10));
    } finally {
      setLoading(false); // Ensure loading state is set to false regardless of success or failure
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
      <div className="pt-6 w-11/12 mx-auto">
        <div className="lg:flex justify-center">
          <div className=" p__cormorant p-6 bg-transparent shadow-md sm:px-8 sm:py-10 lg:px-12  border my-12">
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                {/* Left side form */}
                <h2 className="headtext__cormorant text-2xl font-bold mb-6">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control flex flex-col mt-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                      className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                    />
                    <hr className="border-t border-first" />
                  </div>

                  <div className="form-control flex flex-col mt-2">
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                      className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                    />
                    <hr className="border-t border-first" />
                  </div>

                  <div className="flex items-center relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className="pt-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                    />
                    <div className="absolute bottom-0 right-0 mb-1 mr-3 lg:mr-0">
                      <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </div>
                  <hr className="border-t border-first" />
                  <div className="flex items-center space-x-2 mb-6 text-white my-4">
                    <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border  " />
                    <label className="text-sm font-medium" htmlFor="keep-signed-in">
                      Keep me signed in
                    </label>
                  </div>
                  <button
                    className="shadow btn-style w-full  hover:bg-second transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
                    type="submit">
                    {loading ?
                      <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Register'
                    }
                  </button>
                </form>
              </div>
              {/* Right side content */}
              <div className="w-full sm:w-1/2 mt-14 p__cormorant">
                <p className="text-base mb-6 text-white">
                  If you already have an account click the button below to login.
                </p>
                <Link to={`/login`}><button className="inline-flex items-center font-semibold justify-center text-sm  h-10 px-4 py-2 w-full mb-2 bg-first text-black">Please Log In <CgProfile className="text-4xl mx-4" /></button></Link>
                <div className="mt-3">
                  <button className="btn-style inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2 w-full mb-2 bg-white text-black">
                    Sign In With Github
                    <LoginWithGitHub></LoginWithGitHub>
                  </button>
                  <button className="btn-style inline-flex items-center justify-center  text-sm font-medium h-10 px-4 py-2 w-full mb-2 bg-white text-black">
                    Sign In With Google 
                    <LoginWithGoogle></LoginWithGoogle>
                  </button>
                  <button className="btn-style inline-flex items-center justify-center  text-sm font-medium h-10 px-4 py-2 w-full bg-white text-black">
                    Sign In With Facebook
                    <LoginWithFacebook></LoginWithFacebook>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;

