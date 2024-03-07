import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RecordedClass = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.data.user.user);

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:5000/bookings?stEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) =>
          console.error("Error fetching enrolled courses:", error)
        );
    }
  }, [user]);

  return (
    <div className='flex mt-20 flex-col lg:flex-row gap-4'>
      {data.length === 0 ? (
        <p className='text-gray-200'>No content uploaded yet.</p>
      ) : (
        data.map((item) => (
          <Link key={item.id} to={item.title}>
            <div key={item.id} className="card w-52 h-52 bg-base-100 col-span-1 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={item.courseImage} alt="Course" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecordedClass;
