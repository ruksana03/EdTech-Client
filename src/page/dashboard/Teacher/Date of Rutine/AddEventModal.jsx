/* eslint-disable react/prop-types */
import { useState } from 'react';
// import Modal from 'react-modal';
import Datetime from 'react-datetime';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function AddEventModal({ isOpen, closeModal, onEventAdded }) {
    const user = useSelector((state) => state.data.user.user);
    // console.log(user.name);
    const [title, setTitle] = useState('');
    const [forCourses, setForCourses] = useState('');
    const [start, setStart] = useState(new Date());
    const [liveLink, setLiveLink] = useState('');
    const [end, setEnd] = useState(new Date());
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const item = async () => {
            try {
                const res = await fetch("http://localhost:5000/courses");
                const data = await res.json();
                //    console.log(data);
                setCourses(data);
            } catch (error) {
                console.log(error);
            }
        };
        item();
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        if (title === '') {
            return toast.error('Please enter a title!')
        }
        onEventAdded({
            teacherName: user?.name,
            teacherEmail: user?.email,
            title,
            start,
            end,
            forCourses,
            liveLink
        })

        closeModal();
    }
    return (
        <>
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
                                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-base ">

                                    <form onSubmit={onSubmit} className='space-y-5'>
                                        <div>
                                            <label className='font-bold'>Write Rutine Title</label>
                                            <div>
                                                <input type='text' placeholder='Title....' onChange={() => setTitle(event.target.value)} className='w-full mt-2' />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-bold" htmlFor="description">Selected Your Courses*</label>
                                            <div>
                                                <select className="w-full mt-2" name="forCourses" onChange={() => setForCourses(event.target.value)} required>
                                                    <option disabled selected>set course</option>
                                                    {courses?.map(noti => <option key={noti?._id} defaultValue="Selected for Courses">
                                                        {noti?.category}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                       <div>
                                            <label className="font-bold" htmlFor="description">Provide Your Link(if any) *</label>
                                            <div>
                                                <input type='url' placeholder='provide link....' onChange={() => setLiveLink(event.target.value)} className='w-full mt-2' />
                                            </div>
                                        </div>
                                        <div>
                                            <label className='font-bold'>Start Date</label>
                                            <Datetime value={start} onChange={date => setStart(date)} className='w-full mt-2' />
                                        </div>
                                        <div>
                                            <label className='font-bold'>End Date</label>
                                            <Datetime value={end} onChange={date => setEnd(date)} className='w-full mt-2' />
                                        </div>
                                        <button className='px-5 py-2 bg-green-700 text-white hover:text-black w-full rounded'>Published</button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}