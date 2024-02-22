/* eslint-disable react/prop-types */

 

const MyenrollCard = ({ enroll }) => {
  const {  image, name, title} = enroll || {}
   
  return (
    <div className="relative flex mx-auto w-full max-w-[48rem] flex-row rounded-xl border-gray-200 border   bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700  rounded-r-none shrink-0 rounded-xl bg-clip-border ">
        <img
          src={image}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 p__cormorant    antialiased font-semibold leading-relaxed tracking-normal uppercase">
          Instructor: {name}
        </h6>
        <h4 className="block mb-2 p__cormorant    antialiased  leading-snug tracking-normal ">
          {title}
        </h4>
        <p className="block mb-8  antialiased   p__cormorant leading-relaxed ">
           {name}
        </p>
     
       
        
      
       
      </div>
    </div>
  );
};
export default MyenrollCard;