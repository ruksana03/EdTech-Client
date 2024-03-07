/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";

const CreateTaskModal = ({ isOpen, closeModal, refetch }) => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const user = useSelector(state => state.data.user.user);

    const onSubmit = async (data) => {
        const updatedData = {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: data.deadline,
            email: user?.email,
            status: "todo",
        };

        const { data: res } = await axiosPublic.post("/task", updatedData);
        toast.success("Task Added Successfully");
        refetch()
    };

    const handleCloseModal = () => {
        closeModal();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="headtext__cormorant"
                                    >
                                        Add Task
                                    </Dialog.Title>
                                    <div className="mt-2 p__cormorant">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                {...register("title")}
                                                className="py-2 bg-transparent text-xl transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0"
                                                type="text"
                                                placeholder="Title"
                                                name="title"
                                                required
                                            />
                                              <hr className="border-t border-first mb-4" />
                                            <textarea
                                                {...register("description")}
                                                required
                                                className="py-2 bg-transparent text-xl transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0"
                                                placeholder="Description"
                                                name="description"
                                            ></textarea>
                                              <hr className="border-t border-first" />
                                            <br />
                                            <label className="text-orange-500 ">Priority: </label>
                                            <select
                                                {...register("priority")}
                                                required
                                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-white font-bold border-none outline-none focus:ring-0 "
                                                name="priority"
                                            >
                                                <option className="text-black font-bold " disabled>Set Status</option>
                                                <option className="text-black font-bold " value="low">Low</option>
                                                <option className="text-black font-bold " value="moderate">Moderate</option>
                                                <option className="text-black font-bold " value="high">High</option>
                                            </select>
                                            <hr className="border-t border-first mb-4" />

                                            <label className="text-orange-500 pl-1 ">Deadline:</label>
                                            <input
                                                required
                                                {...register("deadline")}
                                                className="py-2 bg-white transition-colors peer w-full pl-3 font-poppins text-black font-bold border-none outline-none focus:ring-0"
                                                type="date"
                                                name="deadline"
                                            />
                                            <br />
                                            <div className="flex justify-between mt-4">
                                           <button
                                                type="submit"
                                                className="btn-style"
                                            >
                                                Add Task
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCloseModal}
                                                className="mt-4 ml-2 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                            >
                                                Close
                                            </button>
                                           </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};


export default CreateTaskModal;