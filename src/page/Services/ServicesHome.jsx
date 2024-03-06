import GetOfferData from "../home/showCountDownOffer/GetOfferData";
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
                <div className=" text-black">
                    <GetOfferData />
                    <div className="my-20">
                        <QuizContest />
                    </div>
                    <BeAPartner />
                    <BeATeacher />
                </div>
                <ChildrenEduHome />
                <AdditionalPart />

            </div>
        </div>
    );
};

export default ServicesHome;