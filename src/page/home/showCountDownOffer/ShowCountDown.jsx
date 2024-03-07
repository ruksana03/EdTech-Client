/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Countdown from 'react-countdown';
import { useState } from 'react';
import OfferModal from './OfferModal';
const ShowCountDown = ({ offerData }) => {
    // let for modal 
    let [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    const startDay = offerData[0]?.startDate
    const endDay = offerData[0]?.endDate
    const offerDescription = offerData[0]?.offerDescription

    // Random component
    const Completionist = () => <span>Offer has been closed</span>;
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div className=' mt-20 section-container '>
                    <h2 className='text-center headtext__cormorant'>Hurry up ! Offer end soon </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4  divide-x gap-2  items-center justify-center ">
                        <div className="bg-[#FFFFFF]  p-2 ">
                            <h1 className="text-base text-center font-semibold ">
                                {days} <span className="text-sm text-[#373739]">Days</span>
                            </h1>
                        </div>
                        <div className="bg-[#FFFFFF] p-2 ">
                            <h1 className="text-base text-center font-semibold">
                                {hours}<span className="text-sm text-[#373739]"> Hours</span>
                            </h1>
                        </div>
                        <div className="bg-[#FFFFFF] p-2">
                            <h1 className="text-base  text-center font-semibold">
                                {minutes} <span className="text-sm text-[#373739]">Mins</span>
                            </h1>
                        </div>
                        <div className="bg-[#FFFFFF] p-2">
                            <h1 className="text-base text-center font-semibold">
                                {seconds} <span className="text-sm text-[#373739]">Secs</span>
                            </h1>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-center items-center'>
                        <button className='btn-style '
                            onClick={openModal}
                        >See Offer Details</button>
                        {/* offer modal veiw for offer deatils  */}
                        <OfferModal isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} offerDescription={offerDescription}></OfferModal>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="">
            <Countdown date={endDay} renderer={renderer} />
        </div>
    );
};

export default ShowCountDown;