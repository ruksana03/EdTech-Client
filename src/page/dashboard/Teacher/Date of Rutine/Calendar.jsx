import { Fragment, useEffect, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import moment from 'moment';
import './calendar.css'
import { Dialog, Transition } from '@headlessui/react'
import toast from 'react-hot-toast'
import AddEventModal from './AddEventModal'
import useAxiosPublic from '../../../../Hooks/useAxiosPublic'


export default function Calendar() {
    // const [modalOpen, setModalOpen] = useState(false);
    const axiosPublic = useAxiosPublic();
    const calendarRef = useRef(null);
    let [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [idToDelete, setIdToDelete] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    function openModal() {
        setIsOpen(true)
    }
    // console.log(allEvents);
    function closeModal() {
        setIsOpen(false)
    }
    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi()
        // console.log(calendarApi);
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        })
    }

    async function handleEventAdd(data) {
        await axiosPublic.post('/create-rutine', data.event)
    }



    // delete method here 

    function handleDeleteClick(data) {
        setShowDeleteModal(true)
        const id = data.event._def.extendedProps;
        setIdToDelete(id)
    }


    function handleDrop(data) {
        console.log(data.oldEvent._def);
    }

    const handleDelete = async () => {
       if(idToDelete._id ===undefined){
       return toast.error('something is wrong! please try later')
       }
       const remaining = events.filter(event => event._id !== idToDelete._id);
       setEvents(remaining);
       await axiosPublic.delete(`/rutine-delete/${idToDelete._id}`)
           .then(res => {
               if (res.data.deletedCount > 0) {
                   toast.success('deleted successfully')
               }
           })
        setShowDeleteModal(false)
    }

    async function handleDateSet(data) {
        const response = await axiosPublic.get('/rutines?start=' + moment(data.start).toISOString() + '&end=' + moment(data.end).toISOString())
        setEvents(response.data)
    }
    return (
        <section className='w-full h-screen mx-auto p-5'>
            <div className='flex items-center justify-center w-full'>
                <button type="button" onClick={openModal} className="px-5 py-2 bg-green-700 text-white hover:text-black rounded">
                    Create Rutine
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
                            // dateClick={handleDeleteModal}
                            // dateClick={handleDeleteModal}

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
                                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900" >
                                        Delete Event!
                                    </Dialog.Title>
                                    <p className="text-sm">
                                        Do You Want to Delete This Event?
                                    </p>

                                    <div className='flex items-center justify-end gap-5 px-5 mt-5'>
                                        <button onClick={() => setShowDeleteModal(false)} className='px-5 py-2 bg-green-700 text-white hover:text-black rounded'>Cencel</button>
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

