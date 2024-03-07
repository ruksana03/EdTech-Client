import { useEffect, useState } from "react";
import Cards from "../../../components/Cards";

const Recommended = () => {
  const [discounts, setDiscounts] = useState([]);

  // handle side effects
  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => {
        setDiscounts(data);
      });
  }, []);
  
  return (
    <div className="mt-20 text-center">
    <div className="max-w-3xl mx-auto mb-8">
      <p className="mb-4 headtext__cormorant">Limited Time Offer!</p>
      <p className="p__cormorant font-alt">
        Enroll in our recommended courses now and unlock exclusive discounts.
      </p>
    </div>
     
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {discounts?.map(item => <Cards key={item._id} item={item}></Cards>)}
    </div>
  </div>
  );
};

export default Recommended;
