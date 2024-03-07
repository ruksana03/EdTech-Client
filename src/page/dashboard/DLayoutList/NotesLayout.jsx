import ManageTask from "../ManageTask/ManageTask";
const NotesLayout = () => {

    return (
        <div className="p__cormorant">
             <div className="ml-6 mt-8 mb-4 text-sm">
                <h1 className="headtext__cormorant ">Your Personal Task List +</h1>
                <li> Click <span className="text-xl font-bold text-first">Create Task Button  </span>to create a new Task.</li>
                <li> You Can Move Your Task By Drag and Drop. </li>
            </div>
            <div className="p__cormorant">
                <ManageTask />               
            </div>     
        </div>



    );
};

export default NotesLayout;