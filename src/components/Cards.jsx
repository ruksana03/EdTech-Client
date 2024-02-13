/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LiaDirectionsSolid } from "react-icons/lia";

const Cards = ({ item }) => {
  const { _id, image, title, price } = item || {};
  return (
    <div data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"  className="relative mt-8 w-full max-w-xs overflow-hidden rounded-lg   bg-black   dark:border-white shadow-xl   mx-4 border border-gray-200  ">
      <Link to={`/details/${_id}`}  >
        <img className="h-60 rounded-t-lg object-cover" src={image} alt="Course image" />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Hot</span>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight p__cormorant whitespace-nowrap">{title}</h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="h-5 w-5 text-yellow-300" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-xl font-semibold p__opensans">${price}</span>
            <span className="text-sm p__opensans line-through">$99</span>
          </p>
          <Link to={`/details/${_id}`}   className="flex items-center rounded-md btn-style  ">
          <LiaDirectionsSolid  className="text-lg"/>
           <span className="ml-2">More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
