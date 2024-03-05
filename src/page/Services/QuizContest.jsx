import { Link } from "react-router-dom";

const QuizContest = () => {
    return (
        <div className="section-container font-serif">
            <div className="mb-8">
                <h2 className="text-center text-first text-2xl">{`--- Play Quiz ---`}</h2>
                <p className="text-center text-white">Win 40% scholarship</p>
            </div>
            <div className="bg-black text-white text-xl shadow-md shadow-white mb-8 py-2 rounded-md">
                <marquee direction="left">If you want to get scholarship upto 40% you need to attend our quiz contest. According to your marks and ranking we will provide you our scholarship offer as a reward.</marquee>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

                <div className="card md:w-full bg-black shadow-md shadow-white">
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-first font-bold">Win <span className="text-red-700">40%</span> Scholarship</h2>
                        <p className="text-center text-sm text-slate-300">Play quiz-contest and get reward upto 40% scholarship.</p>
                        <div className="card-actions justify-end">
                            <Link to={`/quest`}><button className="btn-style">Play-Quiz</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card md:w-full bg-black shadow-md shadow-white">
                    <div className="card-body">
                        <div className="flex items-start gap-6">
                            <img src="https://i.ibb.co/8jFt0yz/images.jpg" alt="" className="w-32 h-32 rounded-full" />
                            <div>
                                <h2 className="card-title text-white mb-4">Abul Hasnat</h2>
                                <p className="text-slate-300 text-sm">I have played quiz and rewarded 40% scholarship. So, hurry up, play the quiz and register with your reward.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizContest;