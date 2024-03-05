import { Link } from "react-router-dom";

const BeAPartner = () => {
    return (
        <div className="section-container mt-12 font-serif">
            <div className="mb-8">
                <h2 className="text-center text-first text-2xl">{`--- Become a Partner ---`}</h2>
                <p className="text-center text-white">Become One of Us</p>
            </div>

            <div className="w-full bg-black shadow-md shadow-white p-8">
                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-24">
                    <div className="card w-72 text-white bg-black shadow-md shadow-white p-4">
                        <p className="text-justify">Do You Want To Join Our Organization As An Associate? We are offering you to become one of us. If you are interested confirm now. We are eagerly waiting for you.</p>
                    </div>
                    <div className="card w-72 text-white bg-black shadow-md shadow-white p-4">
                        <h2 className="text-2xl text-center text-first font-bold">You Can Be <span className="text-red-700">A Partner</span></h2>
                        <p className="text-center text-slate-300 my-4">Click the below button</p>
                        <Link to={`/partner`}><button className="btn-style mb-2">Become A Partner</button></Link>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex justify-center"><img src="https://i.ibb.co/VBTBhHq/cute-asian-girl-pink-836063-183.jpg" alt="" className="w-32 h-32 rounded-full" /></div>
                    <div className="text-center">
                        <h2 className="text-first text-2xl font-bold mb-4">Riddi Roy</h2>
                        <p className="text-slate-300">At first I was a student of this organization. Then they give me a chance to be teacher. And now, I am a partner Of this organization. It is a chance to do better something from here. So do not be late, Hurry to Register.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BeAPartner;