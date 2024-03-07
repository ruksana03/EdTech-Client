import BannerA from "../../components/homeComponents/BannerA";
import ShowAdvise from "../../components/shared/ShowAdvise";
import About from "./About";
import Faq from "./Faq";
import Intro from "./Intro/Intro";
import Popular from "./Popular";
import Reviews from "./Reviews";
import Team from "./Team";
import Teacher from "./joining  teacher/Teacher";
import GetOfferData from "./showCountDownOffer/GetOfferData";

const Home = () => {
  return (
    <div>
      <ShowAdvise />
      <BannerA />
      <GetOfferData/>
      <Popular />
      <About />
      <Intro />
      <Team />
      <Teacher />
      <Reviews />
      <Faq />
    </div>
  );
};
export default Home;
