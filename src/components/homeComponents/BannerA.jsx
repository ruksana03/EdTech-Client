import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerA = () => {
  const [typeEffect] = useTypewriter({
    words: ["Journey", "with", "Success!"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const cards = [
    { image: 'https://i.ibb.co/F65TH69/boys-286245-1280.jpg', title: 'Card 1 Title', description: 'Description for Card 1' },
    { image: 'https://i.ibb.co/xMhz44r/pexels-oladimeji-ajegbile-2380263.jpg', title: 'Card 2 Title', description: 'Description for Card 2' },
    { image: 'https://i.ibb.co/4tgrB2v/pexels-andrea-piacquadio-3808057.jpg', title: 'Card 3 Title', description: 'Description for Card 3' },
  ];

  return (
    <div className="relative bg-cover bg-center h-screen flex flex-row gap-6 items-center px-6 lg:px-12">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center dark:opacity-10 w-full h-96"
        style={{
          backgroundImage: `url('https://i.ibb.co/7SRBQ4Y/working-at-night.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: `50% ${-scrollY * 0.5}px`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          opacity: "0.50",
          zIndex: "-1",
        }}
      ></div>

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
        {cards.map((card, index) => (
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

      <div className="relative z-40 mx-auto space-y-6 text-center text-white rounded-lg w-full md:w-1/2 px-6 hidden md:block" style={{ backgroundImage: `url('https://i.ibb.co/HYyzSmr/chris-montgomery-smg-Tvepind4-unsplash.jpg')`, padding: "24px 18px", }}>
  <div className="absolute inset-0 bg-opacity-50 bg-black rounded-lg"></div> {/* Overlay */}
  <div className="relative">
    <h2 className="text-lg md:text-xl lg:text-5xl font-semibold">
      Begin Your
      <span className="font-bold dark:text-green-500 text-first ml-2 ">
        {typeEffect}
      </span>
    </h2>
    <p className="text-xs md:text-sm lg:text-lg">
      Unlocking the power of online learning for everyone.
    </p>
    <div className="flex justify-center">
      <Link to="/all-courses">
        <button className="px-4 mt-6 btn-style py-2 rounded-2xl">
          Explore Courses
        </button>
      </Link>
      <Link to="/login">
        <button className="px-4 mt-6 mx-4 btn-style py-2 rounded-2xl">
          Join Us
        </button>
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default BannerA;
