/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDelete } from 'react-icons/md';
import useUsers from '../../../../Hooks/useUsers';
import { deleteSingleUser } from '../../../../api/users';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import RoleModal from './RoleModal';
import Skeleton from 'react-loading-skeleton';

const AllUser = () => {
  const { AllUsers, refetch, isLoading } = useUsers();
  const [userToChangeRole, setUserToChangeRole] = useState(null);

  const handleUserRole = (user) => {
    setUserToChangeRole(user);
    document.getElementById('user_role_modal').showModal();
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
                <td className="py-3 font-bold lowercase">{user.email}</td>
                <td className="py-3 font-bold cursor-pointer">{user.role}</td>
                <td>
                  <button onClick={() => handleUserRole(user)}><FaEdit className="text-xl"></FaEdit></button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user)}>
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
          AllUsers?.length <= 0 &&  <Skeleton count={23} height={30} borderRadius={10} />
        }
       
      </div>
      <RoleModal userToChangeRole={userToChangeRole} refetch={refetch}></RoleModal>
    </div>
  );
};

export default AllUser;
