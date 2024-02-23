import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTeacherNotices = () => {
    const axiosPublic = useAxiosPublic();
    const user = useSelector(state => state.data.user.user);
    const { data: teachers = [], refetch, isLoading } = useQuery({
        queryKey: ['teachers',],
        queryFn: async () => {
          const res = await axiosPublic.get(`/teacher-notices?email=${user?.email}`)
          return res.data
        },
      })
    return [teachers, refetch, isLoading]
};

export default useTeacherNotices;
