<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";
const useBlogs = () => {
    
=======
/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
// import axiosSecure from "../api/axiosSecure";

import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";


// const useUsers = () => {
//     const { data: AllUsers = [], isLoading: loading, refetch } = useQuery({
//         queryKey: ['AllUsers'],
//         queryFn: async () => {
//           const res = await axiosSecure('/users');
//           return res.data;
//         },
//       });
    

//       return { AllUsers, loading, refetch };
//     };

// export default useUsers;



const useBlogs = () => {
>>>>>>> 72f7b8775a9ea5e8be44b511e5d36c611bf5917e
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