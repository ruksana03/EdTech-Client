/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import { facebookSignIn } from "../../Features/Utilities";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const LoginWithFacebook = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleFacebookSignIn = () => {
        facebookSignIn()
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
                onClick={handleFacebookSignIn}
                className="my-4">
                <button className="text-3xl text- flex justify-center items-center"><FaFacebook className="text-black mx-4"/></button> 
            </div>
        </div>
    );
};

export default LoginWithFacebook;