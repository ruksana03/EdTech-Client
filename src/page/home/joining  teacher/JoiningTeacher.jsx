import { useRef } from "react";
// import banner from '../../../assets/image/teacher/banner.gif'
import { PiChalkboardTeacherBold } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const JoiningTeacher = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("button clicked");

    emailjs
      .sendForm(
        "service_ma8j509",
        "template_c84vntq",
        form.current,
        "nGBs8w8pheW6v3DRU"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Congrates🎉",
            text: "Your Information has been Sent..",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" dark:text-white w-full h-full mb-5">
      <div className="relative w-full h-[55vh]">
        <img
          src="https://i.ibb.co/vzrrRb5/teacher-application.jpg"
          alt="banner-image"
          className="w-full h-full"
        />
        {/* <div className="absolute bg-black opacity-60 w-full h-full top-0"></div> */}
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-center my-5 flex items-center justify-center gap-2 flex-wrap px-10">
          Please Fill the Form to be a{" "}
          <span className="text-first dark:text-green-600">Teacher</span>{" "}
          <PiChalkboardTeacherBold className="text-first text-3xl dark:text-green-600" />
        </h1>
        <div className="lg:my-5 p-5 lg:p-8 w-full md:w-2/3 lg:w-1/3 mx-auto md:border lg:border">
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Full Name *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200 dark:bg-zinc-600 text-[17px] appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                  id="inline-full-name"
                  name="from_name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Email *
                </label>
              </div>
              <div className=" md:w-full mt-2">
                <input
                  className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                  id="inline-password"
                  name="from_email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="">
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Which course are you interested in teaching?
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200
                                    dark:bg-zinc-800 appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none text-[17px] focus:bg-white focus:border-first"
                  id=""
                  name="from_position"
                  type="text"
                  placeholder="Write Here....."
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Tell us something about this course *
                </label>
              </div>
              <div className="md:w-full mt-2 ">
                <textarea
                  className="bg-gray-200 dark:bg-zinc-600 appearance-none border-2 border-gray-200 rounded w-full h-32 py-2 text-[17px] px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                  name="message"
                  type="text"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="mb-6">
              <div>
                <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                  Give Your CV/Resume link Here *
                </label>
              </div>
              <div className="md:w-full mt-2">
                <input
                  className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first"
                  id="inline-password"
                  name="from_cv"
                  type="Link"
                  pattern="https://.*"
                  placeholder="give your cv live link...."
                  required
                />
              </div>
            </div>
            <div className="flex items-end justify-end">
              <button
                className="shadow bg-first hover:bg-[#256330] transition-all focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded text-[17px]"
                type="submit"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoiningTeacher;
