import { useState } from "react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(index === activeAccordion ? -1 : index);
  };

  return (
    <div className="section-container">
      <div className="space-y-3 mt-16 dark:text-gray-400">
        <h2 className=" headtext__cormorant text-center font-base ">Frequently Asked Questions</h2>
        <p className="text-center p__cormorant">
          Explore common questions about InnavatED and discover how our platform
          is reshaping education.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
        <div className="flex-1 overflow-hidden">
          <img
            data-aos="fade-right"
            className="rounded-2xl p-3"
            src="https://i.ibb.co/s3Ym1LH/faq-removebg-preview.png"
            alt="faq"
          />
        </div>
        {/* accordion */}
        <div className="flex-1">
          <div  data-aos="flip-up"
            className="collapse collapse-plus bg-black dark:bg-zinc-700 dark:text-gray-400"
            onClick={() => handleAccordionToggle(1)}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={activeAccordion === 1}
              readOnly
            />
            <div className="collapse-title p__opensans text-xl">
              What is InnavatEDs main benefit for students?
            </div>
            <div
              className={`collapse-content ${
                activeAccordion === 1 ? "open" : ""
              }`}
            >
              <p className="p__opensans">
                InnavatED offers personalized learning to enhance the student
                experience.
              </p>
            </div>
          </div>
          <div  data-aos="flip-up"
            className="collapse collapse-plus my-6  bg-black"
            onClick={() => handleAccordionToggle(2)}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={activeAccordion === 2}
              readOnly
            />
            <div className="collapse-title p__opensans text-xl font-medium">
              How can educators integrate InnavatED into their teaching methods?
            </div>
            <div
              className={`collapse-content ${
                activeAccordion === 2 ? "open" : ""
              }`}
            >
              <p className="p__opensans">
                InnavatED provides seamless integration with existing teaching
                methods. Educators can utilize our platform to create engaging
                online courses, track student progress, and leverage analytics
                for data-driven insights.
              </p>
            </div>
          </div>
          <div  data-aos="flip-up"
            className="collapse collapse-plus bg-black  "
            onClick={() => handleAccordionToggle(3)}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={activeAccordion === 3}
              readOnly
            />
            <div className="collapse-title p__opensans text-xl font-medium">
              How does InnavatED ensure data security?
            </div>
            <div
              className={`collapse-content ${
                activeAccordion === 3 ? "open" : ""
              }`}
            >
              <p className="p__opensans">
                InnavatED prioritizes robust encryption and strict data
                protection for student privacy.
              </p>
            </div>
          </div>
          <div  data-aos="flip-up"
            className="collapse collapse-plus bg-black mt-6  "
            onClick={() => handleAccordionToggle(4)}
          >
            <input
              type="radio"
              name="my-accordion-3"
              checked={activeAccordion === 4}
              readOnly
            />
            <div className="collapse-title p__opensans text-xl font-medium">
              Is InnavatED suitable for all grade levels?
            </div>
            <div
              className={`collapse-content ${
                activeAccordion === 4 ? "open" : ""
              }`}
            >
              <p className="p__opensans">
                Yes, InnavatED caters to various grades with adaptive learning
                and diverse content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;