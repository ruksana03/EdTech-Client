import { useEffect, useState } from "react";
import MyenrollCard from "./MyenrollCard";
import { useSelector } from "react-redux";
 

const Myenroll = () => {
  const user = useSelector((state) => state.data.user.user);
  const [enrolls, setEnrolls] = useState([]);
  console.log("its enroll",enrolls);

  useEffect(() => {
    // Check if user is defined before making the API call
    if (user && user.email) {
      fetch(`http://localhost:5000/bookings?stEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setEnrolls(data))
        .catch((error) =>
          console.error("Error fetching enrolled courses:", error)
        );
    }
  }, [user]);

  return (
    <div>
      <div>
        <h2 className="  headtext__cormorant text-center   mt-12">
          My Courses
        </h2>
      </div>
      {enrolls.length === 0 ? (
        <p className="flex items-center justify-center min-h-[65vh] p__cormorant font-bold">
          You have not enrolled in any courses yet
        </p>
      ) : (
        <div>
          

          <div className="gird grid-cols-1 mt-12 gap-5">
            {enrolls?.map((enroll) => (
              <MyenrollCard key={enroll._id} enroll={enroll}></MyenrollCard>
            ))}
          </div>
        </div>

      )}
    </div>
  );
};

export default Myenroll;
