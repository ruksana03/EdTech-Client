import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFeedback = () => {
    const axiosPublic = useAxiosPublic()
    const { data: feedbacks = [], refetch } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic('/feedbacks-data');
            return res.data;
        },
    });


    return [feedbacks,refetch];
};
export default useFeedback;