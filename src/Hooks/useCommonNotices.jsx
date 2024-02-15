import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCommonNotices = () => {
    const axiosPublic = useAxiosPublic();
    // const user = useSelector(state => state.data.user.user);
    const { data: commonNotices = [], refetch: commonRefetch, isLoading } = useQuery({
        queryKey: ['commonNotices'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/notices-query?sentNotices=common`)
            console.log(res);
            return res.data
        }
    });
    return [commonNotices, commonRefetch, isLoading]
};

export default useCommonNotices;