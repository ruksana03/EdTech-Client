/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import Modal from "../../../../components/shared/Modal";

const ApplicationModal = ({ isOpen, setIsOpen, applications, id }) => {
    const applicationData = applications.find(findData => findData?._id === id);
    const handleCancel = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={''}>
                <div>
                    <div className="flex items-center justify-center flex-col gap-1 m-0">
                        <figure className="w-32 h-32 rounded-full bg-white">
                            <img src={applicationData?.profile_photo} alt="applied-person" className="w-full h-full rounded-full" />
                        </figure>
                        <h1 className="text-xl font-medium">{applicationData?.fullName} ({applicationData?.gender})</h1>
                        <h1>{applicationData?.email}</h1>
                        <p className="text-xl font-medium">Post Name: {applicationData?.position}</p>
                        <p className="text-xl font-medium">Education: {applicationData?.education}</p>
                        <p className="text-xl font-medium">Grade Point: {applicationData?.gradePoint}</p>
                        <p className="text-xl font-medium">Address: {applicationData?.streetAddress}</p>
                        <p className="text-xl font-medium mb-3">CV Link: <a href={applicationData?.cvLink} target="_blank" className="link link-hover text-blue-500">Click here</a></p>
                    </div>
                    <p>{applicationData?.message}</p>
                </div>
                <div className="flex items-center justify-end">
                    <button onClick={handleCancel} className="btn hover:text-red-600 my-3">Close</button>
                </div>
            </Modal>

        </div>
    );
};

export default ApplicationModal;