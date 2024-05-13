import OurVolunteers from "./OurVolunteers";
import Slider from "./Slider";
import UpcomDeadlineCards from "./UpcomDeadlineCards";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <UpcomDeadlineCards></UpcomDeadlineCards>
      <OurVolunteers></OurVolunteers>
    </div>
  );
};

export default Home;
