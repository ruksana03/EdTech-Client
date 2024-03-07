import { BiDownArrowAlt } from "react-icons/bi";

const CommonDashboard = () => {
    return (
        <div className="">
            {/* Header */}
            <header className="headtext__cormorant">
                <div className="max-w-7xl flex mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {/* Your header content goes here */}
                    <h1 className="">Welcome To InnovatedED </h1>
                    <BiDownArrowAlt/>
                </div>
            </header>

            {/* Footer */}
            <footer className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                    {/* Your footer content goes here */}
                    <p className="text-sm text-gray-500">© 2024 Your Website Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default CommonDashboard;
