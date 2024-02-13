import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BlogBanner = () => {
    // Array of image URLs
    const images = [
       ' https://i.ibb.co/3ySfjSB/pexels-laker-6156940.jpg',
   'https://i.ibb.co/C6zXz57/istockphoto-1569228708-612x612.jpg',
        'https://i.ibb.co/D5pm3dV/istockphoto-1493060482-612x612.jpg',
       ' https://i.ibb.co/gtm3f4p/istockphoto-1205061931-612x612.jpg',
      '  https://i.ibb.co/26p2W8X/istockphoto-1462942852-170667a.webp',
       ' https://i.ibb.co/f0M2HjR/marvin-meyer-SYTO3xs06f-U-unsplash.jpg',
    ];

    return (
        <div className='w-full text-white'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${imageUrl})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="px-20 py-10 shadow-lg shadow-black" style={{
                                    backgroundImage: `url(${imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <h1 className="mb-5 text-6xl font-normal text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                        Explore , <span className='text-5xl font-extrabold text-white'>the World of Learning</span>
                                    </h1>
                                    <p className="mb-5 text-white font-extrabold " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
                                    <Link to='/contact'>
                                        <button className="px-10 py-3 m-2 rounded-full font-bold bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">Contact us</button>
                                    </Link>
                                    <Link to='/login'>
                                        <button className="border border-[#0F0F0F] px-8 py-2 m-2 font-bold rounded-full hover:bg-gradient-to-r from-[#5C8374] from-10% via-[#183D3D] via-30% to-[#0F0F0F] to-90%">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogBanner;
