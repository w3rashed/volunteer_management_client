import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const UpcomDeadlineCards = () => {
  const [lodedData, setLodedData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/sort_post")
      .then((res) => setLodedData(res.data.slice(0, 6)));
  }, []);
  console.log(lodedData);
  return (
    <div className="mt-20">
      <div className="text-center mb-8">
        <h6 className="text-[#bf0a30] font-bold text-xl">Our Posts</h6>
        <h3 className="font-bold text-3xl">Up Comming Deadline Posts</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lodedData.map((data) => (
          <div key={data._id}>
            <Card className="mt-8 hover:border-b-8 hover:duration-500 hover:border-[#bf0a30]">
              <CardHeader color="blue-gray" className="relative  h-[300px]">
                <img src={data.thumbnail} alt="card-image" />
              </CardHeader>
              <CardBody>
                <div className="flex  justify-between">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {data.title}
                  </Typography>
                  <Typography>
                    {" "}
                    <span className="font-semibold">Deadline:</span>
                    {data.deadline.split("T")[0]}
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
                  <Link to={`/details/${data._id}`} className=" btn ">
                    <button className="border">View Details</button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomDeadlineCards;
