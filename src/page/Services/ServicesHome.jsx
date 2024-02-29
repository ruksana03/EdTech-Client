import QuizContest from "./QuizContest";
import AdditionalPart from "./additional/AdditionalPart";
import ChildrenEduHome from "./children education/ChildrenEduHome";


const ServicesHome = () => {
    return (
        <div className="py-20 ">
            {/* <QuizContest /> */}
            <ChildrenEduHome />
            <AdditionalPart />
        </div>
    );
};

export default ServicesHome;