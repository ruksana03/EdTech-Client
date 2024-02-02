import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/slickArrow.css'



const BlogOptions = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='w-11/12 mx-auto my-10 bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% text-white shadow-md shadow-black overflow-hidden' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
            <Slider {...settings}>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xs font-medium">Programming</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xs font-medium">React</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">Development</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">Mern</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">English</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">Physics</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">Chemistry</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">Math</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">Calculus</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">History</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">History</p>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <p className="text-xs font-medium">History</p>
                </div>
            </Slider>
        </div>
    );
};

export default BlogOptions;