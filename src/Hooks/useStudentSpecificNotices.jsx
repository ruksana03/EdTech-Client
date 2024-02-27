import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import { useSelector } from 'react-redux';

const useStudentSpecificNotices = () => {
    const axiosPublic = useAxiosPublic();
    const user = useSelector(state => state.data.user.user);
    const [currentForRoutine, setCurrentForRoutine] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/bookings?stEmail=${user.email}`)
                .then((res) => res.json())
                .then((data) => setCurrentForRoutine(data))
                .catch((error) =>
                    console.error("Error fetching enrolled courses:", error)
                );
        }
    }, [user]);
    const specifcNotices = currentForRoutine[0]?.title.toString();
    const {data:userNotices=[],refetch:studentRefetch, isLoading} = useQuery({
        queryKey:['userNotices'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/notice-user?sentForCourse=${specifcNotices}`)
            return res.data
        }
    });
    return [userNotices,studentRefetch,isLoading]
};

export default useStudentSpecificNotices;