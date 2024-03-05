import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Team = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  
  const teamMembers = [
    {
      img: "https://i.ibb.co/DwhXW2W/roksanaapu.jpg",
      name: "Atia Ruksana",
      role: "FrontEnd Developer"
    },
    {
      img: "https://i.ibb.co/j4YzDnj/profile.jpg",
      name: "Hasibul Hasan",
      role: "Backend Developer"
    },
    {
      img: "https://i.ibb.co/7rCXjM8/sunildada.png",
      name: "Shusil Hemrom",
      role: "Frontend Developer"
    },
    {
      img: "https://i.ibb.co/smyhfCh/shakilvai.jpg",
      name: "Shail Hossain",
      role: "Backend Developer"
    },
    {
      img: "https://i.ibb.co/DrgT9mM/razibdada.jpg",
      name: "Razib Das",
      role: "Frontend Developer"
    },
    {
      img: "https://i.ibb.co/fHXvRVz/shuvovai.jpg",
      name: "Al Nayem",
      role: "Frontend Developer"
    },
    {
      img: "https://i.ibb.co/mHFdg8b/138345181.jpg",
      name: "Saiful Islam",
      role: "Frontend Developer"
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? teamMembers.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === teamMembers.length - 1 ? 0 : currentSlider + 1
    );
    const { t } = useTranslation('global');

  return (
  <div className="section-container my-12">
    <div className="space-y-3 text-center">
        <h2 className="headtext__cormorant "> {t('team.title')}</h2>
        <h4 className="p__cormorant">
        {t('team.description')}
        </h4>
      </div>
      <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
        <button
          onClick={prevSlider}
          className="flex justify-center items-center bg-third rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          {/* Left arrow icon */}
          <MdOutlineKeyboardArrowLeft className="text-2xl  " />
        </button>
        <button
          onClick={nextSlider}
          className="flex justify-center items-center bg-third rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          {/* Right arrow  icon */}
          <MdOutlineKeyboardArrowRight  className="text-2xl  "/>
        </button>
      </div>
      <div
        className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
        style={{ transform: `translateX(-${currentSlider * 50}%)` }}

      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${
              currentSlider === index
                ? "h-[240px] sm:h-[230px] md:h-[400px] lg:h-[480px]"
                : "h-[220px] sm:h-[210px] md:h-[330px] lg:h-[430px] scale-95 opacity-40"
            } min-w-[50%] relative duration-200`}
            style={{ perspective: "200px" }}
          >
            <img
              src={member.img}
              className="w-full h-full bg-black opacity-70 rounded-lg duration-300"
              alt={member.name}
              style={{
                transform: `${
                  currentSlider - 1 === index
                    ? "rotateY(4deg)"
                    : currentSlider + 1 === index
                    ? "rotateY(-4deg)"
                    : ""
                }`,
                transformStyle: "preserve-3d"
              }}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="ont-medium font-alt text-base text-white md:text-xl lg:text-2xl shadow-md mt-1">
                {member.name}
              </h3>
              <p className="font-medium font-alt text-base text-white md:text-xl lg:text-2xl shadow-md">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Team;




