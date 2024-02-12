import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mt-20 section-container">
      <div className="text-center space-y-2 mt-8 dark:text-gray-400">
        <h2 className="headtext__cormorant">Testimonials</h2>
        <h5 className=" p__cormorant">
          Discover What Learners Are Saying About Their Educational Journey with
          Us
        </h5>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 flex flex-col items-center dark:text-gray-400">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <BiSolidQuoteLeft className="text-4xl mt-4 p__cormorant"></BiSolidQuoteLeft>
              <p className="py-8 p__opensans">{review.details}</p>
              <h3 className="text-2xl p__cormorant">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Reviews;
