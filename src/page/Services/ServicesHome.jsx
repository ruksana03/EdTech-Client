import BeAPartner from "./BeAPartner";
import BeATeacher from "./BeATeacher";
import QuizContest from "./QuizContest";
import AdditionalPart from "./additional/AdditionalPart";
import ChildrenEduHome from "./children education/ChildrenEduHome";


const ServicesHome = () => {
    return (
        <div className="py-20 ">
             <div className="py-20">
                <QuizContest />
                <BeAPartner />
                <BeATeacher />
            </div>
             {/* <QuizContest /> */}
            <ChildrenEduHome />
            <AdditionalPart />
          
        </div>
    );
};

export default ServicesHome;