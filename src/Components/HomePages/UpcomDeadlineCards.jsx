import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const UpcomDeadlineCards = () => {
  const [lodedData, setLodedData] = useState([]);
  useEffect(() => {
    axios
      .get("https://volunteer-management-server-two.vercel.app/sort_post")
      .then((res) => setLodedData(res.data.slice(0, 6)));
  }, []);
  console.log(lodedData);
  return (
    <div className="mt-20">
      <div className="text-center mb-8">
        <Zoom duration={2000} delay={500}>
          <h6 className="text-[#2ECC71] font-bold text-xl">Our Posts</h6>
        </Zoom>
        <Zoom duration={2000} delay={600}>
          <h3 className="font-bold text-3xl">Volunteers Need Now</h3>
        </Zoom>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lodedData.map((data) => (
          <Zoom key={data._id} duration={2000} delay={500}>
            <div>
              <Card
                color="transparent"
                className="mt-8 hover:border-b-8 hover:duration-500 hover:border-[#2ECC71]"
              >
                <CardHeader color="blue-gray" className="relative  h-[300px]">
                  <img src={data.thumbnail} alt="card-image" />
                </CardHeader>
                <CardBody>
                  <div className="flex  justify-between">
                    <Typography variant="h5" className="mb-2 ">
                      {data.title}
                    </Typography>
                    <Typography>
                      {" "}
                      <span className="font-semibold">Deadline:</span>
                      {data.deadline?.split("T")[0]}
                    </Typography>
                  </div>
                  <div className="flex  justify-between">
                    <div>
                      <Typography className="flex">
                        <span className="font-semibold">Category:</span>{" "}
                        {data.category}
                      </Typography>
                      <Typography className="flex">
                        <span className="font-semibold">Volunteer Ndded:</span>{" "}
                        {data.volunteersNeeded}
                      </Typography>
                    </div>
                    <Link
                      to={`/details/${data._id}`}
                      className=" btn bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500"
                    >
                      <button>View Details</button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Zoom>
        ))}
      </div>
      <div className="flex justify-center  mt-10">
        <Zoom duration={2000} delay={700}>
          <Link to="/need_Volunteer">
            <button className="btn px-6 rounded-full bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500">
              See all posts
            </button>
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default UpcomDeadlineCards;
