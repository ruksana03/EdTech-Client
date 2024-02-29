/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useMember = () => {
    const { data: AllMember = [], isLoading: loading, refetch } = useQuery({
                queryKey: ['AllMember'],
                queryFn: async () => {
                  const res = await axiosSecure('/all-member');
                  return res.data;
                },
              });
            
        
              return { AllMember, loading, refetch };
            };
        
export default useMember;