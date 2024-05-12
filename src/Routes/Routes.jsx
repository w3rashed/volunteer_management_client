import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/HomePages/Home";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AddPost from "../Components/AddPost/AddPost";
import NeedVolunteer from "../Components/Volunteer/NeedVolunteer/NeedVolunteer";
import Details from "../Components/Volunteer/NeedVolunteer/Details";
import MyPost from "../Components/MyPost/MyPost";
import PrivetRoute from "./PrivetRout/PrivetRoute";
import UpdatePost from "../Components/MyPost/UpdatePost";
import BeAVolunteer from "../Components/Volunteer/BeAVolunteer/BeAVolunteer";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_post",
        element: <AddPost></AddPost>,
      },
      {
        path: "/need_Volunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/be_volunteer/:id",
        element: <BeAVolunteer></BeAVolunteer>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/my_post",
        element: (
          <PrivetRoute>
            <MyPost></MyPost>
          </PrivetRoute>
        ),
      },
      {
        path: "/update_post/:id",
        element: <UpdatePost></UpdatePost>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
