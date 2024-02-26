import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation('global');
  return (
    <div className="my-16 section-container">
      <div className="space-y-3 dark:text-gray-400 text-center">
        <h2 className="headtext__cormorant "> {t('team.title')}</h2>
        <h4 className="p__cormorant">
        {t('team.description')}
        </h4>
      </div>
      <div className="flex grid-flow-row items-center gap-12 justify-center flex-wrap mt-12">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border card border-first p-6 shadow-md"
        >
          <img
            src="https://i.ibb.co/DwhXW2W/roksanaapu.jpg"
            className="w-16 h-16 rounded-full  mx-auto "
            alt="Atia roksana photo "
          />
          <h3 className="text-center p__cormorant font-medium mt-1">Ruksana</h3>
          <p className="font-medium p__opensans">FrontEnd Developer</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border card   border-first p-6 shadow-md"
        >
          <img
            src="https://i.ibb.co/bLLhCbf/hasibul-1.png"
            className="w-16 h-16 rounded-full mx-auto"
            alt="hasibul hasan photo "
          />
          <h3 className="text-center p__cormorant font-medium  mt-1">
            Hasibul Hasan
          </h3>
          <p className="font-medium p__opensans">Backend Developer</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border card   border-first p-6 shadow-md"
        >
          <img
            src="https://i.ibb.co/7rCXjM8/sunildada.png"
            className="w-16 h-16 rounded-full mx-auto"
            alt="sushil hemrom photo "
          />
          <h3 className="text-center p__cormorant font-medium mt-1">
            Shusil Hemrom
          </h3>
          <p className="font-medium p__opensans">FrontEnd Developer</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border   card   border-first p-6 shadow-md"
        >
          <img
            src="https://i.ibb.co/smyhfCh/shakilvai.jpg"
            className="w-16 h-16 rounded-full mx-auto"
            alt="shakil hossain photo"
          />
          <h3 className="text-center p__cormorant font-medium mt-1">
            Shail Hossain
          </h3>
          <p className="font-medium p__opensans">Backend Developer</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border  card   border-first p-6 shadow-md"
        >
          <img
            src="https://i.ibb.co/DrgT9mM/razibdada.jpg"
            className="w-16 h-16 rounded-full mx-auto"
            alt="razib das photo "
          />
          <h3 className="text-center p__cormorant font-medium mt-1">
            Razib Das
          </h3>
          <p className="font-medium p__opensans">Backend Developer</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border  card   border-first p-6 shadow-md"
        >
          <img
            src="https://i.ibb.co/fHXvRVz/shuvovai.jpg"
            className="w-16 h-16 rounded-full mx-auto"
            alt=" Al nayem photo"
          />
          <h3 className="text-center p__cormorant font-medium mt-1">
            Al Nayem
          </h3>
          <p className="font-medium p__opensans">Backend Developer</p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="border  card   border-first p-6 shadow-md"
        >
          <img
            src="https://ibb.co/K9zBSwb"
            className="w-16 h-16 rounded-full mx-auto"
            alt=" Shaikot photo"
          />
          <h3 className="text-center p__cormorant font-medium mt-1">
          Saiful Islam Shaikot
          </h3>
          <p className="font-medium p__opensans">FrontEnd Developer</p>
        </div>
      </div>
    </div>
  );
};
export default Team;
