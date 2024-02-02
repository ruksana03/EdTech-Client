import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useNoticeSearch = (search) => {
    const axiosSecure = useAxiosSecure();
    const [noticesData, setNoticesData] = useState([]);
    useEffect(() => {
        axiosSecure(`/notices-query?search=${search}`)
            .then(res => setNoticesData(res.data))
    }, [search, axiosSecure]);
    return noticesData;
};

export default useNoticeSearch;