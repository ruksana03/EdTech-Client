/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useUsers from "../Hooks/useUsers";
import Loader from "../components/shared/Loader";

const TeachersRouter = ({ children }) => {
    const { AllUsers, loading } = useUsers();
    const teachers = AllUsers.filter(teacher => teacher.role === 'teacher');

    if (loading) return <Loader />;

    if (teachers.length > 0) {
        return children;
    } else {
        return <Navigate to='/dashboard' />;
    }
}

export default TeachersRouter;