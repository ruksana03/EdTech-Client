import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Styles/slickArrow.css'



const BlogOptions = () => {
    const textArray = [
        "Programming",
        "React",
        "Development",
        "Mern",
        "English",
        "Physics",
        "Chemistry",
        "Math",
        "Calculus",
        "History",
        "History",
        "History",
        "Development",
        "Mern",
        "English",
        "Physics",
    ];
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 15,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000,
    };
    

    return (
        <div className='w-11/12 mx-auto my-10 bg-gradient-to-r p__cormorant from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90% text-white shadow-md shadow-black overflow-hidden' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
            <Slider {...settings}>
                {textArray.map((text, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <p className="text-xs font-medium">{text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BlogOptions;