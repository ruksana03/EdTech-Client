/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useTeacherNotice = () => {
    const { data: AllTeacherNotice = [], isLoading: loading, refetch } = useQuery({
                queryKey: ['AllTeacherNotice'],
                queryFn: async () => {
                  const res = await axiosSecure('/all-teacher-notices');
                  return res.data;
                },
              }); 
              return { AllTeacherNotice, loading, refetch };
            };
        
export default useTeacherNotice;