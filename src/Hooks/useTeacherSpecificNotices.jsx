import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';
import useUserRole from './useUserRole';

const useTeacherSpecificNotices = () => {
  const axiosPublic = useAxiosPublic();
  const [role] = useUserRole();
  const currentRole = role[0]?.role;
  const { data: teacherNotices = [], refetch:teacherRefetch, isLoading } = useQuery({
    queryKey: ['notices',],
    queryFn: async () => {
      const res = await axiosPublic.get(`/notices-query?sentNotices=${currentRole}`)
      return res.data
    },
  })
  return [teacherNotices, teacherRefetch, isLoading]
};

export default useTeacherSpecificNotices;