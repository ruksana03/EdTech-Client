/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useCourses = () => {
    const { data: AllCourses = [], isLoading: loading, refetch } = useQuery({
                queryKey: ['AllCovers'],
                queryFn: async () => {
                  const res = await axiosSecure('/courses');
                  return res.data;
                },
              }); 
              return { AllCourses, loading, refetch };
            };
        
export default useCourses;