/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import Modal from "../../../../components/shared/Modal";
import { useState } from "react";

const RattingModal = ({handleModal}) => {
    const [rating, setRating] = useState();
  
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={handleModal}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default RattingModal;