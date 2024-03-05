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
    const specifcRoutine1 = currentForRoutine[0]?.title.toString();
    const specifcRoutine2 = currentForRoutine[1]?.title.toString();
    const specifcRoutine3 = currentForRoutine[2]?.title.toString();
    const specifcRoutine4 = currentForRoutine[3]?.title.toString();
    const specifcRoutine5 = currentForRoutine[4]?.title.toString();


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


    const { data: events, refetch } = useQuery({
        queryKey: [specifcRoutine4, 'forCourses'],
        queryFn: async () => {
            // const specific = await axiosPublic.get(`/rutines-for?forCourses="C++"`);
            // console.log("find one data", specific);
            const res1 = await axiosPublic.get(`/rutines-for?forCourses=${specifcRoutine1}`);
            const res2 = await axiosPublic.get(`/rutines-for?forCourses=${specifcRoutine2}`);
            const res3 = await axiosPublic.get(`/rutines-for?forCourses=${specifcRoutine3}`);
            const res4 = await axiosPublic.get(`/rutines-for?forCourses=${specifcRoutine4}`);
            const res5 = await axiosPublic.get(`/rutines-for?forCourses=${specifcRoutine5}`);
            const addRoutine = [...res1.data, ...res2.data, ...res3.data, ...res4.data, ...res5.data];
            return addRoutine;
        }
    })

    return [events, refetch];
};


export default useStudentRoutine;