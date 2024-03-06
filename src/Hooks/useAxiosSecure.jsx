// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Features/Utilities";
import axiosSecure from "../api/axiosSecure";

const useAxiosSecure = () => {
    const navigate = useNavigate();

    // request interceptors to add headers for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async(error) => {
        const status = error.response.status;
        // console.log('status error in the interceptors', status);

        // for 401 and 403 logout the user and move to the login page.
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;