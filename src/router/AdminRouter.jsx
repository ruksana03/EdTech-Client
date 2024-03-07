/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import Loader from '../components/shared/Loader'
import useAdmin from '../Hooks/useAdmin';
import { useSelector } from 'react-redux';

const AdminRouter = ({ children }) => {
    const [isAdmin] = useAdmin();
    const loading = useSelector(state=>state.data.user.isLoading);
    if (loading) return <Loader />
    if (isAdmin === 'true') return children
    return <Navigate to='/dashboard' />
  }

export default AdminRouter;