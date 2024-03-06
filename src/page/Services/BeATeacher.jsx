import { Link } from "react-router-dom";

const BeATeacher = () => {
    return (
        <div className="section-container mt-20 font-serif">
            <div className="mb-8">
                <h2 className="text-center text-first text-2xl">{`--- Be a Teacher ---`}</h2>
                <p className="text-center text-white">Stay With Us</p>
            </div>

            <div className="bg-black text-white text-xl shadow-md shadow-white mb-8 py-2 rounded-md">
                <marquee direction="right">If you interested to be a teacher then welcome. Here you get a chance to be a teacher from student only from our platform. So why late, register and take a course, after completing course be a teacher.</marquee>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="card md:w-full bg-black shadow-md shadow-white">
                    <div className="card-body">
                        <div className="flex items-start gap-6">
                            <img src="https://i.ibb.co/VBTBhHq/cute-asian-girl-pink-836063-183.jpg" alt="" className="w-32 h-32 rounded-full" />
                            <div>
                                <h2 className="card-title text-white mb-4">Humaira Israt</h2>
                                <p className="text-slate-300">I was a student. I have completed my course properly. I applied to be a teacher and Now I am a teacher.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card md:w-full bg-black shadow-md shadow-white">
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-first font-bold">Become <span className="text-red-700">A Teacher</span></h2>
                        <p className="text-center text-slate-300">Play quiz-contest and get reward upto 40% scholarship.</p>
                        <div className="card-actions justify-end">
                            <Link to={`/join-teacher`}><button className="btn-style">Be a Teacher</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BeATeacher;