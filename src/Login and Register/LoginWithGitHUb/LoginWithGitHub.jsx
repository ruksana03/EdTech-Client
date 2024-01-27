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
            console.log(result.user);
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
                    console.log(res.data);
                    navigate('/');
                })
        })
    }

    return (
        <div className="">
            <div
                onClick={handleGitHubSignIn}
                className="my-4">
                <button className="text-4xl"><FaGithub /></button> 
                {/* <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"><FaGithub /></button>  */}
            </div>
        </div>
    );
};

export default LoginWithGitHub;