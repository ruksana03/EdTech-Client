 
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';

const AllPaymentInfo = () => {
  const axiosPublic = useAxiosPublic();
  
  const { data: payments = [], refetch } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosPublic.get('/bookings');
      return res.data;
    },
  });

  const deletePayment = async (id) => {
    try {
      const { data } = await axiosPublic.delete(`/bookings/delete/${id}`);

      if (data.deletedCount === 1) {
        await refetch();  
        toast.success("payment deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
      toast.error("Failed to delete payment");
    }
  };

  return (
    <div>
      <h2 className="text-3xl mb-6 mt-3 text-center">Total Payments: {payments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Email</th>
              <th className="py-2">Price</th>
              <th className="py-2">Transaction Id</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {payments?.map((payment, index) => (
              <tr
                key={payment._id}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'  }
              >
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{payment.stEmail}</td>
                <td className="py-2">${payment.price}</td>
                <td className="py-2 ">{payment.transactionId}</td>
                <td className="py-2 text-red-500 font-semibold cursor-pointer">
                  <button onClick={() => deletePayment(payment._id)} >
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

export default AllPaymentInfo;
