import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useStudentRoutine = () => {
    const user = useSelector(state => state.data.user.user);
    const [currentForRoutine, setCurrentForRoutine] = useState([])
    const axiosPublic = useAxiosPublic();

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
    const specifcRoutine = currentForRoutine[0]?.title.toString();
    console.log(specifcRoutine);
    const { data: events, refetch } = useQuery({
        queryKey: [specifcRoutine, 'forCourses'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/rutines-for?forCourses=${specifcRoutine}`);
            return res.data;
        }
    })

    return [events, refetch];
};


export default useStudentRoutine;