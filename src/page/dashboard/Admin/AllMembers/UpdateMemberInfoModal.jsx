/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const UpdateMemberInfoModal = ({ isOpen, setIsOpen, editData }) => {
    // const { address, designation, email, gender, joinDate, memberName, phoneNumber, portfolio, profilePicture } = editData || {};
    console.log(editData);
    function closeModal() {
        setIsOpen(false)
    }

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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-white border border-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="">
                                        <label className="block font-bold text-start mb-1 md:mb-0 pr-4 p__cormorant">
                                            Your Name
                                        </label>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus eveniet, corrupti natus aperiam, labore repudiandae ducimus a vero quia beatae tempora voluptate iste fugiat atque laudantium accusamus voluptatibus blanditiis iure amet? Fuga doloribus ex tempora ratione doloremque obcaecati. Unde iure, repellendus illo qui non sit impedit. Consequatur veniam mollitia nobis magni? Dolores nam modi doloremque dicta quis pariatur necessitatibus quasi eaque voluptas dignissimos, earum cum rerum obcaecati cumque, sed libero ex? Delectus, labore consequatur. Ipsum voluptatem doloremque laudantium eveniet nostrum? Sint debitis cumque quod atque dolor nemo! Quo harum eum quod nisi error possimus, dolorem adipisci et eligendi recusandae?</p>
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

export default UpdateMemberInfoModal;


