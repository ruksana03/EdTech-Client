import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay , Navigation,Pagination} from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import useFeedback from './../../Hooks/useFeedback';

const Reviews = () => {
  const [feedbacks, refetch] = useFeedback();
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  return (
    <section className="mt-20 section-container">
      <div className="text-center space-y-2 mt-8 dark:text-gray-400">
        <h2 className="headtext__cormorant">Testimonials</h2>
        <h5 className=" p__cormorant">
          Discover What Learners Are Saying About Their Educational Journey with
          Us
        </h5>
      </div>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500,disableOnInteraction: false, }}
        pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Pagination, Navigation]}className="mySwiper">
        {feedbacks?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-2 lg:mx-24 my-16 flex flex-col items-center hover:bg-zinc-800 px-5 py-10 cursor-pointer">
              <div>
                <img src={review?.image} alt="student-photo" className="w-32 h-32 rounded-full" />
              </div>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <BiSolidQuoteLeft className="text-4xl mt-4 p__cormorant"></BiSolidQuoteLeft>
              <p className="py-8 p__opensans text-center px-2 lg:px-10">{review.feetbackMessage}</p>
              <h3 className="text-2xl p__cormorant">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Reviews;
