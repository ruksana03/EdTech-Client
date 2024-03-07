/* eslint-disable no-unused-vars */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yaskyb9",
        "template_4pto5wb",
        form.current,
        "nGBs8w8pheW6v3DRU"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Congrates🎉",
            text: "Your Information has been Sent..",
            icon: "success",
          });
        },
        (error) => {
        }
      );
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10 items-center justify-center w-full py-20 section-container px-10 ">
        <div className="cols-span-12 md:col-span-4 lg:col-span-4 p-5">
          <div>
            <h1 className="p__cormorant text-start mb-1">
              Address:
            </h1>
            <p className="p__opensans">15/Dhaka city,Bangladesh</p>
            <hr className="my-8" />
          </div>
          <div>
            <h1 className="p__cormorant text-start mb-1">
              Office Hours:
            </h1>
            <p className="p__opensans">Monday - Friday: 9AM - 5PM</p>
            <hr className="my-8" />
          </div>
          <div>
            <h1 className="p__cormorant text-start mb-1">
              Phone:
            </h1>
            <p className="p__opensans">+08844-6854</p>
            <hr className="my-8" />
          </div>
        </div>

        <div className="cols-span-12 md:col-span-8 lg:col-span-8 px-5 p__cormorant border mt-6 pb-6">
          <h1 className=" text-center headtext__cormorant ">
            Get in Touch with Us
          </h1>
          <p className="text-sm text-center">
            Welcome to EduTech Platform! Were thrilled that you want to connect
            with us. Whether you have questions about our educational resources,
            need assistance with our platform, or want to explore partnership
            opportunities, our team to help.
          </p>
          <div className="mt-8 p__cormorant">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full  3 mx-auto" >

              <div className="mb-6 w-full">
                <div className="md:w-1/3">
                  <label className="block  text-start mb-1 md:mb-0 pr-4 p__cormorant">
                    Message *
                  </label>
                </div>
                <div className="md:w-full mt-2 ">
                  <textarea
                    className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                    name="message"
                    type="text"
                    placeholder="Message"
                    required
                  ></textarea>
                  <hr className="border-t border-first" />
                </div>
              </div>

              <div className="flex justify-between items-center gap-4">
                <div className="mb-6 w-full ">
                  <div className="">
                    <label className="block   text-start mb-1 md:mb-0 pr-4 p__cormorant">
                      Full Name *
                    </label>
                  </div>
                  <div className="w-full mt-2">
                    <input
                      className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                      id="inline-full-name"
                      name="from_name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                    <hr className="border-t border-first" />
                  </div>
                </div>
                <div className="mb-6 w-full">
                  <div className="">
                    <label className="block   text-start mb-1 md:mb-0 pr-4 p__cormorant">
                      Email *
                    </label>
                  </div>
                  <div className=" w-full mt-2">
                    <input
                      className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                      id="inline-password"
                      name="from_email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                    <hr className="border-t border-first" />
                  </div>
                </div>
                <div className="mb-6 w-full">
                  <div className="">
                    <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                      Phone *
                    </label>
                  </div>
                  <div className="md:w-full mt-2">
                    <input
                      className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                      id="inline-password"
                      name="from_phone"
                      type="number"
                      placeholder="Phone Number"
                      required
                    />
                    <hr className="border-t border-first" />
                  </div>
                </div>
              </div>


              <div className="flex items-end justify-end ">
                <button
                  className="shadow btn-style w-full  transition-all focus:shadow-outline focus:outline-none  "
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
