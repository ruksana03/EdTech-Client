// Import necessary libraries
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
// import { MdDelete } from "react-icons/md";
// import toast from "react-hot-toast";

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

  //   const deletePartner = async (id) => {
  //     try {
  //       const { data } = await axiosPublic.delete(`/partners/delete/${id}`);

  //       if (data.deletedCount === 1) {
  //         await refetch();
  //         toast.success("partner deleted successfully");
  //       }
  //     } catch (error) {
  //       console.error("Error deleting partner:", error);
  //       toast.error("Failed to delete partner");
  //     }
  //   };

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
    </div>
  );
};

// Export the Subscriber component
export default Partners;
