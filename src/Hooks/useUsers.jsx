/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";


const useUsers = () => {
    const { data: AllUsers = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['AllUsers'],
        queryFn: async () => {
          const res = await axiosSecure('/users');
          return res.data;
        },
      });
    

      return { AllUsers, loading, refetch };
    };

export default useUsers;
