import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useNotices = () => {
    const axiosSecure = useAxiosSecure();
   const {data:notices=[],refetch, isLoading} = useQuery({
    queryKey:['notices'],
    queryFn: async () => {
       const res = await axiosSecure.get('/notices')
        return res.data
    }
   })
   return [notices,refetch,isLoading]
};

export default useNotices;
