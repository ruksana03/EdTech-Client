// import Banner from "../../components/Banner";
import BannerA from "../../components/homeComponents/BannerA";
// import Category from "../../components/homeComponents/Category";
import About from "./About";
import NewsLetter from "./Newsletter";
import Popular from "./Popular";
import Reviews from "./Reviews";
import Teacher from "./joining  teacher/Teacher";


const Home = () => {
  return (
    <div >
      <BannerA/>
      {/* <Category/> */}
      {/* <Banner /> */}
      <Popular />
      <About/>
      <Teacher />
      <Reviews/>
      <NewsLetter/>
    </div>
  );
};
export default Home;