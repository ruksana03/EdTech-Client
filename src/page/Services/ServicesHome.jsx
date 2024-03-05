import BeAPartner from "./BeAPartner";
import BeATeacher from "./BeATeacher";
import QuizContest from "./QuizContest";
import ServicesBanner from "./ServicesBanner";
import OurAchivement from "./achivement/OurAchivement";
import AdditionalPart from "./additional/AdditionalPart";
import ChildrenEduHome from "./children education/ChildrenEduHome";


const ServicesHome = () => {
    return (
        <div className="py-20 ">
            <ServicesBanner />
             <div className="py-20">
                <QuizContest />
                <BeAPartner />
                <BeATeacher />
            </div>
             {/* <QuizContest /> */}
            <OurAchivement />
            <ChildrenEduHome />
            <AdditionalPart />
          
        </div>
    );
};

export default ServicesHome;