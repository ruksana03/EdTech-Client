import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";


const useCourseResources = () => {
    const { data: CourseAllResources= [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllResources'],
        queryFn: async () => {
          const res = await axiosSecure('/resources');
          return res.data;
        },
      }); 
      return { CourseAllResources, loading, refetch };
    };

export default useCourseResources;

