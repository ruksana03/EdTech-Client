/* eslint-disable react/prop-types */
import Modal from "../../../../components/shared/Modal";

const AllAdmissionModal = ({ isOpen, setIsOpen, applications, id }) => {
    const admissionData = applications.find(findData => findData?._id === id);
    const handleCancel = () => {
        setIsOpen(false);
    }
    return (
        <div className="p__cormorant bg-[#0B0807]">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={''}>
                <div className=" bg-[#0B0807] gap-1 m-0 p__cormorant p-4 rounded-lg">
                    <div className="flex items-center justify-center flex-col  ">
                        <figure className="w-32 h-32 rounded-full bg-[#0B0807]">
                            <img src={admissionData?.profile_photo} alt="applied-person" className="w-full h-full rounded-full" />
                        </figure>
                        <h1 className="text-xl font-medium">{admissionData?.fullName} ({admissionData?.gender})</h1>
                        <h1>{admissionData?.email}</h1>
                        <p className="text-xl font-medium">Education: {admissionData?.education}</p>
                        <p className="text-xl font-medium">Institute: {admissionData?.instituteName}</p>
                        <p className="text-xl font-medium">Address: {admissionData?.streetAddress}</p>
                    </div>
                    <p className="text-base">{admissionData?.message}</p>
                </div>
                <div className="flex items-center justify-end">
                    <button onClick={handleCancel} className="btn-style w-full my-3">Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default AllAdmissionModal;