/* eslint-disable react/no-unescaped-entities */

import './Carriculam.css'


const Cariculam = () => {
    return (
        <div className="section-container mt-20 parallax-container">
            <div className="mt-20 section-container">
                <h1 className="text-center mt-5 font-bold text-3xl text-first w-10/12 mx-auto">We are ready to help your child study in the new curriculum</h1>
                <h2 className="text-center text-white mb-10 w-6/12 mx-auto text-lg my-8">In the light of the experience of teaching thousands of students in the new curriculum in 2023, we have arranged 'Online Batch 2024'</h2>
                <div className="flex mt-10">
                    <div>
                        <h1 className="font-bold text-first text-3xl">Interactive Live Class</h1>
                        <p>In any part of the country, your child can study directly live with teachers. There will be multiple quizzes inside the class, through which one can easily check how much the class has understood.</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/NSJ8qjV/image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cariculam;