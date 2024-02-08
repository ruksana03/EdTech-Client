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

const Login = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    console.log(errors)
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
    }


    return (
        <div className="mt-12 w-11/12 mx-auto">
            <div className="lg:flex justify-center">
                <div className="lg:block hidden">
                    <img src="https://i.ibb.co/jVwb9fF/secure-login.gif" alt="" />
                    <div className="flex border rounded-full mx-auto justify-center space-x-4">
                        <p className="flex text-2xl font-bold items-center">Login With:</p>
                        <LoginWithFacebook></LoginWithFacebook>
                        <LoginWithGoogle></LoginWithGoogle>
                        <LoginWithGitHub></LoginWithGitHub>
                    </div>
                </div>

                <div className="lg:ml-20 border mb-32 pb-6">

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <h3 className="text-4xl text-green-900 font-bold text-center mb-4 mt-2">Please Login</h3>
                        <progress className="progress "></progress>
                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                {...register('email', { required: true })}
                                className="input input-bordered mt-2" />
                        </div>
                        {/* <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                {...register('password',
                                    { required: true })}
                                className="input input-bordered mt-2" />

                        </div> */}
                        <div className="flex items-center relative">
                            <input type={showPassword ? "text" : "password"} placeholder="Password"
                                {...register('password',
                                    { required: true })}
                                className="input input-bordered mt-2" />
                            <div className="absolute items-center mt-2 ml-52">
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>
                        </div>

                        {/* <div>
                    {
                        error && <p className="text-red-500"> {error}</p>
                    }

                    </div> */}

                        <div className="form-control mt-6">
                            <input className="btn btn-style" type="submit" value="Submit" />
                        </div>
                        <div className="lg:hidden mt-4 border rounded-full flex justify-center space-x-4">

                            <LoginWithFacebook></LoginWithFacebook>
                            <LoginWithGoogle></LoginWithGoogle>
                            <LoginWithGitHub></LoginWithGitHub>
                        </div>
                    </form>
                    <p className="text-center mt-8">New Here? <span className="font-bold"><Link to={`/register`}>Register</Link></span></p>
                </div>
            </div>
        </div>

    );
};

export default Login; 