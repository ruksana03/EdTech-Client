// Import necessary libraries
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

// Define the Subscriber component
const Subscriber = () => {
  // Initialize state variables
  const axiosPublic = useAxiosPublic();
  const [message, setMessage] = useState("");

  // Fetch subscribers data using useQuery
  const { data: subscribers = [], refetch } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/subscribers");
      return res.data;
    },
  });

  // Function to send message to subscribers
  const sendMessageToSubscribers = async () => {
    try {
      await axiosPublic.post("/send-message-to-subscribers", { message });
      toast.success("Message sent successfully");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  const deleteSubscriber = async (id) => {
    try {
      const { data } = await axiosPublic.delete(`/subscribers/delete/${id}`);

      if (data.deletedCount === 1) {
        await refetch();
        toast.success("Subscriber deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting Subscriber:", error);
      toast.error("Failed to delete Subscriber");
    }
  };

  // Return JSX for the Subscriber component
  return (
    <div>
      <h2 className="text-3xl mb-6 mt-3 p__cormorant text-center">
        <button
          className="btn-style"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Want to send a message
        </button>
      </h2>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-6 bg-white rounded-lg shadow-xl w-80">
          {/* Styled textarea */}
          <textarea
            className="textarea-style w-full h-24 px-3 py-2 mb-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-first"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
          <br />
          <button className="btn-style mx-auto w-full bg-first" onClick={sendMessageToSubscribers}>
            Send Message
          </button>
        </div>
        {/* Close button */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Table of subscribers */}
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          <thead className="bg-gradient-to-r from-second to-first text-white text-center font-alt text-xl">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Email</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {subscribers.map((subscriber, index) => (
              <tr key={subscriber._id} className="p__opensans">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{subscriber.email}</td>
                <td className="py-2 text-red-500 font-semibold cursor-pointer">
                  <button onClick={() => deleteSubscriber(subscriber._id)}>
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        subscribers?.length <= 0 && <Skeleton count={5 || subscribers?.length} height={30} borderRadius={10} />
      }
    </div>
  );
};

// Export the Subscriber component
export default Subscriber;

