/* eslint-disable no-unused-vars */
import { Fragment, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment';
import './calendar.css'
import { Dialog, Transition } from '@headlessui/react'
import toast from 'react-hot-toast'
import AddEventModal from './AddEventModal'
import useAxiosPublic from '../../../../Hooks/useAxiosPublic'
import { useSelector } from 'react-redux'


export default function Calendar() {
    const axiosPublic = useAxiosPublic();
    const user = useSelector((state) => state.data.user.user);
    const calendarRef = useRef(null);
    let [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null)

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    const onEventAdded = async (event) => {
        await axiosPublic.post('/create-rutine', event)
        toast.success(`${event.title} created successfully`);
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
            forCourses: event.forCourses,
            teacherName: event.teacherName,
            teacherEmail: event.teacherEmail,
        liveLink: event.liveLink,
        })
    }
    async function handleEventAdd(data) {
        // console.log('which data going on database===>', data.envent?._def);

    }

    // delete method here 

    function handleDeleteClick(data) {
        const id = data?.event?.extendedProps?._id;
        if(id === undefined){
            return toast.error('something is wrong! please try later!')
        }
        setShowDeleteModal(true)
        setIdToDelete(id)
        const findData = events.find(event => event._id === id)
        setCurrentEvent(findData)
    }


    function handleDrop(data) {
        // console.log(data.oldEvent._def);
    }

    const handleDelete = async () => {
        if (idToDelete === undefined) {
            return toast.error('something is wrong! please try later')
        }
        const remaining = events.filter(event => event._id !== idToDelete);
        setEvents(remaining);
        await axiosPublic.delete(`/rutine-delete/${idToDelete}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success('deleted successfully')
                }
            })
        setShowDeleteModal(false)
    }

    async function handleDateSet(data) {
        const response = await axiosPublic.get('/rutines?start=' + moment(data.start).toISOString() + '&end=' + moment(data.end).toISOString())
       const findRoutine = response?.data?.filter(event=> event?.teacherEmail === user?.email )
        setEvents(findRoutine)
    }
    return (
        <section className='w-full h-screen mx-auto p-5'>
            <div className='flex items-center justify-center w-full'>
                <button type="button" onClick={openModal} className="px-5 py-2 btn-style hover:text-black rounded">
                    Create Routine
                </button>
            </div>
            <div className='w-[90%] mx-auto flex items-center justify-between p-5 flex-col '>
                <div className='w-full'>
                    <div className='relative z-0 w-full text-white'>
                        <FullCalendar
                            ref={calendarRef}
                            events={events}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            eventAdd={(event) => handleEventAdd(event)}
                            datesSet={(date) => handleDateSet(date)}
                            height={'80vh'}
                            editable={true}
                            nowIndicator={true}
                            droppable={true}
                            eventDrop={(data) => handleDrop(data)}
                            eventClick={(data) => handleDeleteClick(data)}

                            headerToolbar={{
                                start: "today prev, next",
                                center: 'title',
                                end: "dayGridMonth,timeGridWeek,timeGridDay"
                            }}
                        />
                    </div>
                </div>
                <AddEventModal isOpen={isOpen} closeModal={closeModal} onEventAdded={(event) => onEventAdded(event)} />
            </div>

            <Transition appear show={showDeleteModal} as={Fragment}>
                <Dialog as="div" className="relative" onClose={setShowDeleteModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-black text-white border border-white p-6 text-left align-middle shadow-xl transition-all ">
                                    <div className="space-y-5">
                                        <div className='space-y-1 text-xl p__cormorant'>
                                            <Dialog.Title as="h3" className="text-lg capitalize font-medium leading-6 text-gray-900">
                                                Title:  {currentEvent?.title}
                                            </Dialog.Title>
                                            <h1>Start Date : {currentEvent?.start?.slice(0, 10)}</h1>
                                            <h1>End Date : {currentEvent?.end?.slice(0, 10)}</h1>
                                            <h1>Meet Link : <a href={currentEvent?.liveLink} className='font-bold underline' target='_blank' rel='noopener noreferrer'>Click Here</a></h1>
                                            <h1 className='font-medium'>Courses Name : {currentEvent?.forCourses}</h1>
                                        </div>
                                        <hr />
                                        <div>
                                            <Dialog.Title as="h3" className=" text-xl p__cormorant leading-6 text-gray-900" >
                                                Delete Event!
                                            </Dialog.Title>
                                            <p className="text-sm ">
                                                Do You Want to Delete This Routine?
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-end gap-5 px-5 mt-5'>
                                        <button onClick={() => setShowDeleteModal(false)} className='px-5 py-2 btn-style hover:text-black rounded'>Cencel</button>
                                        <button onClick={handleDelete} className='px-5 py-2 bg-red-700 text-white hover:text-black rounded'>Delete</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </section>
    )
}

