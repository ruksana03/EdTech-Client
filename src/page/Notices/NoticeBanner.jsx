import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";

const NoticeBanner = () => {
  const [role, refetch] = useUserRole();
  const currentRole = role[0]?.role
  refetch();


  return (
    <div className="p__cormorant">
      <div className="bg-second py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg leading-6 font-semibold text-white uppercase tracking-wider">
              {/* Important Notices */}
            </h2>
            <p className="mt-2 text-3xl h-12 font-extrabold text-white sm:text-4xl">

            </p>
            <p className="mt-4 max-w-2xl text-xl text-white mx-auto uppercase headtext__cormorant">
              {currentRole} || Notice
            </p>
          </div>
        </div>
      </div>

      <div className="section-container flex items-center justify-between flex-col md:flex-row lg:flex-row mt-7">
        <div className="flex items-center gap-4 my-5 flex-col md:flex-row lg:flex-row ">
          {
            currentRole === 'teacher' && <div className="relative w-auto flex items-center flex-col md:flex-row lg:flex-row gap-10 ">
              <NavLink to='admins-notices-teacher'
                className={({ isActive }) =>
                  `btn-style ${isActive ? 'bg-black text-white ' : 'bg-black text-white'
                  }`} >
                 Admin 
               
              </NavLink>

              <NavLink
                to='common-notices-admin'
                className={({ isActive }) =>
                  `btn-style ${isActive ? ' bg-black text-white border-black' : 'bg-black text-white'
                  }`} >
                Common Notice
              </NavLink>
            </div>
          }

          {
            currentRole === 'student' && <div className="relative w-auto flex items-center flex-col md:flex-row lg:flex-row gap-10">
              <NavLink to='teachers-notices'
                className={({ isActive }) =>
                `btn-style ${isActive ? 'bg-black text-white ' : 'bg-black text-white'
                  }`} >
                Teacher
              </NavLink>
              <NavLink
                to='common-notices-admin'
                className={({ isActive }) =>
                `btn-style ${isActive ? 'bg-black text-white ' : 'bg-black text-white'
                  }`} >
                Common Notice
              </NavLink>
              <NavLink
                to='admins-notices-student'
                className={({ isActive }) =>
                `btn-style ${isActive ? 'bg-black text-white ' : 'bg-black text-white'
                  }`} >
                Student
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