 
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { MdDelete } from 'react-icons/md';
 

const Subscriber = () => {
  const axiosPublic = useAxiosPublic();
  
  const { data: subscribers = [] } = useQuery({
    queryKey: ['subscribers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/subscribers');
      return res.data;
    },
  });

//   const deletePayment = async (id) => {
//     try {
//       const { data } = await axiosPublic.delete(`/bookings/delete/${id}`);

//       if (data.deletedCount === 1) {
//         await refetch();  
//         toast.success("payment deleted successfully");
//       }
//     } catch (error) {
//       console.error("Error deleting payment:", error);
//       toast.error("Failed to delete payment");
//     }
//   };

  return (
    <div>
      <h2 className="text-3xl mb-6 mt-3 p__cormorant text-center">
        <button className='btn-style'>Want to send a message ?</button>
        </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white text-center font-alt text-xl">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Email</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {subscribers?.map((subscriber, index) => (
              <tr
                key={subscriber._id}
                className='p__opensans'
              >
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{subscriber.email}</td>
                
                <td className="py-2 text-red-500 font-semibold cursor-pointer">
                  <button  >
                  <MdDelete  className='text-xl'/>
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

export default Subscriber;
