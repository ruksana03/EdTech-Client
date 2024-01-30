import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
// import { IoSearch } from "react-icons/io5";

const BannerA = () => {
  const [typeEffect] = useTypewriter({
    words: ["Journey", "with", "Success!"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center">
      <div
        className="absolute  inset-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/HYyzSmr/chris-montgomery-smg-Tvepind4-unsplash.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: `50% ${-scrollY * 0.5}px`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          opacity: "0.25",
          zIndex: "-1",
        }}
      ></div>
      <div className=" mx-auto space-y-6  text-center text-black">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Begin Your
          <span className="font-bold dark:text-green-500 text-first ml-2">
            {typeEffect}
          </span>
        </h2>
        <p className="text-xl  ">
          Unlocking the power of online learning for everyone.
        </p>
        <Link to="/all-courses">
          <button className="px-4 mt-6  btn-style py-2 rounded-2xl">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerA;