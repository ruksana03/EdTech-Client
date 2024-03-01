/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import image1 from '../../assets/image/loader/Animation - joint-teacher.json'
import image2 from '../../assets/image/loader/partner.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';


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
                        <div className="flex min-h-screen items-center justify-center text-center w-[80%] mx-auto pb-2">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="p__cormorant transform overflow-hidden rounded-2xl relative w-[80%] z-50  mx-auto px-6 mb-4 pt-4 text-left align-middle shadow-xl transition-all duration-200 bg-gradient-to-r from-second to-first">
                                    <div className=''>
                                        <button className='bg-second rounded-full'>
                                            < RxCross1 onClick={closeModal} className='text-5xl font-bold text-white p-2 border-2 border-white rounded-full' />
                                        </button>
                                    </div>
                                    <div className='w-full grid grid-cols-1 pb-4 text-black md:grid-cols-2 lg:grid-cols-2 gap-5 px-2'>
                                        <div className='bg-white flex items-center justify-center flex-col rounded  text-base'>
                                            <h1 className='headtext__cormorant'>Hey👋</h1>
                                            <p className=''>Do You Want to Learn any Course?</p>
                                            <p className=''>Please Buy Your Favorite Course Here</p>
                                            <p className=''>Course Buy Last Date: <span className=''>25-02-2024</span></p>
                                            <div className='h-40'>
                                                <Lottie animationData={image1} className=' w-full h-full' ></Lottie>
                                            </div>
                                            <Link to='/all-courses'><button className='btn-style'>Confirm Me</button></Link>
                                        </div>
                                        <div className='bg-black text-white flex items-center text-base justify-center flex-col rounded'>
                                            <h1 className='headtext__cormorant'>Owwo🤟</h1>
                                            <p className=''>Do You Want to be A Partner?</p>
                                            <p className=''>Please Contact Here</p>
                                            <p className=''>Course Buy Last Date: <span className=''>03-03-2024</span></p>
                                            <div className='h-40'>
                                                <Lottie animationData={image2} className='w-full h-full' ></Lottie>
                                            </div>
                                            <Link to='/partner'><button className='btn-style'>Confirm Us</button></Link>
                                        </div>
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