/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CoursesBanner = ({ searchInput, handleSearchChange }) => {
    const categories = [
        { image: 'https://i.ibb.co/F65TH69/boys-286245-1280.jpg', category: 'Card 1' },
        { image: 'https://i.ibb.co/xMhz44r/pexels-oladimeji-ajegbile-2380263.jpg', category: 'Card 2' },
        { image: 'https://i.ibb.co/4tgrB2v/pexels-andrea-piacquadio-3808057.jpg', category: 'Card 3' },
    ];
    return (
        <div className="hero min-h-[80vh] mb-12 relative">
            <div className="hero-overlay bg-white bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
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
        className="absolute inset-0 w-full md:w-1/2"
      >
            {categories.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="mx-auto text-center text-white border rounded-lg shadow-md h-56 pb-4 lg:h-60 flex flex-col items-center justify-center gap-4 shadow-black dark:text-gray-400"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'blur(10px)', // Apply blur effect
              }}
            >
              <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm py-2 px-4 rounded-lg">
                <h2 className="text-lg md:text-xl lg:5xl font-semibold">{card.title}</h2>
                <p className="text-base lg:text-xl">{card.description}</p>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
                <div className="space-y-7 relative z-10">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug text-black">
                        Explore the Wonders Of
                        <span className="text-first"> Enlightening Courses!</span>
                    </h2>
                    <p className="text-black">
                        Where Every Lesson Unfolds a Tale of Academic Excellence and
                        Dedicated Learning
                    </p>
                    <div className="my-4">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchInput}
                            onChange={handleSearchChange}
                            className="border text-black p-2 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesBanner;
