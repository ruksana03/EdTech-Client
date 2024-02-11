import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useUserRole from './../../Hooks/useUserRole';
import { updateUserPassword } from "../../Features/Utilities";
import Swal from "sweetalert2";

const UserProfile = () => {
  const user = useSelector(state => state.data.user.user);
  const [role,] = useUserRole();
  const currenUserRole = role[0]?.role;
  const email = user?.email;

  const handleChangePassword = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "Change Your Password",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes"
        }).then((result) => {
           updateUserPassword(email)
          .then((res) => {
            console.log(res);
          if (result.isConfirmed) {
            Swal.fire({
              title: "OK, check Your Email, then change your password",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
          }
        });
      })
      .catch(error => {
        console.log(error);
      })
  }
  // console.log(user);
  // https://i.ibb.co/tpKtPW2/joanna-kosinska-9gf-GDbxuqr-U-unsplash.jpg 
  //https://i.ibb.co/4fj4851/200w.gif

  return (
    <div className=" w-full min-h-[calc(100vh-83px)] mt-10">
      <div className="bg-[url('https://i.ibb.co/4TNs2Xb/covoer-image.gif')]  relative bg-cover object-cover bg-no-repeat w-full h-[350px] md:h-[350px] lg:h-[45vh]">
        <div className="bg-black top-0 left-0 right-0 w-full h-full absolute opacity-10"></div>
        <figure className="absolute -bottom-16 w-32 h-32 left-[36%] md:left-[43%] lg:left-[45%]">
          <img alt="profile" src={user?.photo} className="mx-auto object-cover rounded-full w-full h-full border-4 border-first" />
          <h1 className="px-8 py-2 bg-first text-white rounded-full capitalize">{currenUserRole}</h1>
        </figure>
      </div>
      <div className="p-4 mt-20 ">
        <div className="w-[80%] mx-auto p-2 mt-4 rounded-lg">
          <div className="flex flex-wrap items-start pl-10 lg:pl-0 lg:items-center gap-3 flex-col md:flex-row lg:flex-row justify-around text-sm text-gray-600 dark:text-gray-400">
            <p className="flex flex-col">
              Name
              <span className="font-bold text-black dark:text-gray-300">{user?.name}</span>
            </p>
            <p className="flex flex-col">
              Email
              <span className="font-bold text-black dark:text-gray-300">{user?.email}</span>
            </p>

            <div>
              <Link to='/updated-profile'>
                <button className="bg-first px-6 py-1 rounded-lg text-white cursor-pointer hover:bg-second block mb-1">
                  Update Profile
                </button>
              </Link>
              <button onClick={handleChangePassword} className="bg-first px-6 py-1 rounded-lg text-white cursor-pointer hover:bg-second">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="bg-white shadow-lg rounded-2xl w-3/5 relative">
          <img alt="profile" src="https://i.ibb.co/tpKtPW2/joanna-kosinska-9gf-GDbxuqr-U-unsplash.jpg" className="w-full mb-4 rounded-t-lg h-36"
          />
        
        </div>
       
      </div> */}
    </div >
  );
};

export default UserProfile;
