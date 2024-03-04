import  { useEffect, useState } from 'react';
import ShowCountDown from './ShowCountDown';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const GetOfferData = () => {
    const [offerData, setOfferData] = useState(null);
    // console.log(offerData);
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

    // console.log("Received offerData:", offerData);

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