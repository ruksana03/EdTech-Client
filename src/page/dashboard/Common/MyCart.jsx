import { MdDelete } from "react-icons/md";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const MyCart = () => {
  const axiosPublic = useAxiosPublic();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalFixedPrice = totalPrice.toFixed(2);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl mb-3 mt-3 p__cormorant text-center">
        Total Saved Courses: {cart?.length}
      </h2>
      <h2 className="text-3xl mb-3 p__cormorant text-center">
        Total Price:$ {totalFixedPrice}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white font-alt text-xl">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">Instructer</th>
              <th className="py-2">Price</th>
              <th className="py-2">Action</th>

              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cart?.map((item, index) => (
              <tr key={item._id} className="p__opensans">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.title}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">${item.price}</td>
                <td className="py-2">
                  <Link to={`/details/${item.menuId}`}>
                    <button className="btn-style">Pay</button>
                  </Link>
                </td>

                <td className="py-2 text-red-500 font-semibold cursor-pointer">
                  <button onClick={() => handleDelete(item._id)}>
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        cart?.length <= 0 && <Skeleton count={10 || cart?.length} height={30} borderRadius={10} />
      }
    </div>
  );
};

export default MyCart;
