import { CgUnavailable } from "react-icons/cg";

const AssignmentSection = () => {
    return (
        <div className="h-screen">
            <div className="w-full h-[30vh] flex items-center justify-center flex-col ">
                <h1 className="text-3xl font-boldr flex items-center gap-1">Assignment is Not <CgUnavailable className="text-4xl text-red-600 font-boldd" /> 
                </h1>
                <h1 className="text-3xl font-boldr">Available Now<span className="text-5xl font-bold text-red-600">?</span> </h1>
            </div>
        </div>
    );
};

export default AssignmentSection;