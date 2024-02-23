// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// // import useAxiosPublic from './useAxiosPublic';

// const useGetAllPdf = () => {
//     // const axiosPublic=useAxiosPublic()
//     const { data: allPdf = [], isLoading: loading, refetch } = useQuery({
//         queryKey: ["allPdf"],
//         queryFn: async () => {
//             const res = await axios.get("/get-pdf");
//             return res.data; // Corrected this line
//         }
//     });
//     console.log("this get all  pdf in axios", allPdf);
//     return [allPdf, loading, refetch]; // Changed return format to an array
// };

// export default useGetAllPdf;