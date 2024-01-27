import {
    FaFlagCheckered,
    FaNotesMedical,
    FaUsers,
    FaUsersCog,
  } from "react-icons/fa";
  
  const About = () => {
    return (
      <div>
        <div className="section-container mt-16">
          <p className="subtitle pb-2">About us</p>
          <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
            <div className="w-full lg:w-6/12">
              <h2 className="w-full title">Meet the Team Behind InnavatED</h2>
              <p className="font-normal text-base leading-6 text-gray-600  ">
                Discover the story, vision, and people driving our mission to
                revolutionize on education through technology. Learn about the
                journey and the community shaping the future of learning
              </p>
            </div>
            <div className="w-full lg:w-6/12">
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
                <FaFlagCheckered className="text-white" />
              </div>
  
              <span className="w-12 h-12 rounded-full bg-first flex justify-center items-center">
                <FaNotesMedical className="text-white" />
              </span>
              <span className="w-12 h-12 rounded-full bg-first justify-center items-center  sm:flex hidden ">
                <FaUsers className="text-white " />
              </span>
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
          </div>
  
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
              <p className="subtitle   mt-6">Empowering Education</p>
              <p className="font-normal text-base leading-6 text-gray-600  mt-6">
                InnavatED started with a vision to empower education through
                technology, making learning accessible, interactive, and engaging.
                Founded in 2023.
              </p>
            </div>
            <div>
              <p className="subtitle  mt-6">Millions of Learning Opportunities</p>
              <p className="font-normal text-base leading-6 text-gray-600   mt-6">
                Every month, we strive to provide millions of learning
                opportunities through our diverse courses and interactive
                educational experiences.
              </p>
            </div>
            <div className="sm:block hidden">
              <p className="subtitle mt-6">Growing Community</p>
              <p className="font-normal text-base leading-6 text-gray-600   mt-6">
                Our community of learners continues to inspire us to enhance our
                platform, fostering a collaborative and supportive learning
                environment.
              </p>
            </div>
          </div>
  
          {/* Additional sections for smaller screens */}
          <div className="sm:hidden block relative mt-8">
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
              <span className="w-12 h-12 rounded-full bg-first flex justify-center items-center  sm:hidden  ">
                <FaUsers className="text-white " />
              </span>
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
          </div>
          <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
              <p className="subtitle mt-6">Dedicated Team</p>
              <p className="font-normal text-base leading-6 text-gray-600   mt-6">
                Our team of educators, developers, and experts is committed to
                providing a seamless and enriching learning experience for all
                users.
              </p>
            </div>
          </div>
  
          {/* Update mission and team details */}
          <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
            <div className="w-full lg:w-6/12">
              <h2 className="subtitle ">Our Mission</h2>
              <p className="font-normal text-base leading-6 text-gray-600   mt-6 w-full lg:w-10/12 xl:w-9/12">
                At InnavateED, our mission is to revolutionize education by
                providing accessible, innovative, and personalized learning
                experiences. We believe in the power of technology to transform
                education and empower learners worldwide.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                <div className="flex p-4 shadow-md">
                  <div className="mr-6">
                    <FaUsersCog className="text-first" />
                  </div>
                  <div className="">
                    <p className="subtitle ">Our Team</p>
                    <p className="mt-2 font-normal text-base leading-6 text-gray-600 ">
                      Comprising dedicated educators, developers, and industry
                      experts, our team is focused on shaping the future of
                      education and fostering a dynamic learning community.
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