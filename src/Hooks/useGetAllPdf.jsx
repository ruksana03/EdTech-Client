import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGetAllPdf = () => {
    const { data: allPdf = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["allPdf"],
        queryFn: async () => {
            const res = await useAxiosPublic.get("/get-pdf");
            return res.data; // Corrected this line
        }
    });
    console.log("this get all  pdf in axios", allPdf);
    return [allPdf, loading, refetch]; // Changed return format to an array
};

export default useGetAllPdf;
