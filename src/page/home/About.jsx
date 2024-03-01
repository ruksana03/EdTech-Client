import { useTranslation } from "react-i18next";
import {
  FaFlagCheckered,
  FaNotesMedical,
  FaUsers,
  FaUsersCog,
} from "react-icons/fa";

const About = () => {
  const { t } = useTranslation('global');
  return (
    <div>
      <div className="section-container mt-16">
        <p className="headtext__cormorant pb-2">{t('about.title')}</p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 overflow-hidden">
          <div className="w-full lg:w-6/12 dark:text-gray-400">
            <h2 className="w-full p__cormorant">{t('about.sectionTitle1')}</h2>
            <p className="font-normal text-base leading-6 p__cormorant ">
             {t('about.sectionDescription1')}
            </p>
          </div>
          <div data-aos="fade-left" className="w-full lg:w-6/12 overflow-hidden">
            <img
              className="lg:block hidden w-full"
              src="https://i.ibb.co/bWXkkk7/jason-goodman-vbxy-Fxlgpj-M-unsplash.jpg"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full"
              src="https://i.ibb.co/bWXkkk7/jason-goodman-vbxy-Fxlgpj-M-unsplash.jpg"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/bWXkkk7/jason-goodman-vbxy-Fxlgpj-M-unsplash.jpg"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="relative mt-12">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className=" w-12 h-12 bg-first rounded-full flex justify-center items-center">
              <FaFlagCheckered   />
            </div>

            <span className="w-12 h-12 rounded-full bg-first flex justify-center items-center">
              <FaNotesMedical   />
            </span>
            <span className="w-12 h-12 rounded-full bg-first justify-center items-center  sm:flex hidden ">
              <FaUsers   />
            </span>
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4 ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="p__cormorant mt-6">{t('about.sectionTitle2')}</p>
            <p className="font-normal text-base leading-6 p__opensans mt-6">
            {t('about.sectionDescription2')}
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="p__cormorant mt-6">{t('about.sectionTitle3')}</p>
            <p className="font-normal text-base leading-6 p__opensans mt-6">
            {t('about.sectionDescription3')}
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="sm:block hidden"
          >
            <p className="p__cormorant mt-6">{t('about.sectionTitle4')}</p>
            <p className="font-normal text-base leading-6 p__opensans mt-6">
            {t('about.sectionDescription4')}
            </p>
          </div>
        </div>

        {/* Additional sections for smaller screens */}
        <div className="sm:hidden block relative mt-8">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <span className="w-12 h-12 rounded-full bg-first dark:bg-white flex justify-center items-center  sm:hidden  ">
              <FaUsers   />
            </span>
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="p__cormorant mt-6 ">{t('about.sectionTitle5')}</p>
            <p className="font-normal text-base leading-6 p__opensans mt-6">
            {t('about.sectionDescription5')}
            </p>
          </div>
        </div>

        {/* Update mission and team details */}
        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-full lg:w-6/12"
          >
            <h2 className="p__cormorant">{t('about.sectionTitle6')}</h2>
            <p className="font-normal text-base leading-6 p__opensans mt-6 w-full lg:w-10/12 xl:w-9/12">
            {t('about.sectionDescription6')}
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <FaUsersCog className="text-first" />
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <p className="p__cormorant">{t('about.sectionTitle7')}</p>
                  <p className="mt-2 font-normal text-base leading-6 p__opensans ">
                  {t('about.sectionDescription7')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;