
const OurAchivement = () => {
    return (
        <div className="section-container">
            <div className="flex items-center flex-col lg:flex-row justify-center gap-5">
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co/r47H5NB/achivements.jpg" className="opacity-55 hover:opacity-100 transition ease-in-out rounded cursor-pointer" alt="achivements-image" />
                </div>
                <div className="text-white w-full lg:w-1/2">
                    <h2 className="text-3xl font-serif"> Our Achivements</h2>
                    <p> {`Welcome to Innovated Education! We offer top-notch educational services tailored to your needs. Our passionate educators inspire learning and critical thinking, both in-person and online. Partner with us for customized solutions and celebrate success with our proven track record. Join us as we reshape education through innovation.`} </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 p-5 bg-zinc-700 p-5">
                            <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center">
                                525
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"> 525+</h1>
                                <p className="text-xl">Happy Clients</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 p-5">
                            <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center">
                                525
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"> 525+</h1>
                                <p className="text-xl">Happy Clients</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 p-5">
                            <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center">
                                525
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"> 525+</h1>
                                <p className="text-xl">Happy Clients</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-zinc-700 p-5">
                            <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center">
                                525
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold"> 525+</h1>
                                <p className="text-xl">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAchivement;