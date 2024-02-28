/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import Modal from "../../../../components/shared/Modal";

const ApplicationModal = ({ isOpen, setIsOpen, applications, id }) => {
    const applicationData = applications.find(findData => findData?._id === id);
    const handleCancel = () => {
        setIsOpen(false);
    }
    return (
        <div className="p__cormorant bg-[#0B0807]">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={''}>
                <div className=" bg-[#0B0807] gap-1 m-0 p__cormorant p-4 rounded-lg">
                    <div className="flex items-center justify-center flex-col  ">
                        <figure className="w-32 h-32 rounded-full bg-[#0B0807]">
                            <img src={applicationData?.profile_photo} alt="applied-person" className="w-full h-full rounded-full" />
                        </figure>
                        <h1 className="text-xl font-medium">{applicationData?.fullName} ({applicationData?.gender})</h1>
                        <h1>{applicationData?.email}</h1>
                        <p className="text-xl font-medium">Post Name: {applicationData?.position}</p>
                        <p className="text-xl font-medium">Education: {applicationData?.education}</p>
                        <p className="text-xl font-medium">Grade Point: {applicationData?.gradePoint}</p>
                        <p className="text-xl font-medium">Address: {applicationData?.streetAddress}</p>
                        <p className="text-xl font-medium mb-3">CV Link: <a href={applicationData?.cvLink} target="_blank" className="link link-hover text-blue-300">Click here</a></p>
                    </div>
                    <p className="text-base">{applicationData?.message}</p>
                </div>
                <div className="flex items-center justify-end">
                    <button onClick={handleCancel} className="btn-style w-full my-3">Close</button>
                </div>
            </Modal>

        </div>
    );
};

export default ApplicationModal;