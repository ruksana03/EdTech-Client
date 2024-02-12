/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Features/Utilities";
import LoginWithGoogle from "./LoginWithGoogle/LoginWithGoogle";
import LoginWithGitHub from "./LoginWithGitHUb/LoginWithGitHub";
import LoginWithFacebook from "./LoginWithFacebook/LoginWithFacebook";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import LoginImg from '../assets/Login.json'
import Lottie from "lottie-react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  console.log(errors);
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        console.log(loggedUser);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage.slice(10));
        console.log(errorMessage);
      });
  };

  return (
    <div className="mt-12 w-11/12 mx-auto">
      <div className="lg:flex justify-center">
        <div className="lg:block hidden">
           <div className="w-1/2 flex justify-center items-center mx-auto  ">
           <Lottie animationData={LoginImg} ></Lottie>
           </div>
          <div className="flex border border-first rounded-md mx-auto justify-center space-x-4">
            <p className="flex p__cormorant font-bold items-center">
              Login With:
            </p>
            <LoginWithFacebook></LoginWithFacebook>
            <LoginWithGoogle></LoginWithGoogle>
            <LoginWithGitHub></LoginWithGitHub>
          </div>
        </div>

        <div className="lg:ml-20 border mb-32 pb-6">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h3 className="headtext__cormorant text-center mb-4 mt-2">Login</h3>

            <div className="form-control flex flex-col mt-2">
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input  input-bordered mt-2"
              />
            </div>

            <div className="flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true })}
                className="input   input-bordered mt-2"
              />
              <div className="absolute items-center mt-2 ml-48">
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div className="form-control mt-6">
              <input className=" btn-style" type="submit" value="Submit" />
            </div>
            <div className="lg:hidden mt-4  flex justify-center space-x-4">
              <LoginWithFacebook></LoginWithFacebook>
              <LoginWithGoogle></LoginWithGoogle>
              <LoginWithGitHub></LoginWithGitHub>
            </div>
          </form>
          <p className="text-center p__cormorant mt-8">
            New Here?{" "}
            <span className="font-bold text-first">
              <Link to={`/register`}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
