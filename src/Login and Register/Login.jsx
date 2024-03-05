/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Features/Utilities";
import LoginWithGoogle from "./LoginWithGoogle/LoginWithGoogle";
import LoginWithGitHub from "./LoginWithGitHUb/LoginWithGitHub";
import LoginWithFacebook from "./LoginWithFacebook/LoginWithFacebook";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage.slice(10));
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
        <div className="pt-6 lg:flex justify-center">
          <div className=" w-8/12 mx-auto p__cormorant bg-transparent shadow-md border px-4 pb-4 my-12  ">
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                {/* Left side form */}
                <h2 className="headtext__cormorant text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                 
                  <div className="flex flex-col space-y-4 mb-4">
                     {/* email field start  */}
                    <div className="form-control flex flex-col mt-2">
                      <input
                        type="email"
                        placeholder="email"
                        {...register("email", { required: true })}
                        className=" bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                      />
                      <hr className="border-t border-first" />
                    </div>
                      {/* email field start  */}

                      {/* Password Field start */}
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
                       {/* Password Field end */}
                  </div>
                  <div className="flex items-center space-x-2 mb-6 text-white">
                    <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border  " />
                    <label className="text-sm font-medium" htmlFor="keep-signed-in">
                      Keep me signed in
                    </label>
                  </div>

                    {/* submit button start  */}
                  <button
                    className="shadow btn-style w-full  hover:bg-second transition-all focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded text-[17px]"
                    type="submit">
                    {loading ?
                      <span className='flex items-center justify-center gap-3'> <FaSpinner className='m-auto animate-spin' size={24} /> Processing....</span> : 'Log In'
                    }
                  </button>
                    {/* submit button end  */}
                </form>

              {/* Right side content */}  
                <p className="text-sm mt-6 flex gap-2 text-white">
                  Did you <a className="text-second hover:text-white hover:font-extrabold" href="#"> forget your password? </a>
                </p>
              </div>
              <div className="w-full sm:w-1/2 mt-14 p__cormorant">
                <p className="text-base mb-6 text-white">
                  If you don&apos;t already have an account click the button below to create your account.
                </p>
                <Link to={`/register`}><button className="inline-flex items-center font-semibold justify-center text-sm  h-10 px-4 py-2 w-full mb-2 bg-first text-black">Create An Account <CgProfile className="text-4xl mx-4" /></button></Link>
                <div className="mt-6">
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
  );
};

export default Login;

