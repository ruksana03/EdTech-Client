import useStudentRoutine from "../../../../Hooks/useStudentRoutine";
import { useEffect, useState } from "react";
import SRoutine from "./SRoutine";

const RoutineHome = () => {
    const [events, refetch] = useStudentRoutine();
    const [firstRoutine, setFirstRoutine] = useState('');
    const [trueRoutine, setTrueRoutine] = useState(true);
    refetch();
    const [currentRoutine, setCurrentRoutine] = useState([]);
    const handleClick = (data) => {
        setFirstRoutine(data)
        const findData = events.filter(item => item?.forCourses === data);
        setCurrentRoutine(findData);
        setTrueRoutine(false);
    }
    const currentFindData = events?.filter(item => item?.forCourses === firstRoutine);
    useEffect(() => {
        const newRoutine = events?.find(item => setFirstRoutine(item?.forCourses));
        return newRoutine
    }, [events])

    return (
        <div>
            {
                events?.length === 0 && <><h1>There was no routine</h1></>
            }  <div className='flex items-center justify-center flex-col md:flex-wrap lg:flex-row gap-5 w-full'>
                {
                    events?.length >= 2 ? events?.map(routine => <div key={routine?._id}>
                        <button onClick={() => handleClick(routine?.forCourses)} className='text-first text-2xl active:border-b-2 active:border-b-white font-serif'>{routine?.forCourses}</button>
                    </div>) : events?.length <= 0 ? <SRoutine events={events} /> : ''
                }
            </div>
            {
                events?.length >= 2 && <>
                    <div className="flex items-center justify-start flex-col space-y-2 mt-5 w-[300px] mx-auto shadow-2xl p-3 bg-zinc-700">
                        <h1 className="text-xl text-first">Active Routine</h1>
                        <button className="text-black bg-white text-2xl px-5 cursor-text font-serif">{firstRoutine}</button>
                    </div>
                </>
            }

            <div>
                {
                    (trueRoutine === true && currentFindData?.length > 0) ? <SRoutine events={currentFindData} /> : events?.length >= 2 && <SRoutine events={currentRoutine} />
                }
            </div>
        </div>
    );
};

export default RoutineHome;