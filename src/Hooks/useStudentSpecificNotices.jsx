// import { useSelector } from "react-redux";
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const useStudentSpecificNotices = () => {
    const axiosPublic = useAxiosPublic();
    // const user = useSelector(state => state.data.user.user);
    const {data:userNotices=[],refetch:studentRefetch, isLoading} = useQuery({
        queryKey:['userNotices'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/notice-user?sentForCourse=programming`)
            return res.data
        }
    });
    return [userNotices,studentRefetch,isLoading]
};

export default useStudentSpecificNotices;