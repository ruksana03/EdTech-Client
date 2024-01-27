import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/slickArrow.css'

const Category = () => {
    const categoryList = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
       <div className=' my-12'>
        <h1 className='my-4'>COURSES CATEGORIES</h1>
         <Slider {...categoryList} >
             <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="h-20 w-20 rounded-full border dark:border-gray-200 border-[#0B4534] p-1" src="https://i.ibb.co/LRQzTx3/profile-6.jpg" alt="" />
                <p className="text-xs font-medium">Iraboti</p>
            </div>
        </Slider>
       </div>

    );
};

export default Category;