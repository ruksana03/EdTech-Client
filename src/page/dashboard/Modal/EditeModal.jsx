/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useSelector } from 'react-redux';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const EditModal = ({ isOpen, closeModal, item, refetch }) => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const user = useSelector(state => state.data.user.user);

    const onSubmit = async data => {
        const { data: res } = await axiosPublic.post('/update', report);
        if (res.insertedId) {
            toast.success('Report Submitted Successfully');
            closeModal();
        }
    };
    const handleUpdate = async e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const priority = e.target.priority.value;
        const deadline = e.target.deadline.value;
        const data = {
            title,
            description,
            priority,
            deadline,
            email: user.email,
            status: "todo",
        };
        const res = await axiosPublic.put(`/update/${item._id}`, data);
        toast.success('Updated successfully');
        refetch();
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="headtext__cormorant"
                                    >
                                        Edit Task
                                    </Dialog.Title>
                                    <div className="mt-2 p__cormorant">
                                        <form onSubmit={handleUpdate}>
                                            <input
                                                className="py-2 bg-transparent text-xl transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0"
                                                defaultValue={item.title}
                                                type="text"
                                                placeholder="Title"
                                                name="title"
                                            />
                                              <hr className="border-t border-first mb-4" />
                                           
                                            <textarea
                                                 className="py-2 bg-transparent text-xl transition-colors peer w-full pl-3 font-poppins  border-none outline-none focus:ring-0"
                                                defaultValue={item.description}
                                                placeholder="Description"
                                                name="description"
                                            ></textarea>
                                            <hr className="border-t border-first" />
                                            <br />
                                            <label className="text-orange-500 ">Priority: </label>
                                            <select
                                              className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-white font-bold border-none outline-none focus:ring-0 "
                                                name="priority"
                                                defaultValue={item.priority}
                                            >
                                                <option className="text-black font-bold " disabled>Set Status</option>
                                                <option className="text-black font-bold " value="low">Low</option>
                                                <option className="text-black font-bold " value="moderate">Moderate</option>
                                                <option className="text-black font-bold " value="high">High</option>
                                            </select>
                                            <hr className="border-t border-first mb-4" />

                                            <label className="text-orange-500 pl-1 ">Deadline:</label>
                                            <input
                                                 className="py-2 bg-white transition-colors peer w-full pl-3 font-poppins text-black font-bold border-none outline-none focus:ring-0"
                                                type="date"
                                                name="deadline"
                                                defaultValue={item.deadline}
                                            />
                                            <br />
                                            <button
                                                type="submit"
                                                className="btn-style"
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleCloseModal}
                                                className="mt-4 ml-2 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                            >
                                                Close
                                            </button>
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

export default EditModal;