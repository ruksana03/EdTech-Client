
import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import { useSelector } from "react-redux";


const useUserRole = () => {
    const axiosPublic = useAxiosPublic();
    const user = useSelector(state => state.data.user.user);
  const {data:role=[],isLoading} = useQuery({
    queryKey:['role', user],
    queryFn: async() => {
        const res = await axiosPublic.get(`/user?email=${user?.email}`)
        return res.data
    },
  })
  return [role,isLoading]
};

export default useUserRole;