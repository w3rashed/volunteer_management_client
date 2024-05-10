import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

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
    const deadline = form.deadline.value;
    const name = form.name.value;
    const email = form.email.value;

    const post = {
      thumbnail,
      title,
      description,
      category,
      location,
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
      <h2>add post</h2>

      <div>
        <form onSubmit={handleAddPost}>
          {/* a */}
          <label className="form-control  ">
            <div className="label">
              <span className="label-text ">Thumbnail</span>
            </div>
            <input
              type="text"
              name="photo_url"
              placeholder="Enter photo url"
              className="input input-bordered w-full "
            />
          </label>
          {/* a */}
          <div>
            <div className="label">
              <span className="label-text">Post Title</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="title"
                className="grow"
                placeholder="Enter your post title"
              />
            </label>
          </div>
          <div>
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="description"
                className="grow"
                placeholder="Enter your Description"
              />
            </label>
          </div>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>

            <select name="category" className="input input-bordered w-full  ">
              <option value="">Select one ----</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social service">Social service</option>
              <option value="Animal welfare">Animal welfare</option>
            </select>
          </label>
          <div>
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="location"
                className="grow"
                placeholder="Enter your location"
              />
            </label>
          </div>
          {/* date picker */}
          <div>
            <div className="label">
              <span className="label-text">Deadline</span>
            </div>
            <div className="input input-bordered w-full flex items-center">
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
          <div>
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                disabled
                type="text"
                name="name"
                className="grow"
                placeholder="Enter your location"
                defaultValue={user?.displayName}
              />
            </label>
          </div>
          <div>
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                disabled
                type="email"
                name="email"
                className="grow"
                placeholder="Enter your location"
                defaultValue={user?.email}
              />
            </label>
          </div>
          <input className="btn" type="submit" value="Post" />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
