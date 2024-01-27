import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/slickArrow.css'



const BlogOptions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };
    
    return (
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
        </Slider>
    );
};

export default BlogOptions;