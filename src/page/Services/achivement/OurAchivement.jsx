import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { MdOutlineHotelClass } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { GiRevolt } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

const OurAchivement = () => {
    const [course,setCourse] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/courses");
                const data = await res.json();
                //    console.log(data);
                setCourse(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="section-container">
            <div className="flex items-center flex-col lg:flex-row justify-center gap-5">
                <div className="w-full lg:w-1/2 h-full lg:h-[500px]">
                    <img src="https://i.ibb.co/r47H5NB/achivements.jpg" className="opacity-55 hover:opacity-90 transition ease-in-out rounded cursor-pointer w-full h-full" alt="achivements-image" />
                </div>
                <div className="text-white w-full lg:w-1/2 h-auto font-serif">
                    <h2 className="text-3xl "> Our Achivements</h2>
                    <p> {`Welcome to Innovated Education! We offer top-notch educational services tailored to your needs. Our passionate educators inspire learning and critical thinking, both in-person and online. Partner with us for customized solutions and celebrate success with our proven track record. Join us as we reshape education through innovation.`} </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8">
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 hover:bg-gradient-to-b from-first to-blue-second cursor-pointer p-5">
                            <div className="bg-first text-black w-12 h-12 rounded-full flex items-center justify-center">
                            <MdOutlineHotelClass className='text-4xl' />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"><CountUp delay={1} end={course?.length} />+</h1>
                                <p className="text-[18px] ">Running Course</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 hover:bg-gradient-to-b from-first to-blue-second cursor-pointer p-5">
                            <div className="bg-first text-black w-12 h-12 rounded-full flex items-center justify-center">
                              <RiLiveFill className='text-4xl' />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"><CountUp delay={1} end={876} />+</h1>
                                <p className="text-[18px] ">Live Class</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 hover:bg-gradient-to-b from-first to-blue-second cursor-pointer p-5">
                            <div className="bg-first text-black w-12 h-12 rounded-full flex items-center justify-center">
                              <PiStudentFill className='text-4xl' />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"><CountUp delay={1} end={538} />+</h1>
                                <p className="text-[18px] ">Happy Student</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 hover:bg-gradient-to-b from-first to-blue-second cursor-pointer p-5">
                            <div className="bg-first text-black w-12 h-12 rounded-full flex items-center justify-center">
                              <GiRevolt className='text-4xl' />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"><CountUp delay={1} end={1225} />+</h1>
                                <p className="text-[18px] ">Testing and evaluation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAchivement;