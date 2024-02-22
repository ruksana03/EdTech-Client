import Lottie from "lottie-react";
// import image3 from '../../assets/image/loader/Animation - 1707676706258.json';
import image3 from '../../assets/image/loader/Animation - 1707561724900.json';

const Preloader = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black ">
            <div className="w-full h-96 flex items-center justify-center gap-1 flex-col bg-black">
                <Lottie animationData={image3} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Preloader;