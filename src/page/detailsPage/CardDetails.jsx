import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
 
import DetailsInfo from "./DetailsInfo";

const CardDetails = () => {
  const [detailInfo, setDetailInfo] = useState({})
    const loadedDetails = useLoaderData()
    
    useEffect(() => {
        if (loadedDetails) {
             setDetailInfo(loadedDetails)
         }
    }, [loadedDetails])
  console.log(detailInfo);
 
    
    
  return (
    <div>
          <div>
              <DetailsInfo key={detailInfo._id} detailInfo={detailInfo}></DetailsInfo>
       </div>
    </div>
  );
};
export default CardDetails;