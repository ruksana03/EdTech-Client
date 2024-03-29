/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ isOpen, setIsOpen, title, children }) => {
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 " onClose={()=>setIsOpen(true)}>
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
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden border border-white rounded-2xl bg-[#0B0807] p-6  text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className=" leading-1 headtext__cormorant text-center  "
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2 ">
                                        {children}
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

export default Modal;