import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://ed-tech-server-six.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;