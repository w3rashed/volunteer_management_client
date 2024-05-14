import { Helmet } from "react-helmet";
import OurVolunteers from "./OurVolunteers";

import UpcomDeadlineCards from "./UpcomDeadlineCards";
import Mission from "./Mission";
import Sponsor from "./Sponsor";
import NewSlider from "./NewSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home_EngageEase</title>
      </Helmet>
      <NewSlider></NewSlider>
      <Mission></Mission>
      <UpcomDeadlineCards></UpcomDeadlineCards>
      <OurVolunteers></OurVolunteers>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
