/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Loader from '../components/shared/Loader';

const PrivateRouter = ({ children }) => {
    const user = useSelector(state => state.data.user.user);
    const loading = useSelector(state=>state.data.user.isLoading);
    const location = useLocation()
    if (loading) return <Loader />
    if (user) return children

    return <Navigate to='/login' state={{ from: location }} replace='true' />
}

export default PrivateRouter;