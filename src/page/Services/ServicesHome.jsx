import BeAPartner from "./BeAPartner";
import BeATeacher from "./BeATeacher";
import QuizContest from "./QuizContest";
import ServicesBanner from "./ServicesBanner";
import AdditionalPart from "./additional/AdditionalPart";
import ChildrenEduHome from "./children education/ChildrenEduHome";


const ServicesHome = () => {
    return (
        <div className="p__cormorant ">
        <div className="py-20 ">
            <ServicesBanner />
             <div className="py-20">
                <QuizContest />
                <BeAPartner />
                <BeATeacher />
            </div>
             {/* <QuizContest /> */}
            <ChildrenEduHome />
            <AdditionalPart />
          
        </div>
        </div>
    );
};

export default ServicesHome;