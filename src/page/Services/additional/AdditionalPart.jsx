import { Link } from 'react-router-dom';


const AdditionalPart = () => {
    return (
        <div className="mt-20 section-container font-serif">
            <h2 className="text-center mt-5 font-bold text-3xl text-white">Along with academic studies, there are opportunities for all skill development for your child.</h2>
            <p className="text-center text-white mb-10">Along with classes and assessments throughout the year, there will be individual and team competitions to test all required skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 items-center justify-center w-full h-44 mb-64 md:mb-52 mt-3 lg:mb-24 xl:mb-8">
                <div className=" border border-white bg-black text-white md:col-span-4 lg:col-span-3 order-1 md:order-1 lg:order-1 p-3 w-full h-auto md:h-full lg:h-full xl:h-full px-3 rounded">
                    <div className="flex gap-3 text-base">
                        <h2 className="text-2xl font-bold w-1/2">Mental skills development program</h2>
                        <img src='https://i.ibb.co/vLtv2Ry/ai-11914040.png' alt="knowledge-image" className="rounded-2xl bg-black flex-1 mt-5 w-24 h-20" />
                    </div>
                </div>
                <div className="border border-white bg-black text-white md:col-span-8 lg:col-span-5 order-1 md:order-3 lg:order-1 p-3 w-full h-auto md:h-auto lg:h-full xl:h-full">
                    <div className="flex gap-3 text-base">
                        <article className="flex-1">
                            <h2 className=" text-2xl font-bold w-11/12">Communication skills Courses</h2>
                            
                                <li>Basic Communication</li>
                                <li>Presentations and speeches</li>
                                <li>Story telling techniques</li>
                           
                        </article>
                        <img src='https://i.ibb.co/DzdndWH/group.png' alt="communication-image" className="rounded-2xl bg-black mt-5 w-24 h-20 md:w-64 md:h-36 lg:w-44 lg:h-36" />
                    </div>
                </div>
                <div className="border border-white bg-black text-white md:col-span-4 lg:col-span-4 order-1 md:order-2 lg:order-1 p-3 w-full h-auto md:h-full lg:h-full xl:h-full">
                    <div className="flex gap-3">
                        <h2 className="text-2xl font-bold w-1/2">English Olympiad</h2>
                        <img src='https://i.ibb.co/cb2JVW6/eng.png' alt="eng-image" className="rounded-2xl bg-black flex-1 mt-5 w-24 h-20" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 items-center justify-center w-full h-44 mb-56 md:mb-32 mt-3 lg:mb-14 xl:mb-8">
                <div className="border border-white bg-black text-white md:col-span-4 order-1 md:order-2 lg:order-1 lg:col-span-4 p-3 w-full h-auto md:h-full lg:h-full xl:h-full">
                    <div className="flex gap-3">
                        <h2 className="text-2xl font-bold w-1/2">Quran recitation competition</h2>
                        <img src='https://i.ibb.co/2nP5Hvw/koran.png' alt="quran-image" className="rounded-2xl bg-black flex-1 mt-5 w-24 h-20" />
                    </div>
                </div>
                <div className="border border-white bg-black text-white md:col-span-8 order-2 md:order-1 lg:order-2 lg:col-span-4 p-3 w-full h-auto md:h-full lg:h-full xl:h-full">
                    <div className="flex gap-3">
                        <h2 className="text-2xl font-bold w-1/2">Science and Mathematics Olympiad</h2>
                        <img src='https://i.ibb.co/tYzMP48/science.png' alt="Science-image" className="rounded-2xl bg-black flex-1 mt-5 w-24 h-28" />
                    </div>
                </div>
                <div className="border border-white bg-black text-white md:col-span-4 order-3 md:order-3 lg:order-3 lg:col-span-4 p-3 w-full h-auto md:h-full lg:h-full xl:h-full">
                    <div className="flex gap-3">
                        <h2 className="text-2xl font-bold w-1/2">Other Competitions</h2>
                        <img src='https://i.ibb.co/YW8NBsL/abilities.png' alt="quran-image" className="rounded-2xl bg-black flex-1 mt-5 w-24 h-20" />
                    </div>
                </div>
            </div>

            <div className=" text-base flex flex-col lg:flex-row items-center justify-between gap-5 mt-36 w-full lg:h-auto xl:h-56 ">
                <div className="border border-white bg-black text-white col-span-4 p-3 h-full md:h-auto lg:h-80 xl:h-56">
                    <div className="flex gap-3">
                        <article className="flex-1">
                            <h2 className="text-2xl font-bold">Check out the free live class</h2>
                            <p>Join the free demo class to know how Innovated Education has organized this online batch.</p>
                            <Link to='https://youtu.be/3H_aIzeiOhE?si=86DYZeKWBUpLTMvq' target='_blank'>
                                <button className='mt-5 btn-style'>Book a free demo class</button>
                            </Link>
                        </article>
                        {/* https://i.ibb.co/fDVJ7wB/instagram-live.png */}
                        <img src='https://i.ibb.co/sK6NbKw/live.png' alt="knowledge-image" className="rounded-2xl bg-black mt-5 w-24 h-20 md:w-64 md:h-36 lg:w-44 lg:h-36" />
                    </div>
                </div>
                <div>
                    <div className="border border-white bg-black text-base text-white col-span-5 p-3 h-full  md:h-auto lg:h-80 xl:h-56 ">
                        <div className="flex gap-3 ">
                            <article className="flex-1">
                                <h2 className="text-2xl font-bold">Take advantage of special discounted admission.</h2>
                                <p>Pre-book online batch now and get special discounts and many more benefits.</p>
                                <Link to='/get-addmission'>
                                    <button className='mt-5 btn-style'>Get admission online</button>
                                </Link>
                            </article>
                            <img src='https://i.ibb.co/k53L4kH/enrol.png' alt="knowledge-image" className="rounded-2xl bg-black mt-5 w-24 h-20 md:w-64 md:h-36 lg:w-44 lg:h-36" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalPart;