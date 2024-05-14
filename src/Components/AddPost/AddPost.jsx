import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Input } from "@material-tailwind/react";
import { BsCalendar2Date } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const userPhoto = user?.photoURL;
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
      volunteersNeeded: Number(volunteersNeeded),
      deadline: new Date(deadline),
      name,
      email,
      userPhoto,
    };
    console.log(post);
    axios
      .post(
        "https://volunteer-management-server-two.vercel.app/volunteer_post",
        post,
        { withCredentials: true }
      )
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
      <Helmet>
        <title>Add post_EngageEase</title>
      </Helmet>
      <div
        className="hero min-h-[calc(100vh-400px)] mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/TqvLCbh/image.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl ">Add A new Post</h1>
            <div>
              <Link to="/" className="hover:border-b-2 hover:duration-300">
                Home
              </Link>{" "}
              <span>/</span>{" "}
              <Link className="border-b-2 font-bold">Add Post</Link>
            </div>
          </div>
        </div>
      </div>
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
                <div className="input input-bordered w-full h-10 flex items-center justify-between">
                  <DatePicker
                    name="deadline"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <BsCalendar2Date></BsCalendar2Date>
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
