import { useEffect, useState } from 'react';
import ShowCountDown from './ShowCountDown';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const GetOfferData = () => {
    const [offerData, setOfferData] = useState(null);
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get("/get-offers")
            .then(response => {
                setOfferData(response.data);
            })
            .catch(error => {
                console.error("Error fetching offer data:", error);
            });
    }, []);

    if (!offerData) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <ShowCountDown offerData={offerData} />
        </div>
    );
};

export default GetOfferData;