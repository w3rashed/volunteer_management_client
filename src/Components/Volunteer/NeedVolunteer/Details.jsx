import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider_&_Firebase/AuthProvider";

//
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const Details = () => {
  const data = useLoaderData();
  const [upData, setUpData] = useState();
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date(data?.deadline));

  // console.log(neededVolunteer);
  console.log(upData);
  console.log(data);
  // console.log(user);
  const date = new Date(data?.deadline);
  date.setDate(date?.getDate() + 1);
  const updatedDateString = date?.toISOString();

  const handleBeVolunteer = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Volunteer Request Already full!",
    });
  };

  // -----------------------------------
  // get all data
  useEffect(() => {
    axios
      .get(`https://volunteer-management-server-two.vercel.app/details/${id}`)
      .then((res) => setUpData(res.data.volunteersNeeded));
  }, [id]);

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestions = form.suggestions.value;
    const status = form.status.value;
    const name = user.displayName;
    const email = user.email;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const beAVolunteer = {
      suggestions,
      deadline,
      title,
      status,
      name,
      email,
      postId: data._id,
    };
    console.log(beAVolunteer);
    if (upData < 1) {
      return Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Volunteer request already full",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // update needed volunteer
    axios
      .patch(
        `https://volunteer-management-server-two.vercel.app/updateChanges/${data._id}`
      )
      .then((res) => {
        console.log(res);

        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully added request",
            showConfirmButton: false,
            timer: 1500,
          });
          axios
            .get(
              `https://volunteer-management-server-two.vercel.app/details/${id}`
            )
            .then((res) => setUpData(res.data.volunteersNeeded));
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .patch(
        `https://volunteer-management-server-two.vercel.app/be_volunteer`,
        beAVolunteer
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Details_EngageEase</title>
      </Helmet>
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
                className="hover:border-b-2 hover:duration-300 border-[#2ECC71]"
              >
                Need Volunteer
              </Link>{" "}
              <span>/</span>{" "}
              <Link className="border-b-2 font-bold text-[#2ECC71] border-[#2ECC71]">
                Details
              </Link>
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
              {upData}
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
            {upData < 1 ? (
              <>
                <button
                  onClick={handleBeVolunteer}
                  className="mt-10 btn bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500"
                >
                  Be a Volunteer
                </button>
              </>
            ) : (
              <button
                className="btn mt-10 bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Be a Volunteer
              </button>
            )}
            {/* ----------------------------------------------------------- */}

            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle "
              >
                <div className="modal-box ">
                  <form onSubmit={handleRequest}>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 overflow-hidden">
                      <div className="grid gap-4">
                        <Input
                          type="text"
                          name="name"
                          className="grow "
                          label="User Name"
                          defaultValue={user?.displayName}
                          readOnly
                        />
                        <Input
                          type="email"
                          name="email"
                          className="grow"
                          label="User Email"
                          defaultValue={user?.email}
                          readOnly
                        />
                        <Input
                          type="text"
                          name="title"
                          className=" py-[20px]"
                          defaultValue={data.title}
                          label="Enter your post title"
                          readOnly
                        />
                        <Input
                          type="text"
                          name="location"
                          className="grow"
                          label="Enter your location"
                          defaultValue={data.location}
                          readOnly
                        />
                        <Input
                          type="number"
                          name="volunteersNeeded"
                          className="grow"
                          label="Enter No. of volunteers needed"
                          defaultValue={upData}
                          readOnly
                        />
                        <Input
                          type="text"
                          name="photo_url"
                          defaultValue={data.thumbnail}
                          className="input input-bordered w-full  "
                          label="Thumbnail"
                          readOnly
                        />
                      </div>
                      {/* right */}
                      <div className=" flex flex-col gap-3">
                        <div className="-mt-4">
                          <div className="label">
                            <span className="label-text">Deadline</span>
                          </div>
                          <div className="input input-bordered w-full h-10 flex items-center">
                            <DatePicker
                              showIcon
                              disabled
                              name="deadline"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              icon={
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 48 48"
                                >
                                  <mask id="ipSApplication0">
                                    <g
                                      fill="none"
                                      stroke="#fff"
                                      strokeLinejoin="round"
                                      strokeWidth="4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        d="M40.04 22v20h-32V22"
                                      ></path>
                                      <path
                                        fill="#fff"
                                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                      ></path>
                                    </g>
                                  </mask>
                                  <path
                                    fill="currentColor"
                                    d="M0 0h48v48H0z"
                                    mask="url(#ipSApplication0)"
                                  ></path>
                                </svg>
                              }
                            />
                          </div>
                        </div>
                        <label className="form-control w-full -mt-4 ">
                          <div className="label">
                            <span className="label-text">Category</span>
                          </div>

                          <select
                            name="category"
                            defaultValue={data.category}
                            disabled
                            className="input input-bordered h-10 w-full  "
                          >
                            <option value="">Category</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Social service">
                              Social service
                            </option>
                            <option value="Animal welfare">
                              Animal welfare
                            </option>
                          </select>
                        </label>
                        <label className="form-control flex-1">
                          <div className="label">
                            <span className="label-text">Description</span>
                          </div>
                          <textarea
                            disabled
                            className="textarea textarea-bordered h-full "
                            placeholder="Bio"
                            defaultValue={data.description}
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-center my-6">
                        suggestions and Request
                      </p>
                      <div className="flex gap-6 mb-6">
                        {" "}
                        <Input
                          type="text"
                          name="suggestions"
                          className="input input-bordered w-full  "
                          label="suggestions"
                        />
                        <Input
                          type="text"
                          name="status"
                          defaultValue="Requested"
                          className="input input-bordered w-full  "
                          label="Status"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="modal-action">
                      <button
                        className="px-8 py-2.5 w-full mt-5 leading-5 border rounded-md   bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500"
                        onClick={() => {
                          const modal = document.getElementById("my_modal_5");
                          modal.close();
                        }}
                      >
                        Request
                      </button>
                    </div>
                  </form>
                  <div className="modal-action flex justify-center w-full">
                    <form method="dialog" className="w-full">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn w-full">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Details;
