// import Banner from "../../components/Banner";
import BannerA from "../../components/homeComponents/BannerA";
// import Category from "../../components/homeComponents/Category";
import About from "./About";
import Faq from "./Faq";
import NewsLetter from "./Newsletter";
import Popular from "./Popular";
import Reviews from "./Reviews";
import Team from "./Team";
import Teacher from "./joining  teacher/Teacher";


const Home = () => {
  return (
    <div >
      <BannerA/>
      {/* <Category/> */}
      {/* <Banner /> */}
      <Popular />
      <About />
      <Team/>
      <Teacher />
      <Reviews />
      <Faq/>
      <NewsLetter/>
    </div>
  );
};
export default Home;