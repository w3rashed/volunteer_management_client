import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Input } from "@material-tailwind/react";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleAddPost = (e) => {
    e.preventDefault();

    const form = e.target;
    const thumbnail = form.photo_url.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const deadline = form.deadline.value;
    const name = form.name.value;
    const email = form.email.value;

    const post = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
      name,
      email,
    };
    console.log(post);
    axios
      .post("http://localhost:5000/volunteer_post", post)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          toast.success("Successfully added post", {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleAddPost} className="grid gap-4">
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
                placeholder="Enter your post title"
                label="Enter your post title"
              />
              <label className="form-control w-full -mt-4 ">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>

                <select
                  name="category"
                  className="input input-bordered h-10 w-full  "
                >
                  <option value="">Category</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Social service">Social service</option>
                  <option value="Animal welfare">Animal welfare</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4">
              <Input
                type="text"
                name="description"
                className="grow"
                label="Enter your Description"
              />
              <Input
                type="text"
                name="location"
                className="grow"
                label="Enter your location"
              />
              <Input
                type="number"
                name="volunteersNeeded"
                className="grow"
                label="Enter No. of volunteers needed"
              />

              <div className="-mt-4">
                <div className="label">
                  <span className="label-text">Deadline</span>
                </div>
                <div className="input input-bordered w-full h-10 flex items-center">
                  <DatePicker
                    showIcon
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
            </div>
          </div>
          <Input
            type="text"
            name="photo_url"
            placeholder="Enter photo url"
            className="input input-bordered w-full "
            label="Thumbnail"
          />

          <input className="btn" type="submit" value="Post" />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
