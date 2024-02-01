import axios from "axios";
const axiosSecure = axios.create({
    baseURL:'https://ed-tech-server-six.vercel.app',
    withCredentials:true,
})
export default axiosSecure