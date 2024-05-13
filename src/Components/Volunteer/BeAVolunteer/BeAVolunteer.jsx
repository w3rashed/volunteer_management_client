import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { toast } from "react-toastify";

import { Input } from "@material-tailwind/react";
import { AuthContext } from "../../../AuthProvider_&_Firebase/AuthProvider";

const BeAVolunteer = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date(data.deadline));
  console.log(user);

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestions = form.suggestions.value;
    const status = form.status.value;
    const userName = user.displayName;
    const userEmail = user.email;
    const beAVolunteer = {
      suggestions,
      status,
      userName,
      userEmail,
      postId: data._id,
    };
    console.log(beAVolunteer);

    // update needed volunteer
    axios
      .patch(`http://localhost:5000/updateChanges/${data._id}`)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          toast.success("Successfully added request", {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .patch(`http://localhost:5000/be_volunteer`, beAVolunteer)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleRequest}>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
                defaultValue={data.volunteersNeeded}
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
                  <option value="Social service">Social service</option>
                  <option value="Animal welfare">Animal welfare</option>
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
            <p className="text-center my-6">suggestions and Request</p>
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
          <input className="btn w-full" type="submit" value="Request" />
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteer;
