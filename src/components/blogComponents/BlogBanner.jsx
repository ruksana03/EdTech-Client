// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BlogBanner = () => {
    return (
        <div className='w-full '>
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/9ZjKsF7/man-writes-relaxes.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className=" px-20 py-10 shadow-lg shadow-black" style={{
                                backgroundImage: 'url(https://i.ibb.co/9ZjKsF7/man-writes-relaxes.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <h1 className="mb-5 text-6xl font-normal text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                    Explore , <span className='text-5xl font-extrabold'>the World of Learning</span>
                                </h1>

                                <p className="mb-5 text-black font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
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
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7SRBQ4Y/working-at-night.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className=" px-20 py-10 shadow-lg shadow-black" style={{
                                backgroundImage: 'url(https://i.ibb.co/7SRBQ4Y/working-at-night.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <h1 className="mb-5 text-6xl font-normal text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                    Explore , <span className='text-5xl font-extrabold'>the World of Learning</span>
                                </h1>

                                <p className="mb-5 text-black font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
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
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/JtzXB0M/aerial-view-of-an-abandoned-theme-park.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className=" px-20 py-10 shadow-lg shadow-black" style={{
                                backgroundImage: 'url(https://i.ibb.co/JtzXB0M/aerial-view-of-an-abandoned-theme-park.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <h1 className="mb-5 text-6xl font-normal text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                    Explore , <span className='text-5xl font-extrabold'>the World of Learning</span>
                                </h1>

                                <p className="mb-5 text-black font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Discover the magic of diverse celebrations at Aroa Cultural Events Planner. We blend traditions and unity to create unforgettable cultural experiences.</p>
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
            </Swiper>

        </div>

    );
};

export default BlogBanner;