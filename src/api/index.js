import axios from "axios";
 
const axiosCommon = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

 
export default axiosCommon;
