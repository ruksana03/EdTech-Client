import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useGetAllPdf = () => {
    const axiosPublic= useAxiosPublic()
    const { data: allPdf = [],  refetch , isLoading: loading,} = useQuery({
            queryKey: ['AllPdf'],
            queryFn: async () => {
              const res = await axiosPublic('/get-pdf');
              console.log("Response data: from hook", res.data)
              return res.data;
            },
          });
        
        
          return { allPdf, loading, refetch };
};

export default useGetAllPdf;