import  { useState } from "react";
import faq from '../../assets/faq.json'
import Lottie from "lottie-react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const faqData = [
    {
      question: "What is the purpose of InnavatED?",
      answer:
        "InnavatED aims to revolutionize education by providing innovative learning solutions tailored to individual needs, fostering personalized learning experiences for students worldwide.",
    },
    {
      question: "How do I sign up for InnavatED?",
      answer:
        "Signing up for InnavatED is easy! Simply go to our website, click on the 'Sign Up' button, and follow the instructions to create your account.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period for new users. You can explore our platform and experience its features before committing to a subscription.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! You have the flexibility to cancel your subscription at any time with no questions asked. We believe in providing hassle-free service to our users.",
    },
  ];

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="section-container">
      <div className="space-y-3 mt-16 ">
        <h2 className="headtext__cormorant text-center font-base ">
          Frequently Asked Questions
        </h2>
        <p className="text-center p__cormorant">
          Explore common questions about InnavatED and discover how our platform
          is reshaping education.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
        <div data-aos="fade-right" className="flex-1 overflow-hidden">
          <Lottie animationData={faq} ></Lottie>
        </div>
        {/* accordion */}
        <div className="flex-1">
          <div className="flex justify-center">
            <div className="max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
              {/* mapping each accordion */}
              {faqData.map((faq, idx) => (
                <div
                  key={idx}
                  onClick={() => handleToggle(idx)}
                  className="flex items-center"
                >
                  {/* index div */}
                  <div className="w-16 h-16 bg-third flex justify-center items-center text-black text-2xl font-semibold rounded-xl font-sans">
                    <span>0{idx + 1}</span>
                  </div>
                  <div className="w-10 h-[2px] bg-third relative">
                    <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                    <span className="bg-first w-10 h-1"></span>
                  </div>
                  {/* main accordion div */}
                  <div>
                    <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-second relative">
                      <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-first absolute top-0 right-0"></span>
                      <h1 className="text-[#355E72] text-xl text-center">
                        {faq.question}
                      </h1>
                    </div>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                        isOpen === idx
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-[450px] rounded-br-xl rounded-bl-xl bg-sky-50 text-black p-6 text-center text-sm">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
