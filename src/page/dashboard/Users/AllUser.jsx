import useUsers from "../../../Hooks/useUsers";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { HiViewfinderCircle } from "react-icons/hi2";


const AllUser = () => {
    const { AllUsers, loading } = useUsers();


    console.log("AllUsers:", AllUsers);
    console.log("loading:", loading);

    const teachers = AllUsers.filter((user) => user.role === "teacher");
    const students = AllUsers.filter((user) => user.role === "student");
    const admins = AllUsers.filter((user) => user.role === "admin");
    const normalUsers = AllUsers.filter((user) => user.role === "normalUser");


    console.log("Teachers:", teachers);
    console.log("Students:", students);
    console.log("Admins:", admins);
    console.log("Normal Users:", normalUsers);

    const renderTable = (users, title) => (
        <div className="p-4 bg-white border rounded-md">
            <h2 className="bg-blue-500 text-white py-2 px-4 mb-4">{title}</h2>

            {users.map((user) => (
                <div key={user._id} className="border border-black p-2 my-2">
                    <div className="flex justify-start items-center gap-4">
                        <img src={user.photo} alt={user.name} className="w-10 h-10 object-cover rounded-full" />
                        <p className="py-2 ">{user.role}</p>
                    </div>
                    <h1 className="py-2 ">{user.name}</h1>
                    <p className="py-2 ">{user.email}</p>
                    <div className="flex gap-5">
                        <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white"><AiFillDelete/></button>
                        <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white"><GrDocumentUpdate/></button>
                        <button className="border border-black rounded-full p-2 hover:bg-black hover:text-white"><HiViewfinderCircle/></button>
                    </div>
                </div>
            ))}

        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {renderTable(teachers, "Teachers")}
            {renderTable(students, "Students")}
            {renderTable(admins, "Admins")}
            {renderTable(normalUsers, "Normal Users")}
        </div>
    );
};

export default AllUser;
