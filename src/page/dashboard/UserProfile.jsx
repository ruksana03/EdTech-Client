import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.data.user.user);
  console.log(user);
// https://i.ibb.co/tpKtPW2/joanna-kosinska-9gf-GDbxuqr-U-unsplash.jpg 
//https://i.ibb.co/4fj4851/200w.gif
  return (
    <div className=" w-full min-h-[calc(100vh-83px)] mt-10">
      {/* <h1>Hellow Shuily</h1> */}
      <div className="bg-[url('https://i.ibb.co/4TNs2Xb/covoer-image.gif')]  relative bg-cover object-cover bg-no-repeat w-full h-[350px] md:h-[350px] lg:h-[45vh]">
        <div className="bg-black top-0 left-0 right-0 w-full h-full absolute opacity-10"></div>
        <figure className="absolute -bottom-16 w-32 h-32 left-[36%] md:left-[43%] lg:left-[45%]">
          <img alt="profile" src={user?.photo} className="mx-auto object-cover rounded-full w-full h-full border-4 border-first" />
        </figure>
      </div>
      <div className="p-4 mt-12 ">
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
              <button className="bg-first px-6 py-1 rounded-lg text-white cursor-pointer hover:bg-second block mb-1">
                Update Profile
              </button>
              <button className="bg-first px-6 py-1 rounded-lg text-white cursor-pointer hover:bg-second">
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
