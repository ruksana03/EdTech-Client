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
                onClick={handleFacebookSignIn}
                className="my-4">
                {/* <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"><FaFacebook /></button>  */}
                <button className="text-4xl"><FaFacebook /></button> 
            </div>
        </div>
    );
};

export default LoginWithFacebook;