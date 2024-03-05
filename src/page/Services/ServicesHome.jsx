import GetOfferData from "../home/showCountDownOffer/GetOfferData";
import BeAPartner from "./BeAPartner";
import BeATeacher from "./BeATeacher";
import QuizContest from "./QuizContest";
import ServicesBanner from "./ServicesBanner";
import OurAchivement from "./achivement/OurAchivement";
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
                {/* <QuizContest /> */}
                <ChildrenEduHome />
                <AdditionalPart />

            </div>
             {/* <QuizContest /> */}
            <OurAchivement />
            <ChildrenEduHome />
            <AdditionalPart />
        </div>
    );
};

export default ServicesHome;