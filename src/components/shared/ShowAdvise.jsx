/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import image1 from '../../assets/image/loader/Animation - joint-teacher.json'
import image2 from '../../assets/image/loader/partner.json'
import Lottie from 'lottie-react';


const ShowAdvise = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 10000)
    }, [])

    return (
        <div className='relative'>
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center w-[80%] h-[60vh] mx-auto">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" transform overflow-hidden rounded-2xl relative z-[100] bg-transparent w-[80%] h-[60vh] mx-auto p-6 text-left align-middle shadow-xl transition-all duration-200 bg-white ">
                                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-col rounded p-6 '>
                                            <h1 className='text-xl font-bold'>Hey👋</h1>
                                            <p className='text-xl font-semibold'>Do You Want to Learn any Course?</p>
                                            <p className='text-xl font-semibold'>Please Buy Your Favorite Course Here</p>
                                            <p className='text-xl font-semibold'>Course Buy Last Date: <span className='text-gray-700 font-bold'>25-02-2024</span></p>
                                            <div className='h-72'>
                                                <Lottie animationData={image1} className='w-full h-full' ></Lottie>
                                            </div>
                                            <button className='btn-style mt-4'>Confirm Me</button>
                                        </div>
                                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-col rounded p-6'>
                                            <h1 className='text-xl font-bold'>Owwo🤟</h1>
                                            <p className='text-xl font-semibold'>Do You Want to be A Partner?</p>
                                            <p className='text-xl font-semibold'>Please Contact Here</p>
                                            <p className='text-xl font-semibold'>Course Buy Last Date: <span className='text-gray-700 font-bold'>03-03-2024</span></p>
                                            <div className='h-72'>
                                                <Lottie animationData={image2} className='w-full h-full' ></Lottie>
                                            </div>
                                            <button className='btn-style mt-4'>Confirm Us</button>
                                        </div>
                                    </div>
                                    <div className=' w-full h-full'>
                                        <button className='absolute top-0 -right-1'>
                                            < RxCross1 onClick={closeModal} className='text-5xl font-bold text-white bg-black p-3 scale-125 rounded-full' />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div >
    );
};

export default ShowAdvise;