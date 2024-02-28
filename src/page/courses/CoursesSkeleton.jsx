import { FaRegImage } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

const CoursesSkeleton = ({cards}) => {
    return (
            Array(cards).fill(0).map((_, index) => <div key={index} className="card-skelton w-full h-[260px] ">
                <div className="left-img relative">
                    <FaRegImage className="absolute left-28 top-24 text-6xl text-[#525252] z-10 " />
                    <Skeleton height={260} borderRadius={10}>
                    </Skeleton>
                </div>
            </div>)
    );
};

export default CoursesSkeleton;