import useAxiosSecure from "./useAxiosSecure";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const useNoticeForTeacher = () => {
    const axiosSecure = useAxiosSecure();
    const user = useSelector(state => state.data.user.user);
    const { data: teacherNotices = [], refetch, isLoading } = useQuery({
        queryKey: ['userNotices'],
        queryFn: async () => {
            const res = axiosSecure(`/notices-query?email=${user?.email}`)
            return res.data
        }
    })
    return [teacherNotices, refetch, isLoading]
};

export default useNoticeForTeacher;
