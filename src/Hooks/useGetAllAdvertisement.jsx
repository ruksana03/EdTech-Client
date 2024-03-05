import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetAllAdvertisement = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allAD = [], refetch, isLoading: loading, } = useQuery({
        queryKey: ['allAD'],
        queryFn: async () => {
            const res = await axiosPublic('/get-advertise');
            console.log("Response data: from hook", res.data)
            return res.data;
        },
    });


    return { allAD, loading, refetch };
};

export default useGetAllAdvertisement;