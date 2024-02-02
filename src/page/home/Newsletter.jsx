import Lottie from "lottie-react";
import newsletter from "../../../public/newsletter.json";
const NewsLetter = () => {
  return (
    <div className="my-20 p-5">
      <div className=" section-container py-8 md:py-12 grid place-content-center   ">
        <div className="lg:flex justify-start lg:gap-28">
          <div className=" dark:text-gray-400">
            <h1 data-aos="fade-up" className="title">
              Newsletter
            </h1>
            <p className="pt-8 md:pt-4 text-gray-600 dark:text-gray-400">
              Sign up for our newsletter and get weekly updates. We only send
              emails about our latest courses once a week every Friday.
            </p>
            <form className="mt-8 md:flex justify-start md:gap-4">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="placeholder-gray-600 dark:bg-zinc-800 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none"
                required
              />
              <button
                data-tip="subscribe now"
                className="w-full md:w-auto  px-8 py-4 border rounded-md btn-style dark:text-gray-400 tooltip font-semibold mt-4 md:mt-0  "
              >
                Subscribe
              </button>
            </form>
            <p className="pt-4 text-xs text-gray-600  dark:text-gray-400">
              Read our privacy policy
            </p>
          </div>
          <div className="pt-8 lg:pt-0">
            <Lottie animationData={newsletter} loop={true}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;