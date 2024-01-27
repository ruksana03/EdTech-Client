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
                onClick={handleGoogleSignIn}
                className="my-4">
                {/* <button className="text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white hover:bg-transparent hover:text-first rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100"><FcGoogle /></button>  */}
                <button className="text-4xl"><FcGoogle /></button> 
            </div>
        </div>
    );
};

export default LoginWithGoogle;