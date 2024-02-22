import { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const SRutine = () => {
    const axiosPublic = useAxiosPublic();
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    async function handleDateSet(data) {
        const response = await axiosPublic.get('/rutines?start=' + moment(data.start).toISOString() + '&end=' + moment(data.end).toISOString())
        setEvents(response.data)
    }
    return (
        <div className="mt-10">
            <section className='w-full h-auto mx-auto p-5'>
                {/* <div className='flex items-center justify-center w-full'>
                    <button type="button" onClick={openModal} className="px-5 py-2 bg-green-700 text-white hover:text-black rounded">
                        Create Rutine
                    </button>
                </div> */}
                <div className='w-[90%] mx-auto flex items-center justify-between p-5 flex-col '>
                    <div className='w-full'>
                        <div className='relative z-0 w-full text-white'>
                            <FullCalendar
                                ref={calendarRef}
                                events={events}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                // eventAdd={(event) => handleEventAdd(event)}
                                datesSet={(date) => handleDateSet(date)}
                                height={'80vh'}
                                // editable={true}
                                // nowIndicator={true}
                                // droppable={true}
                                // eventDrop={(data) => handleDrop(data)}
                                // eventClick={(data) => handleDeleteClick(data)}
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
                    {/* <AddEventModal isOpen={isOpen} closeModal={closeModal} onEventAdded={(event) => onEventAdded(event)} /> */}
                </div>
            </section>
        </div>
    );
};

export default SRutine;