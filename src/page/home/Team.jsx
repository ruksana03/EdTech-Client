const Team = () => {
  return (
    <div
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      className="my-16 section-container"
    >
      <div className="space-y-3 text-center">
        <h2 className="title"> Meet our professionals</h2>
        <h4 className="subtitle">
          Our talented team of experts is dedicated to delivering top-notch
          solutions to our clients. With a diverse range of skills and
          backgrounds, we collaborate to turn ideas into reality
        </h4>
      </div>
      <div className="flex grid-flow-row items-center gap-12 justify-center flex-wrap mt-12">
        <div className="border card border-black p-6 shadow-md">
          <img
            src="https://i.ibb.co/DwhXW2W/roksanaapu.jpg"
            className="w-16 h-16 rounded-full  mx-auto "
            alt="Atia roksana photo "
          />
          <h3 className="text-center font-medium mt-1">Atia Roksana</h3>
          <p className="font-medium">FrontEnd Developer</p>
        </div>
        <div className="border card border-black p-6 shadow-md">
          <img
            src="https://i.ibb.co/bLLhCbf/hasibul-1.png"
            className="w-16 h-16 rounded-full mx-auto"
            alt="hasibul hasan photo "
          />
          <h3 className="text-center font-medium mt-1">Hasibul Hasan</h3>
          <p className="font-medium">FrontEnd Developer</p>
        </div>
        <div className="border card border-black p-6 shadow-md">
          <img
            src="https://i.ibb.co/7rCXjM8/sunildada.png"
            className="w-16 h-16 rounded-full mx-auto"
            alt="sushil hemrom photo "
          />
          <h3 className="text-center font-medium mt-1">Shusil Hemrom</h3>
          <p className="font-medium">FrontEnd Developer</p>
        </div>
        <div className="border card border-black p-6 shadow-md">
          <img
            src="https://i.ibb.co/smyhfCh/shakilvai.jpg"
            className="w-16 h-16 rounded-full mx-auto"
            alt="shakil hossain photo"
          />
          <h3 className="text-center font-medium mt-1">Shail Hossain</h3>
          <p className="font-medium">Backend Developer</p>
        </div>
        <div className="border card border-black p-6 shadow-md">
          <img
            src="https://i.ibb.co/DrgT9mM/razibdada.jpg"
            className="w-16 h-16 rounded-full mx-auto"
            alt="razib das photo "
          />
          <h3 className="text-center font-medium mt-1">Razib Das</h3>
          <p className="font-medium">Backend Developer</p>
        </div>
        <div className="border card border-black p-6 shadow-md">
          <img
            src="https://i.ibb.co/fHXvRVz/shuvovai.jpg"
            className="w-16 h-16 rounded-full mx-auto"
            alt=" Al nayem photo"
          />
          <h3 className="text-center font-medium mt-1">Al Nayem</h3>
          <p className="font-medium">Backend Developer</p>
        </div>
      </div>
    </div>
  );
};
export default Team;
