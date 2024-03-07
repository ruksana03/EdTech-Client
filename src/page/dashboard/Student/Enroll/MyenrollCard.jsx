/* eslint-disable react/prop-types */
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyenrollCard = ({ enroll }) => {
  const { image, name, title } = enroll || {};

  return (
    <div className="relative flex mx-auto w-full max-w-[48rem] flex-row rounded-xl my-5 border-gray-200 border bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700  rounded-r-none shrink-0 rounded-xl bg-clip-border ">
        <img src={image} alt="image" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 p__cormorant antialiased font-semibold leading-relaxed tracking-normal uppercase">
          Instructor: {name}
        </h6>
        <h4 className="block mb-2 p__cormorant antialiased leading-snug tracking-normal">
          {title}
        </h4>
        <p className="block mb-8 antialiased p__cormorant leading-relaxed">{name}</p>

       
          <Link to={`/dashboard/my-class/recordedclass/${title}`}>
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn-style"
              type="button"
            >
              continue
              <FaLocationArrow />
            </button>
          </Link>
       
      </div>
    </div>
  );
};

export default MyenrollCard;
