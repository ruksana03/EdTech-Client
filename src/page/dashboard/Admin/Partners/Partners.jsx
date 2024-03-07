// Import necessary libraries
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import PartnerSkeleton from "./PartnerSkeleton";

// Define the partner component
const Partners = () => {
  const axiosPublic = useAxiosPublic();
  // Fetch partners data using useQuery
  const { data: partners = [] } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/partner-applications");
      return res.data;
    },
  });

  // Return JSX for the Subscriber component
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {partners.map((partner) => (
          <div
            key={partner._id}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="relative mt-8 py-3 w-full max-w-xs overflow-hidden rounded-lg   bg-black   dark:border-white shadow-xl   mx-4 border border-gray-200  "
          >
            <img
              className="h-20 w-20 rounded-full text-center mx-auto  "
              src={partner.profile_photo}
              alt="partner image"
            />

            <div className="mt-4 px-5 pb-5">
              <h5 className="  tracking-tight p__cormorant whitespace-nowrap">
                Name: {partner.fullName}
              </h5>

              <h5 className="  tracking-tight p__cormorant whitespace-nowrap">
                {partner.email}
              </h5>
              <h5 className="  tracking-tight p__cormorant whitespace-nowrap">
                phone:{partner.phoneNumber}
              </h5>

              <div className="flex items-center justify-between">
                <p>
                  <span className="text-xl font-semibold p__opensans">
                    organization: {partner.organization}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
        {
          partners?.length <= 0 && <PartnerSkeleton partners={ 4 || partners?.length} />
        }
      </div>
    </div>
  );
};

export default Partners;
