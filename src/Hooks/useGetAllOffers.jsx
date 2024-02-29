import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGetAllOffers = () => {
    const axiosPublic= useAxiosPublic()
    const { data: allOffers = [],  refetch , isLoading: loading,} = useQuery({
            queryKey: ['AllOffers'],
            queryFn: async () => {
              const res = await axiosPublic('/get-offers');
              console.log("Response data: from hook", res.data)
              return res.data;
            },
          });
        
        
          return { allOffers, loading, refetch };
};

export default useGetAllOffers;