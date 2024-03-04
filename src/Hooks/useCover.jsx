/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useCover = () => {
    const { data: AllCovers = [], isLoading: loading, refetch } = useQuery({
                queryKey: ['AllCovers'],
                queryFn: async () => {
                  const res = await axiosSecure('/All-photo');
                  return res.data;
                },
              }); 
              return { AllCovers, loading, refetch };
            };
        
export default useCover;