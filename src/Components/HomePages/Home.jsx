import { Helmet } from "react-helmet";
import OurVolunteers from "./OurVolunteers";
import Slider from "./Slider";
import UpcomDeadlineCards from "./UpcomDeadlineCards";
import Mission from "./Mission";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home_EngageEase</title>
      </Helmet>
      <Slider></Slider>
      <Mission></Mission>
      <UpcomDeadlineCards></UpcomDeadlineCards>
      <OurVolunteers></OurVolunteers>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
