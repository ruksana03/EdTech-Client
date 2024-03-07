/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import { gitHubSignIn } from "../../Features/Utilities";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const LoginWithGitHub = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGitHubSignIn = () => {
        gitHubSignIn()
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
                onClick={handleGitHubSignIn}
                className="my-4">
                <button className="text-3xl flex justify-center items-center"><FaGithub className="text-black mx-4 my-2" /></button> 
                
            </div>
        </div>
    );
};

export default LoginWithGitHub;