/* eslint-disable no-unused-vars */

import './certificate.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import PDF from './pdf/PDF';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import Feedback from '../feedback/Feedback';

const Certificate = () => {
    const user = useSelector(state => state.data.user.user);
    const isComplete = 'successfull';
    let [isOpen, setIsOpen] = useState(false);
    const [name,setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsOpen(false)
        toast.success('your information has been saved')
    }
    function closeModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className='my-20 p-5'>
                <div className='flex items-center justify-center gap-5'>
                    {
                        isComplete === 'successfull' ? <>
                            <PDFDownloadLink document={<PDF anotherName={user?.name} />} fileName='certificate.pdf'>
                                {
                                    (({ loading }) => loading ? <button>Loading....</button> : user?.name && <button className=' btn-style'>Download pdf Now</button>)
                                }
                            </PDFDownloadLink>
                            <Link to='/dashboard/certifications/show'> <button className='btn-style'>Show Your Certificate</button></Link>
                        </> : <>
                            <button className='btn-style cursor-not-allowed tooltip tooltip-bottom' data-tip="No Certificate Avaiable!">Download pdf Now</button>
                            <button className='btn-style cursor-not-allowed tooltip tooltip-bottom' data-tip="No Certificate Avaiable!">Show Your Certificate</button>
                        </>
                    }
                </div>
                <div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative" onClose={closeModal}>
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
                                        <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-black text-white border border-white p-6 text-left align-middle shadow-xl transition-all text-base ">
                                            <form onSubmit={handleSubmit} className='space-y-5'>
                                                <div className="flex flex-col gap-3 text-white">
                                                    <label className="text-xl font-bold" htmlFor="description">Please Give Your Certificate Name*</label>
                                                    <input  className=" appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:border-first bg-black" name='title' type="text" placeholder='Enter Your Title....' onChange={()=> setName(event.target.value)} required />
                                                </div>
                                                <button className='px-5 py-2 bg-green-700 text-white hover:text-black w-full rounded'>Submit</button>
                                            </form>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
                <Feedback />
            </div>
        </>
    );
};

export default Certificate;