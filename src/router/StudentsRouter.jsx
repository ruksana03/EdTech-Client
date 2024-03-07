/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useUsers from "../Hooks/useUsers";
import Loader from "../components/shared/Loader";

const StudentsRouter = ({ children }) => {
    const { AllUsers, loading } = useUsers();
    const students = AllUsers.filter(student => student.role === 'student');
    if (loading) return <Loader />;
    if (students.length > 0) {
        return children;
    } else {
        return <Navigate to='/dashboard' />;
    }
}

export default StudentsRouter;
