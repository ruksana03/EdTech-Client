/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDelete } from 'react-icons/md';
import useUsers from '../../../../Hooks/useUsers';
import { deleteSingleUser, updateUserRole } from '../../../../api/users';
import toast from 'react-hot-toast';
import { useState } from 'react';

const AllUser = () => {
  // const { AllUsers, loading, refetch } = useUsers();
  const { AllUsers, refetch } = useUsers();

  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = async (user, role) => {
    try {
      // Assuming user is defined and contains user information
      if (!user || !user.email) {
        throw new Error("User information is missing.");
      }
  
      const data = await updateUserRole({ email: user.email, role });
      console.log(data);
      toast.success("Role updated");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error updating role");
    } finally {
      setIsOpen(false);
    }
  };

  const handleDelete = async (userToDelete) => {
    try {
      await toast.promise(
        deleteSingleUser(userToDelete._id),
        {
          loading: 'Deleting...',
          success: (res) => {
            if (res.deletedCount > 0) {
              refetch();
              return `${userToDelete.name} has been deleted`;
            } else {
              throw new Error(`Failed to delete ${userToDelete.name}`);
            }
          },
          error: (error) => `Error: ${error.message || 'Something went wrong'}`,
        }
      );
      refetch();
      toast.success("User Deleted Successfully");
      console.log('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting User:', error);
  
      // Show an error toast
      toast.error('Error deleting User. Please try again.');
    }
  };

  return (
    <div className='mt-16'>
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
            <tr  >
              <th className="py-3">#</th>
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Current Role</th>
              <th className="py-3">Change Role</th>
              <th className="py-3">Status</th>
              <th className="py-3">Delete</th>

            </tr>
          </thead>
          <tbody className="text-gray-700  ">
            {AllUsers?.map((user, index) => (
              <tr
                key={user._id}
                className='p__opensans'
              
              >
                <td className="py-3 font-bold">{index + 1}</td>
                <td className="py-3 font-bold">{user.name}</td>
                <td className="py-3 font-bold">{user.email}</td>
                <td className="py-3 font-bold cursor-pointer">{user.role}</td>
                <td className="py-3 text-red-500 font-bold cursor-pointer">
                <button
                    onClick={() => setIsOpen(true)}
                    className='relative btn-style rounded-md text-white'
                    disabled={user?.role == 'Admin'}
                >
                    {user?.role !== 'Admin' && (
                        <button>Update Role</button>
                    )}
                </button>
                </td>
                <td>Status</td>
                <td>
                  <button onClick={() => handleDelete(user)}>
                    <MdDelete className="text-xl" />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
// import { MdDelete } from 'react-icons/md';
// import useUsers from '../../../../Hooks/useUsers';

// const AllUser = () => {
//     const { AllUsers, loading } = useUsers();


//     console.log("AllUsers:", AllUsers);
//     console.log("loading:", loading);

//     const teachers = AllUsers.filter((user) => user.role === "teacher");
//     const students = AllUsers.filter((user) => user.role === "student");
//     const admins = AllUsers.filter((user) => user.role === "admin");
//     const normalUsers = AllUsers.filter((user) => user.role === "normalUser");


//     console.log("Teachers:", teachers);
//     console.log("Students:", students);
//     console.log("Admins:", admins);
//     console.log("Normal Users:", normalUsers);

//     const renderTable = (users, title) => (
//         <div className="p-4 bg-white border rounded-md">
//             <h2 className="bg-blue-500 text-white py-2 px-4 mb-4">{title}</h2>

//             {users.map((user) => (
//                 <div key={user._id} className="border border-black p-2 my-2">
//                     <div className="flex justify-start items-center gap-4">
//                         <img src={user.photo} alt={user.name} className="w-10 h-10 object-cover rounded-full" />
//                         <p className="py-2 ">{user.role}</p>
//                     </div>
//                     <h1 className="py-2 ">{user.name}</h1>
//                     <p className="py-2 ">{user.email}</p>
//                     <div className="flex gap-5">
//                         <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white"><AiFillDelete/></button>
//                         <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white"><GrDocumentUpdate/></button>
//                         <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white"><HiViewfinderCircle/></button>
//                     </div>
//                 </div>
//             ))}

//         </div>
//     );

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//             {renderTable(teachers, "Teachers")}
//             {renderTable(students, "Students")}
//             {renderTable(admins, "Admins")}
//             {renderTable(normalUsers, "Normal Users")}
//         </div>
//     );
// };

// export default AllUser;