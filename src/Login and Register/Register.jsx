import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser, updateUserProfile } from "../Features/Utilities";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import LoginWithGoogle from "./LoginWithGoogle/LoginWithGoogle";
import LoginWithGitHub from "./LoginWithGitHUb/LoginWithGitHub";
import LoginWithFacebook from "./LoginWithFacebook/LoginWithFacebook";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const role = data.role;
        const email = data.email;
        const name = data.name;
        const password = data.password;
        const photo = data.photo;
        console.log(role,email, name, password, photo);

        createUser(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                updateUserProfile(name, photo)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                            photo: photo,
                            role: role,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-start",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    navigate('/');
                                    window.location.reload();
                                }
                            })
                        // console.log("updated successfully");
                        console.log(loggedUser);

                        navigate("/");
                        window.location.reload();

                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage.slice(10))
                console.log(errorCode, errorMessage);
            });
    }
    console.log(errors);

    return (
        <div className="mt-12 mb-8 w-11/12 mx-auto">
            <div className="lg:flex flex-row-reverse justify-center">

                <div className="lg:block hidden ml-4">
                    <img src="https://i.ibb.co/LkXHPcy/register-img.gif" alt="" />
                    <div className="flex border rounded-full mx-auto justify-center space-x-4">
                        <p className="flex text-2xl font-bold items-center">Login With:</p>
                        <LoginWithFacebook></LoginWithFacebook>
                        <LoginWithGoogle></LoginWithGoogle>
                        <LoginWithGitHub></LoginWithGitHub>
                    </div>
                </div>

                <div className="max-w-sm  border p-6">

                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <h3 className="text-3xl text-green-900 font-bold text-center mb-4">Please Register</h3>
                        <progress className="progress "></progress>

                        {/* Dropdown for selecting role */}
                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                {...register('role', { required: true })}
                                className="input input-bordered mt-2"
                            >
                                <option value="">Select Role</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                        </div>

                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email"
                                {...register('email', { required: true })}
                                className="input input-bordered mt-2" />
                        </div>
                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="photo"
                                {...register('photo', { required: true })}
                                className="input input-bordered mt-2" />

                            <label className="label mt-2">
                                <span className="label-text">User Name</span>
                            </label>

                            <input type="text" placeholder="Your Name"
                                {...register('name', { required: true })}
                                className="input input-bordered mt-2" />
                        </div>

                        <div className="form-control flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex items-center absolute">
                                <input type={showPassword ? "text" : "password"} placeholder="Password"
                                    {...register('password',
                                        { required: true })}
                                    className="input input-bordered mt-2" />
                                <div className="relative -ml-6">
                                    <span onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
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
                    <p className="text-center mt-8">Already have an account? <span className="font-bold"><Link to={`/login`}>Login</Link></span></p>
                </div>


            </div>

        </div>
    );
};

export default Register;