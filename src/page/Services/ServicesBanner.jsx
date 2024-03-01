import { Link } from "react-router-dom";
import otherCate from '../../assets/image/services/Animation - 1709181732197.json'
import Lottie from "lottie-react";
const ServicesBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 section-container lg:mt-10">
            <div className="w-full lg:w-1/2 font-serif text-white mt-3 lg:mt-20 space-y-4">
                <h1 className="text-5xl ">Studying in the new curriculum will be with new enthusiasm.</h1>
                <p className="text-xl">Innovated Education is next to the students to give maximum support in this new journey</p>
                <div className="flex items-center gap-5">
                    <Link to='https://youtu.be/3H_aIzeiOhE?si=86DYZeKWBUpLTMvq' target='_blank'>
                        <button className='mt-5 btn-style'>Book a free demo class</button>
                    </Link>
                    <Link to='/get-addmission'>
                        <button className='mt-5 btn-style'>Get admission online</button>
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <figure className="bg-black opacity-35 transition ease-in-out hover:opacity-80">
                    <Lottie animationData={otherCate} className="h-[500px] w-full cursor-pointer" ></Lottie>
                </figure>
            </div>
        </div>
    );
};

export default ServicesBanner;