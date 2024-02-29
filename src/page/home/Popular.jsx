/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Cards from "../../components/Cards";
import { useTranslation } from "react-i18next";
import PopularSkeleton from "./PopularSkeleton";

const SimpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block", background: "red" }}
    >
      Next
    </div>
  );
};
const SimplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block", background: "green" }}
    >
      Back
    </div>
  );
};

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const slider = React.useRef(null);
  const [isLoadig, setIsLoading] = useState(true);
  const { t } = useTranslation('global');

  // handle side effects
  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
        setIsLoading(false);
      });
  }, []);

  // slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
  };

  return (
    <div className="section-container my-20 relative p-5">
      <div className="text-left">
        <h2 className="headtext__cormorant">{t("popular.title")}</h2>
        <h2 className="p__cormorant">{t("popular.subtitle")} </h2>
      </div>

      {/* next prev buttons */}
      <div className="md:absolute right-3 top-8 mb-10 md:mr-16">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn p-2 rounded-full shadow-m  bg-first text-black "
        >
          <FaAngleLeft className="w-8 h-8 p-1" />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn p-2 rounded-full shadow-m  bg-first text-black  ml-3"
        >
          <FaAngleRight className="w-8 h-8 p-1" />
        </button>
      </div>

      {/* map recipies */}
      <Slider {...settings} ref={slider} className="mt-12 overflow-hidden flex items-center justify-center">
        {popular?.map((item, idx) => (
          <Cards key={idx} item={item}></Cards>
        ))}
      </Slider>
      {/* react loading skeleton  */}
      <div className="flex items-center justify-center w-full gap-4">
        {
          isLoadig && <PopularSkeleton cards={4} />
        }
      </div>
    </div>
  );
};
export default Popular;