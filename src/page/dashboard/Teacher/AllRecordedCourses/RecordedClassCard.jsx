/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const RecordedClassCard = ({ item }) => {
    const { _id, image, title, price, duration, name } = item || {};
    return (
       <div data-aos="flip-right"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000" className="product-card rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 flex flex-col items-center justify-center gap-6 transition-all duration-300 group  bg-black mx-4  border border-gray-200 ">
         
        <div className="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#7b956a] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-[80%] transition-all duration-300">
          <img src={image} alt="" className="h-48" />
  
          <div className="tooltips absolute top-0 left-0 -translate-x-[150%] p-2 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full">
            <p className=" font-semibold font-alt text-white  uppercase group-hover:delay-500 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              ${price}
            </p>
            <ul className="flex flex-col items-start gap-2">
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                <p className="text-lg font-semibold font-alt text-white">{title}</p>
              </li>
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-300 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                <p className="text-lg font-semibold font-alt text-white overflow-hidden whitespace-nowrap max-w-[160px]">{duration} months course</p>
              </li>
              <li className="inline-flex gap-2 items-center justify-center group-hover:delay-400 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                <p className="text-lg font-semibold font-alt text-white">{name}</p>
              </li>
              <Link to={`/dashboard/teacher-course-details/${_id}`}><button className="btn btn-xs bg-[#F5EFDB]">Details</button></Link>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default RecordedClassCard;