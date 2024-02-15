import { NavLink, Outlet } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import useUserRole from "../../Hooks/useUserRole";
import useStudentSpecificNotices from "../../Hooks/useStudentSpecificNotices";

const NoticeBanner = () => {
  const [role, refetch,] = useUserRole();
  const [, studentRefetch,] = useStudentSpecificNotices();
  // console.log(role);
  const currentRole = role[0]?.role
  refetch();
  studentRefetch();
  // console.log(currentRole);

  return (
    <div>
      <figure className=" w-full h-[45vh] relative">
        {/* <img src='https://i.ibb.co/YZLxNS8/notice.jpg' alt="notice-image" className="w-full h-full" /> */}
        <img src='https://i.ibb.co/Fqw8LX4/NOTICE.png' alt="notice-image" className="w-full h-full" />
        <div className="bg-black opacity-50 w-full h-full absolute top-0"></div>
      </figure>
      <div className="section-container flex items-center justify-between flex-col md:flex-row lg:flex-row mt-7">
        <div className="flex items-center gap-4 my-5 flex-col md:flex-row lg:flex-row">
          {
            currentRole === 'teacher' && <div className="relative w-auto flex items-center flex-col md:flex-row lg:flex-row gap-10 ">
              <NavLink to='teacher-notices'
                className={({ isActive }) =>
                  ` text-[18px] font-medium duration-200 transform btn hover:border-green-600 hover:text-green-600 bg-first hover:bg-transparent text-whiterounded-2xl text-start w-52  h-16 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ${isActive ? 'text-white green_gradient_text border-green-600 ' : 'bg-green-600'
                  }`} >
                <span> Teacher </span>
                {
                  <div className="relative w-auto ml-16 -mt-16">
                    <FcCheckmark className="text-7xl font-bold absolute right-0 top-0" />
                    <span className="w-8 h-8 bg-green-600 rounded-full right-6 top-1 absolute "></span>
                  </div>
                }
              </NavLink>

              <NavLink
                to='new-notices'
                className={({ isActive }) =>
                  `text-[18px] font-medium duration-200 transform btn hover:border-green-600 hover:text-green-600 hover:bg-transparent bg-green-600 text-whiterounded-2xl h-16 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 online${isActive ? ' text-white green_gradient_text border-green-600' : 'bg-green-600'
                  }`} >
                Common Notice
              </NavLink>
            </div>
          }

          {
            currentRole === 'student' && <div className="relative w-auto flex items-center flex-col md:flex-row lg:flex-row gap-10">
              <NavLink to='user-notices'
                className={({ isActive }) =>
                  ` text-[18px] font-medium duration-200 transform btn hover:border-green-600 hover:text-green-600 bg-first hover:bg-transparent text-whiterounded-2xl text-start w-52  h-16 hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ${isActive ? 'text-white green_gradient_text border-green-600 ' : 'bg-green-600'
                  }`} >
                <span> Student </span>
                {
                  <div className="relative w-auto ml-16 -mt-16">
                    <FcCheckmark className="text-7xl font-bold absolute right-0 top-0" />
                    <span className="w-8 h-8 bg-green-600 rounded-full right-6 top-1 absolute "></span>
                  </div>
                }
              </NavLink>
              <NavLink
                to='new-notices'
                className={({ isActive }) =>
                  `text-[18px] font-medium duration-200 transform btn hover:border-green-600 hover:text-green-600 hover:bg-transparent bg-green-600 text-whiterounded-2xl h-16  hover:-translate-y-[2px] transition-all ease-in hover:scale-100 online${isActive ? ' text-white green_gradient_text border-green-600' : 'bg-green-600'
                  }`} >
                Common Notice
              </NavLink>
            </div>
          }

        </div>
      </div>
      <div className="w-auto h-auto mt-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default NoticeBanner;
