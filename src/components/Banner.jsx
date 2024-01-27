import { useTypewriter } from "react-simple-typewriter";
const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["Journey", "with", "Success!"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className=" w-full lg:min-h-[80vh] h-auto pt-8 section-container ">
      <div className="flex flex-col-reverse md:flex-row items-center   gap-12 ">
        <div className="flex-1 space-y-6 p-5">
          <h2 className="text-3xl md:text-5xl font-semibold">
          Begin Your
            <span className="font-bold   text-first ml-2">{typeEffect}</span>
          </h2>
          <p className="text-lg">
            Unlock a world of knowledge with our diverse range of educational
            resources and expert learning solutions. Your path to learning is
            just a click away.
          </p>
          <button className="px-3 btn-style py-2 rounded-2xl">Get Started</button>
        </div>
        <div className="flex-1  ">
          <img
            className="rounded-md    "
            src="https://i.ibb.co/q9mKgvN/banner1.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
