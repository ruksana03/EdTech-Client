import { useTranslation } from "react-i18next";
import useMember from "../../Hooks/useMember";

const Team = () => {
  const { t } = useTranslation('global');
  const { AllMember } = useMember();
  return (
    <div className="my-16 section-container">
      <div className="space-y-3 dark:text-gray-400 text-center">
        <h2 className="headtext__cormorant "> {t('team.title')}</h2>
        <h4 className="p__cormorant">
          {t('team.description')}
        </h4>
      </div>


      <div className="grid grid-cols-4 gap-4 mt-12">
        {AllMember.map(member => (
          <div
            key={member.id} // Make sure to add a unique key for each mapped element
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="border card border-first p-6 shadow-md"
          >
            <img
              src={member.profilePicture} // Use the member's profilePicture from the data
              className="w-16 h-16 rounded-full mx-auto"
              alt={member.name} // You can use the member's name as alt text
            />
            <h3 className="text-center p__cormorant font-medium mt-1">{member.memberName}</h3> {/* Use the member's name */}
            <p className="font-medium p__cormorant text-center">{member.designation}</p> {/* Use the member's designation */}
          </div>
        ))}
      </div>
    </div>

  );
};
export default Team;
