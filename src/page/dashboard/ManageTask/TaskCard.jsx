/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { FaEdit, FaRegClock } from "react-icons/fa";
import EditeModal from "../Modal/EditeModal";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const TaskCard = ({ item, refetch, provided }) => {
  const axiosPublic = useAxiosPublic();
  const handleStatus = async (e) => {
    e.preventDefault();
    const status = {
      status: e.target.value,
    };
    const res = await axiosPublic.patch(`/status?id=${item._id}`, status);
    if (res.data.modifiedCount > 0) {
      toast.success("Updated successfully");
    }
    refetch();
  };
  // const handleDelete = async () => {
  //   const res = await axiosSecure.delete(`/delete?id=${item._id}`);
  //   console.log(res.data);
  //   if (res.data.deletedCount > 0) {
  //     toast.success("Deleted successfully");
  //   }
  //   refetch();
  // };

  const handleDelete = async () => {
    try {
      const res = await axiosPublic.delete(`/delete/${item._id}`);
      console.log("Delete response:", res.data);
      toast.success("Deleted successfully");
      refetch();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }


    const deadlineDate = new Date(item.deadline);

    // Format the date as "YYYY-MM-DD"
    const formattedDeadline = deadlineDate.toISOString().split('T')[0]


  return (
    <div className="">
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="mb-1  rounded-sm p-3 outline-2 outline-orange-500"
      >
        <div className="bg-slate-100 p-4 rounded-2xl">
          <h3 className="text-bold">{item.title}</h3>
          <p className="text-sm">{item.description}</p>
          <div className="flex justify-between pt-2">
            <span
              className={`px-1 rounded-md text-white ${item.priority === "low" && "bg-yellow-600"
                } ${item.priority === "moderate" && "bg-[#00B5FF]"} ${item.priority === "high" && "bg-red-500"
                }`}
            >
              {item.priority}
            </span>
            <span className="flex items-center gap-1">
              <FaRegClock />
              {formattedDeadline}
            </span>
          </div>
          <div className="flex justify-between pt-1 ">
            <button
              onClick={() => openModal()}
              className="text-xl"
              title="Delete Task"
            >
              <FaEdit />
            </button>
            <select
              onChange={handleStatus}
              className="rounded-lg outline-[#00B5FF]"
              name="status"
              id=""
              defaultValue={item.status}
            >
              <option disabled>Set Status</option>
              <option value="todo">Todo</option>
              <option value="progress">progress</option>
              <option value="completed">Completed</option>
            </select>

            <button onClick={handleDelete} className="text-xl" title="Delete Task">
              <MdDelete />
            </button>
          </div>
        </div>
        <EditeModal
          refetch={refetch}
          item={item}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default TaskCard;