/* eslint-disable react/prop-types */
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className="px-2 mx-2">
        <Link to="/">
          <article className="font-bold flex items-center  p__cormorant">
            <FaGraduationCap className="text-2xl bg-first text-black  mr-1 " />
            Innovate <span className="text-first">ED</span>
          </article>
        </Link>
      </div>
    );
};

export default Logo;