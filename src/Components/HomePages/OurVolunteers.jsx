import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const OurVolunteers = () => {
  return (
    <div>
      <div className="text-center mt-20 mb-10">
        <h2 className="font-bold text-3xl">List Of Our Volunteers</h2>
        <p className="w-[70%] mx-auto">
          Meet our selfless volunteers, the backbone of our community. Their
          dedication and passion drive positive change, making a lasting
          difference in countless lives.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* card-1 */}
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border p-5 hover:shadow-lg duration-300"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
              className="w-14 h-14"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Ibrahim Hassan</Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography>Community Ambassador</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Our Community Ambassadors are the friendly faces and
              passionate voices connecting our organization with the community.
              They spread awareness, build relationships, and inspire others to
              get involved, creating a stronger, more vibrant community for
              all.&quot;
            </Typography>
          </CardBody>
        </Card>
        {/* card-2 */}
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border p-5 hover:shadow-lg duration-300"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://i.ibb.co/kgQzp9q/image.png"
              className="w-16 h-14"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Ahmed Said</Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography>Outreach Coordinator</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot; As our Outreach Coordinator, you're the driving force
              behind expanding our reach and impact. You lead efforts to connect
              with communities, build partnerships, and spread awareness,
              ensuring our mission reaches those who need it most.&quot;
            </Typography>
          </CardBody>
        </Card>
        {/* -------------------------- */}
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border p-5 hover:shadow-lg duration-300"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://i.ibb.co/3z7x6sQ/image.png"
              className="w-16 h-14"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Zara Abbas</Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography>Event Organizer</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;As our Event Organizer, you orchestrate unforgettable
              experiences that bring our community together. From conception to
              execution, you handle every detail, ensuring seamless events that
              inspire, educate, and unite us toward our shared goals.&quot;
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border p-5 hover:shadow-lg duration-300"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://i.ibb.co/B6qkGVR/image.png"
              className="w-16 h-14"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Faridah Rahman</Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography>Social Media Manager</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;As our Social Media Manager, you're the voice of our
              organization in the digital world. You craft compelling content,
              engage our audience, and foster meaningful connections across
              platforms, amplifying our message and impact with every
              post.&quot;
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border p-5 hover:shadow-lg duration-300"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://i.ibb.co/hBb7YkW/image.png"
              className="w-14 h-14"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Hassan Ali</Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography>Volunteer Coordinator</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;As our Volunteer Coordinator, you're the heartbeat of our
              volunteer program. You recruit, train, and support our volunteers,
              matching their skills and passions with opportunities that drive
              our mission forward. Your dedication ensures our volunteers feel
              valued and empowered, creating a vibrant community of
              change-makers.&quot;
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border p-5 hover:shadow-lg duration-300"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://i.ibb.co/dMfHr7g/image.png"
              className="w-14 h-14"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Ahmed Said</Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography>Fundraising Champion</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Description: As our Fundraising Champion, you lead the
              charge in securing vital resources to fuel our mission. With
              creativity and determination, you inspire donors, organize
              campaigns, and cultivate partnerships, ensuring our organization
              has the support it needs to make a lasting impact.&quot;
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default OurVolunteers;
