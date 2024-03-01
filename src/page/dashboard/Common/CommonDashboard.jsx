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

            <div className="bg-blue-500 py-4 pl-52">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
                    <div className="flex items-center">
                        {/* Icon */}
                        <svg className="h-8 w-8 text-white animate-spin-slow mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5M12 19V5M12 19L19 12M12 19L5 12"></path>
                        </svg>
                        {/* Text */}
                        <p className="text-white font-semibold">Welcome to our Dashboard!</p>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Your main content goes here */}
                    <div className="px-4 py-4 bg-white shadow sm:rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-900">Welcome to the Dashboard</h2>
                        {/* Other dashboard components can go here */}
                    </div>
                </div>
            </main>

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
