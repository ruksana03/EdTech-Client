import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useSelector } from "react-redux";

const useStudentSpecificNotices = () => {
    const axiosSecure = useAxiosSecure();
    const user = useSelector(state => state.data.user.user);
    console.log(user);
    const {data:userNotices=[],refetch, isLoading} = useQuery({
        queryKey:['userNotices'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/notice-user?email=${user?.email}`)
            return res.data
        }
    })
    return [userNotices,refetch,isLoading]
};

export default useStudentSpecificNotices;