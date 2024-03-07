import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useSelector } from "react-redux";

const useCart = () => {
    const axiosPublic = useAxiosPublic()
    const user = useSelector((state) => state.data.user.user);
    const {refetch, data:cart=[] } = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};
export default useCart;