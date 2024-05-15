import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Zoom } from "react-awesome-reveal";
const Mission = () => {
  return (
    <div className="mt-20 ">
      <Zoom duration={2000}>
        <h2 className="font-bold text-3xl text-center w-1/2 mx-auto">
          We’ve Funded 120,00 Charity Projects For 20m+ People Around The World.
        </h2>
      </Zoom>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        <Zoom duration={2000} delay={100}>
          <Card
            color="transparent"
            className=" hover:shadow-lg duration-300 h-full"
          >
            <CardHeader
              color="transparent"
              floated={false}
              className="flex h-48 justify-center items-center border-none shadow-none"
            >
              <img
                src="https://i.ibb.co/KhYd3Ym/image.png"
                alt="profile-picture"
                className=" scale-125 hover:scale-150 duration-700"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2">
                Healty Food For Poor People
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Our initiative combats food insecurity by distributing fresh
                produce and promoting healthy eating habits in economically
                disadvantaged areas. Join us in ensuring everyone has access to
                nourishing food, regardless of financial circumstances.
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
        <Zoom duration={2000} delay={300}>
          <Card
            color="transparent"
            className=" hover:shadow-lg duration-300 h-full"
          >
            <CardHeader
              color="transparent"
              floated={false}
              className="flex h-48 justify-center items-center border-none shadow-none"
            >
              <img
                src="https://i.ibb.co/G3xtP3F/image.png"
                alt="profile-picture"
                className=" scale-125 hover:scale-150 duration-700"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2">
                Pure Water For Poor People
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Our project addresses water scarcity among impoverished
                populations. By installing filtration systems and promoting
                hygiene education, we aim to provide clean, safe water to those
                in need. Join us in ensuring everyone has access to this
                fundamental resource.
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
        <Zoom duration={2000} delay={500}>
          <Card
            color="transparent"
            className=" hover:shadow-lg duration-300 h-full"
          >
            <CardHeader
              color="transparent"
              floated={false}
              className="flex h-48 justify-center items-center border-none shadow-none"
            >
              <img
                src="https://i.ibb.co/RhWgb85/image.png"
                alt="profile-picture"
                className=" scale-125 hover:scale-150 duration-700"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2">
                Medical Facilities For People
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Our initiative focuses on improving medical facilities for those
                in need. Through partnerships and advocacy, we work to expand
                access to healthcare services, ensuring everyone receives the
                medical attention they deserve, regardless of their economic
                status.
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
        <Zoom duration={2000} delay={700}>
          <Card
            color="transparent"
            className=" hover:shadow-lg duration-300 h-full"
          >
            <CardHeader
              color="transparent"
              floated={false}
              className="flex h-48 justify-center items-center border-none shadow-none"
            >
              <img
                src="https://i.ibb.co/CQCchmW/image.png"
                alt="profile-picture"
                className=" scale-125 hover:scale-150 duration-700"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" className="mb-2">
                Education For Every Children
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Our campaign is dedicated to ensuring that every child has
                access to quality education. Through advocacy, fundraising, and
                community partnerships, we strive to remove barriers to learning
                and provide opportunities for children worldwide to reach their
                full potential. Join us in building a brighter future for all.
              </Typography>
            </CardBody>
          </Card>
        </Zoom>
      </div>
    </div>
  );
};

export default Mission;
