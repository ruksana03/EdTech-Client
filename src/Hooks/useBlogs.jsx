/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";

const useBlogs = () => {
  const { data: AllBlogs = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['AllBlogs'],
    queryFn: async () => {
      const res = await axiosSecure('/blogs');
      return res.data;
    },
  });
  return { AllBlogs, loading, refetch };
};

export default useBlogs;