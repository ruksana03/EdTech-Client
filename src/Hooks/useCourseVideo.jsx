import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";


const useCourseVideo = () => {
    const { data: CourseAllVideo = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllVideos'],
        queryFn: async () => {
          const res = await axiosSecure('/videos');
          return res.data;
        },
      }); 
      return { CourseAllVideo, loading, refetch };
    };

export default useCourseVideo;

