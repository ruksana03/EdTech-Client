import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
const useOnlineAdmission = () => {
    const axiosPublic = useAxiosPublic();
    const {data:admissions=[],refetch, isLoading} = useQuery({
     queryKey:['admissions'],
     queryFn: async () => {
        const res = await axiosPublic.get('/all-admissions')
         return res.data
     }
    })
    return [admissions,refetch,isLoading]
};

export default useOnlineAdmission;