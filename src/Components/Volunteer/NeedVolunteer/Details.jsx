import { Link, useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const Details = () => {
  const data = useLoaderData();

  console.log(data);
  // console.log(user);
  const date = new Date(data.deadline);
  date.setDate(date.getDate() + 1);
  const updatedDateString = date.toISOString();

 

  return (
    <div className="">
      {/* banner */}
      <div
        className="hero min-h-[calc(100vh-400px)] mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/TqvLCbh/image.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl ">Post Details</h1>
            <div>
              <Link
                to="/need_Volunteer"
                className="hover:border-b-2 hover:duration-300"
              >
                Need Volunteer
              </Link>{" "}
              <span>/</span>{" "}
              <Link className="border-b-2 font-bold">Details</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Card
          color="transparent"
          className=" flex-col  lg:flex-row lg:h-[500px]"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0  shrink-0 rounded-r-none"
          >
            <img src={data.thumbnail} alt="card-image" className=" w-full " />
          </CardHeader>
          <CardBody className=" w-full ">
            <CardFooter className="flex  justify-between">
              <div className="flex items-center -space-x-3">
                <div className="flex gap-3 ">
                  <Tooltip content={data.name}>
                    <Avatar
                      size="xl"
                      variant="circular"
                      alt={data.name}
                      src={data.userPhoto}
                    />
                  </Tooltip>
                  <div>
                    <h2 className="font-black  text-2xl  ">{data.name}</h2>
                    <h2>{data.email}</h2>
                  </div>
                </div>
              </div>
              <Typography className="flex">
                <Typography variant="h6" className="">
                  DeadLine:
                </Typography>{" "}
                {updatedDateString.split("T")[0]}
              </Typography>
            </CardFooter>
            <Typography variant="h4" color="">
              {data.title}
            </Typography>
            {/* ------------- */}
            <Typography
              variant=""
              color="gray"
              className="mt-3 font-normal flex items-center"
            >
              <Typography variant="h6" className="">
                Needed volunteer:
              </Typography>
              {data.volunteersNeeded}
            </Typography>
            {/* ------------- */}
            <Typography
              variant=""
              color="gray"
              className="mt-3 font-normal flex items-center"
            >
              <Typography variant="h6" className="">
                Category:
              </Typography>
              {data.category}
            </Typography>
            {/* ------------- */}
            <Typography
              variant=""
              color="gray"
              className="mt-3 font-normal flex items-center"
            >
              <Typography variant="h6" className="">
                Location:
              </Typography>
              {data.location}
            </Typography>
            {/* ------------- */}
            <Typography variant="" color="gray" className="mt-3 font-normal">
              {data.description}
            </Typography>

            <Link
              to={`/be_volunteer/${data._id}`}
              className="flex justify-center"
            >
              <button className="mb-10 btn">Be a Volunteer</button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Details;
