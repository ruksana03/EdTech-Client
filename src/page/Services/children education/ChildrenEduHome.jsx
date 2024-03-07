import { FaQuoteLeft } from "react-icons/fa";
const ChildrenEduHome = () => {
    return (
        <div className="text-white section-container font-serif pt-14">
            <h1 className="text-3xl font-bold my-6 text-center">{`A solid foundation in your child's education will determine his future trajectory`}.</h1>
            <p>We have arranged online batch to ensure all the education of every student from basic to advanced and prepare them for the future</p>
            {/* online batch category  */}
            <div className="space-y-3 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 mx-auto ">
                    <h1 className="bg-second rounded-full px-4 py-2 text-sm flex items-center justify-center">Interactive live classes</h1>
                    <h1 className="bg-second rounded-full px-4 py-2 text-sm flex items-center justify-center">
                        Instant Class Quiz</h1>
                    <h1 className="bg-second rounded-full px-4 py-2 text-sm flex items-center justify-center">Question and answer solution</h1>
                    <h1 className="bg-second rounded-full px-4 py-2 text-sm flex items-center justify-center">
                        Full syllabus cover</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 w-full mx-auto  ">
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">Regular homework</div>
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">
                        written test</div>
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">Study material</div>
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">
                        Lecture sheet</div>
                    <div className="bg-second px-4 py-2 text-sm md:hidden md rounded-full block lg:block text-center items-center justify-center">
                        Chapter wise assessment</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 mx-auto ">
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">
                        problem solving</div>
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">
                        Progress report</div>
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">
                        Parents meeting</div>
                    <div className="bg-second px-4 py-2 text-sm rounded-full flex items-center justify-center">
                        Demo assignment</div>
                </div>
            </div>
            
            {/* consumer of student  */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <div className="border border-white bg-black text-white relative shadow-xl w-full flex flex-col lg:flex-row h-auto lg:py-8 lg:w-1/2 rounded-md py-8 lg:h-auto xl:h-64">
                    <FaQuoteLeft className="absolute left-4 top-40 md:top-40 md:left-4 lg:top-9 lg:left-24 xl:top-10 xl:left-24 2xl:left-24 text-4xl" />
                    <div className=" flex justify-center lg:justify-start ">
                        <figure className="w-32 h-32">
                            <img src="https://i.ibb.co/bWkVrMR/male.png" alt="student-image" className=" w-full h-full rounded-md" />
                        </figure>
                    </div>
                    <div className="lg:flex-1 mt-3 text-base px-5 lg:pl-6 pl-16">
                        <p>I did very well in the evaluation festival by taking online batch classes. Especially the daily homework and lecture sheets helped a lot because everything was given very simply in the lecture sheets.</p>
                        <h1 className="text-xl font-bold my-4 text-first">Mahfuz Rahman</h1>
                        <p className="text-white bg-second pl-2">Gopalganj High School, Gopalganj</p>
                    </div>
                </div>
                <div className="border border-white bg-black text-white relative shadow-xl w-full flex flex-col lg:flex-row h-auto lg:py-8 lg:w-1/2 rounded-md py-8 lg:h-auto xl:h-64">
                    <FaQuoteLeft className="absolute left-4 top-40 md:top-40 md:left-4 lg:top-9 lg:left-24 xl:top-10 xl:left-24 2xl:left-24 text-4xl" />
                    <div className=" flex justify-center lg:justify-start ">
                        <figure className="w-32 h-32">
                            <img src="https://i.ibb.co/9wPdYhD/ffff.jpg" alt="student-image" className=" w-full h-full rounded-md" />
                        </figure>
                    </div>
                    <div className="lg:flex-1 mt-3 lg:pl-3 text-base pl-16 space-y-2">
                        <p>I did very well in the evaluation festival by taking online batch classes. Especially the daily homework and lecture sheets helped a lot because everything was given very simply in the lecture sheets.</p>
                        <h1 className="text-xl font-bold my-4 text-first">Jenny Wellious</h1>
                        <p className="text-white bg-second pl-2">Oxford Ideal Collage, London</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildrenEduHome;