import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useTeacherSpecificNotices = () => {
  const axiosPublic = useAxiosPublic();
  const user = useSelector(state => state.data.user.user);
  const { data: teacherNotices = [], refetch:teacherRefetch, isLoading } = useQuery({
    queryKey: ['notices', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/notices-query?email=${user?.email}`)
      console.log(res.data);
      return res.data
    },
  })
  return [teacherNotices, teacherRefetch, isLoading]
};

export default useTeacherSpecificNotices;