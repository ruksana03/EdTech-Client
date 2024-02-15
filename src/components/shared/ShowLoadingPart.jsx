import Skeleton from "react-loading-skeleton";

const ShowLoadingPart = () => {
    const wrapped1 = <Skeleton wrapper={Box} count={5} />;
    return (
        <Box>
            <Skeleton />
        </Box>
    );
};

export default ShowLoadingPart;