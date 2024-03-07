/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { googleSignIn } from "../../Features/Utilities";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";



const LoginWithGoogle = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                Swal.fire({
                    position: "top-start",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                    role: 'normalUser'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        navigate('/');
                    })
            })
    }

    return (
        <div className="">
            <div
                onClick={handleGoogleSignIn}
                className="my-4">
                <button className="text-3xl flex justify-center items-center"><FcGoogle className="mx-4"/></button> 
            </div>
        </div>
    );
};

export default LoginWithGoogle;