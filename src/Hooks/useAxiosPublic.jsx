import axios from "axios";

const axiosPublic = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:5000'
=======
    // baseURL: 'https://ed-tech-server-six.vercel.app'
    baseURL:'http://localhost:5000'
>>>>>>> 72f7b8775a9ea5e8be44b511e5d36c611bf5917e
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;