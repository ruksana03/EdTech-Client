import { MdDeleteForever } from 'react-icons/md';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const AllCourses = () => {
  const [classData, setClassData] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosPublic.get('/courses');
        console.log(data);
        setClassData(data);
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse border border-gray-300">
        {/* head */}
        <thead className="bg-gray-800 text-white text-sm">
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">Title</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Action</th>
            <th className="py-2">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {classData.map((classItem, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-3 font-medium">{index + 1}</td>
              <td className="py-3 font-medium">{classItem.title}</td>
              <td className="py-3 font-medium">{classItem.name}</td>
              <td className="py-3 font-medium">{classItem.email}</td>
              <td className="py-3">
                <button className="btn btn-xs bg-first text-white rounded-2xl hover:text-first hover:bg-white font-medium">Approved</button>
              </td>
              <td className="py-3 font-medium">
                <button  >
                  <MdDeleteForever className=' bg-red-500  text-white text-xl rounded-2xl' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCourses;