/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const { _id, image, title, details, price } = item || {};
  return (
    <div data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="card bg-base-100 shadow-xl relative mx-4 border border-emerald-950 h-96">
      <figure>
        <img
          src={image}
          alt="courses"
          className="hover:scale-105 transition-all duration-200 h-72 md:h-96 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
          {details}
        </p>
        <div className="card-actions mt-3 flex justify-between items-center">
          <h5 className="font-semibold">$ {price}</h5>
          <Link to={`/details/${_id}`}>
            {" "}
            <button className="px-4 py-2 btn-style rounded-2xl">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cards;