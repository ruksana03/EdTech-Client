import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.data.user.user);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src="https://i.ibb.co/tpKtPW2/joanna-kosinska-9gf-GDbxuqr-U-unsplash.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4  ">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photo}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">{user?.name}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
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
      </div>
    </div>
  );
};

export default UserProfile;