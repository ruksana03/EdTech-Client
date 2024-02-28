// import Lottie from "lottie-react";
// import image3 from '../../assets/image/loader/Animation - 1707676706258.json';
// import image3 from '../../assets/image/loader/Animation - 1707561724900.json';
import Skeleton from "react-loading-skeleton";

const Preloader = () => {
    return (
        <div className="flex items-center justify-center relative w-full h-screen">
            <Skeleton width={1920} height={500}>
            </Skeleton>
        </div>
    );
};

export default Preloader;