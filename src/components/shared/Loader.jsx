import Lottie from 'lottie-react';
import image1 from '../../assets/image/loader/Animation - 1707561176476.json';

const Loader = () => {
  return (
    <div>
      <div className='w-full h-[60vh] flex items-center justify-center flex-col'>
        <Lottie animationData={image1} loop={true}></Lottie>
      </div>
    </div>
  )
}


export default Loader;
