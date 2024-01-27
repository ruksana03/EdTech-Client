
const ResearchL = () => {

    return (
        <div className="h-screen">
            <h1 className="text-2xl font-bold text-center">Research Lab is Up-Comming....!</h1>
            <div className="grid grid-flow-col items-center justify-center gap-5 text-center auto-cols-max mt-5">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 51 }}></span>
                    </span>
                    sec
                </div>
            </div>
            <div className="grid grid-flow-col items-center justify-center gap-5 text-center auto-cols-max">
                <div className="flex flex-col ">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 23 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default ResearchL;