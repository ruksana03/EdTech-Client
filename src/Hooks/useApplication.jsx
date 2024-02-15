
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
const useApplication = () => {
    const axiosPublic = useAxiosPublic();
    const {data:applications=[],refetch, isLoading} = useQuery({
     queryKey:['applications'],
     queryFn: async () => {
        const res = await axiosPublic.get('/applications')
         return res.data
     }
    })
    return [applications,refetch,isLoading]
};

export default useApplication;