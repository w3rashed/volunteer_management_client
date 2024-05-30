import { Helmet } from "react-helmet";
import OurVolunteers from "./OurVolunteers";

import UpcomDeadlineCards from "./UpcomDeadlineCards";
import Mission from "./Mission";
import Sponsor from "./Sponsor";
import NewSlider from "./NewSlider";
import Donate from "./Donate/Donate";

const Home = () => {
  return (
    <div className="z-0">
      <Helmet>
        <title>Home_EngageEase</title>
      </Helmet>
      <NewSlider></NewSlider>
      <Mission></Mission>
      <UpcomDeadlineCards></UpcomDeadlineCards>
      <Donate></Donate>
      <OurVolunteers></OurVolunteers>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
