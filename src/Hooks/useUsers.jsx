/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useUsers = () => {
    const { data: AllUsers = [], refetch,isLoading} = useQuery({
        queryKey: ['AllUsers'],
        queryFn: async () => {
          const res = await axiosSecure('/users');
          if(res.data.length > 0) {
          //  return setLoading(false);
          }
          return res.data;
        },
      });
      return { AllUsers, refetch,isLoading };
    };

export default useUsers;
