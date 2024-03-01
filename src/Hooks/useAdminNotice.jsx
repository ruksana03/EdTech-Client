/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useAdminNotice = () => {
    const { data: AllAdminNotice = [], isLoading: loading, refetch } = useQuery({
                queryKey: ['AllAdminNotice'],
                queryFn: async () => {
                  const res = await axiosSecure('/all-admin-notices');
                  return res.data;
                },
              }); 
              return { AllAdminNotice, loading, refetch };
            };
        
export default useAdminNotice;