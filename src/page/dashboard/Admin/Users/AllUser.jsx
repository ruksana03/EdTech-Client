import { MdDelete } from 'react-icons/md';
import useUsers from '../../../../Hooks/useUsers';

const AllUser = () => {
  const { AllUsers } = useUsers();

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse border border-gray-300">
        {/* head */}
        <thead className="bg-gray-800 text-white">
          <tr  >
            <th className="py-3">#</th>
            <th className="py-3">Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">Role</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700  ">
          {AllUsers?.map((user, index) => (
            <tr
              key={user._id}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-3 font-bold">{index + 1}</td>
              <td className="py-3 font-bold">{user.name}</td>
              <td className="py-3 font-bold">{user.email}</td>
              <td className="py-3 font-bold cursor-pointer">{user.role}</td>
              <td className="py-3 text-red-500 font-bold cursor-pointer">
                <MdDelete className="text-xl" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
