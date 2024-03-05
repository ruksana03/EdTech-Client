import { FaPhoneAlt } from "react-icons/fa";


const Help = () => {
    return (
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between my-4 text-base">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-start  gap-4">
                <img className="bg-second rounded-lg  w-1/6" src="https://i.ibb.co/pn48FQv/4e71ddea-67fb-4d12-b6a3-85e3b4c6424c.png" alt="" />
                <div>
                    <h1 className="headtext__cormorant">Need help ?</h1>
                    <p>Call for any technical issues(12 AM to 12 PM)</p>
                </div>
            </div>
            <div className="text-start flex justify-center items-center gap-4 lg:flex-col lg:justify-start lg:items-start lg:mr-24">
                <p className="headtext__cormorant">Call</p>
                <p className="flex gap-2"><FaPhoneAlt /> 0184534354532 </p>
            </div>
        </div>
    );
};

export default Help;