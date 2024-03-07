import { GrResources } from "react-icons/gr";
import { Link, Outlet } from "react-router-dom";

const MyClass = () => {
  

  return (
    <div  >
      <div className=" max-h-fit my-5 mx-4 mt-14">
        <div className="flex gap-4 ">
          
          <div className=" flex-1">
            <Outlet></Outlet>
          </div>
         
        </div>
        <div>
            {/* support resources */}
         <div className="flex flex-col md:flex-row gap-8 items-center mt-6  ">
          <div>
            <Link to={"support"}>
                  <button
                    className="flex btn-style items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-100 group"
                  >
                    <svg
                      className=" flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Support
                    </span>
                  </button>
                </Link>
                </div>
          <div >
            <button className="btn-style flex items-center">Resources
            <span><GrResources /></span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
