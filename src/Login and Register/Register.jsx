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

// // import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { createUser, updateUserProfile } from "../Features/Utilities";
// // import useAxiosPublic from "../Hooks/useAxiosPublic";
// // import Swal from "sweetalert2";
// import LoginWithGoogle from "./LoginWithGoogle/LoginWithGoogle";
// import LoginWithGitHub from "./LoginWithGitHUb/LoginWithGitHub";
// import LoginWithFacebook from "./LoginWithFacebook/LoginWithFacebook";
// // import { useState } from "react";
// import { uploadImage } from "../api/uploadImage";
// import { storeUserInfo } from "../api/users";
// import toast from "react-hot-toast";
// // import { FaEye, FaEyeSlash } from "react-icons/fa6";

// const Register = () => {

//     // const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     // const navigate = useNavigate();
//     // const axiosPublic = useAxiosPublic();
//     // const [showPassword, setShowPassword] = useState(false);

//     const onSubmit = async event => {
//         event.preventDefault()
//         const form = event.target
//         const name = form.name.value
//         const email = form.email.value
//         const password = form.password.value
//         const photo = form.photo.files[0]

//         try {
//             const photoData = await uploadImage(photo)
//             const result = await createUser(email, password)
//             await updateUserProfile(name, photoData?.data?.display_url)

//             // send user info to database 
//             const sendToDb = await storeUserInfo(result?.user)
//             console.log(sendToDb);

//             // code for token 
//             // await getToken(result?.user?.email)

//             // navigate to home 
//             // navigate('/')

//             // show toast
//             // toast.success("register Successfully")

//         } catch (err) {
//             console.log(err);
//             toast.error(err?.massage);
//         }

//     };

//     return (
//         <div className="mt-12 mb-8 w-11/12 mx-auto">
//             <div className="lg:flex flex-row-reverse justify-center">

//                 <div className="lg:block hidden ml-4">
//                     <img src="https://i.ibb.co/LkXHPcy/register-img.gif" alt="" />
//                     <div className="flex border rounded-full mx-auto justify-center space-x-4">
//                         <p className="flex text-2xl font-bold items-center">Login With:</p>
//                         <LoginWithFacebook></LoginWithFacebook>
//                         <LoginWithGoogle></LoginWithGoogle>
//                         <LoginWithGitHub></LoginWithGitHub>
//                     </div>
//                 </div>

//                 <div className="max-w-sm  border p-6">

//                 <form onSubmit={onSubmit}>
//                     <div>

//                         {/* name field start  */}
//                         <div className="flex flex-col my-2">
//                             <label className="text-sm text-neutral-600">Name<br /><span className="text-xs">This name will appear Your Profile</span></label>
//                             <input
//                                 required
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Your name"
                          
//                                 className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
//                             />
//                         </div>
//                         {/* name field end  */}


//                         {/* photo field start  */}
//                         <div className="flex flex-col my-2">
//                             <label htmlFor="photo" className="text-sm text-neutral-600">
//                                 Select photo URL
//                             </label>
//                             <input
//                                 required
//                                 type="file"
//                                 name="photo"
//                                 accept="photo/*"
//                                 className="bg-white py-2 px-4 rounded-md focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
//                             />
//                         </div>
//                         {/* photo field start  */}

//                         {/* email field start */}
//                         <div className="flex flex-col my-2">
//                             <label className="text-sm text-neutral-600">Email address</label>
//                             <input
//                                 required
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="name@domain.com"
                            
//                                 className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
//                             />
//                         </div>
//                         {/* email field end */}

//                         {/* password field start */}
//                         <div className="flex flex-col my-2">
//                             <label className="text-sm text-neutral-600">Password</label>
//                             <input
//                                 required
//                                 type="password"
//                                 name="password"
//                                 id="password"
//                                 placeholder="******"
                              
//                                 className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
//                             />
//                         </div>
//                         {/* password field end */}

//                         {/* register form submit button  */}
//                         <button
//                             type="submit"
//                             className="mt-6 w-full py-2 text-lg border-[1px] shadow-xl hover:shadow-2xl hover:text-xl "
                            
//                         >
                          
//                                 Continue
                          
//                         </button>
//                     </div>
//                 </form>
//                 {/* register form end */}
// {/* 
//                         <div className="form-control mt-6">
//                             <input className="btn btn-style" type="submit" value="Submit" />
//                         </div> */}
//                         <div className="lg:hidden mt-4 border rounded-full flex justify-center space-x-4">
//                             <LoginWithFacebook></LoginWithFacebook>
//                             <LoginWithGoogle></LoginWithGoogle>
//                             <LoginWithGitHub></LoginWithGitHub>
//                         </div>
                   
//                     <p className="text-center mt-8">Already have an account? <span className="font-bold"><Link to={`/login`}>Login</Link></span></p>
//                 </div>


//             </div>

//         </div>
//     );
// };

// export default Register;