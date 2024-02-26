import moment from "moment";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import './SRutine.css'


const SRutine = () => {
    const axiosPublic = useAxiosPublic();
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    const [currentEvent,setCurrentEvent] = useState(null)


    function closeModal() {
        setIsOpen(false)
    }

    function handleDeleteClick(data) {
        setIsOpen(true)
        const currentData = data.event._def.extendedProps;
        const findData = events.find(event => event._id=== currentData._id);
        // console.log(findData);
        setCurrentEvent(findData)
    }
    // console.log(currentEvent);
    async function handleDateSet(data) {
        const response = await axiosPublic.get('/rutines?start=' + moment(data.start).toISOString() + '&end=' + moment(data.end).toISOString())
        const forShowRutine = response?.data.filter(item => item?.forCourses==='programming');
        // setEvents(response.data)
        setEvents(forShowRutine)
    }
    return (
        <section className='w-full h-screen mx-auto p-5'>
            <div className='w-[90%] mx-auto flex items-center justify-between p-5 flex-col '>
                <div className='w-full'>
                    <div className='relative z-0 w-full text-white'>
                        <FullCalendar
                            ref={calendarRef}
                            events={events}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            datesSet={(date) => handleDateSet(date)}
                            height={'80vh'}
                            nowIndicator={true}
                            droppable={true}
                            eventClick={(data) => handleDeleteClick(data)}
                            headerToolbar={{
                                start: "today prev, next",
                                center: 'title',
                                end: "dayGridMonth,timeGridWeek,timeGridDay"
                            }}
                        />
                    </div>
                </div>
            </div>
            <>
              <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>
                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex items-center justify-center flex-col">
                                        <Dialog.Title as="h3" className="text-lg capitalize font-medium leading-6 text-gray-900">
                                           {currentEvent?.title}
                                        </Dialog.Title>
                                       <h1>Start Date : {currentEvent?.start?.slice(0,10)}</h1>
                                       <h1>End Date : {currentEvent?.end?.slice(0,10)}</h1>
                                       <h1>Meet Link : <a href={currentEvent?.liveLink} className='font-bold underline' target='_blank' rel='noopener noreferrer'>Click Here</a></h1>


                                        <div className="mt-4">
                                            <button type="button" className="px-5 py-2 bg-green-700 text-white hover:text-black rounded" onClick={closeModal}>
                                               Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </section>
    )
};

export default SRutine;