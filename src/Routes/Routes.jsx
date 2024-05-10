import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/HomePages/Home";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AddPost from "../Components/AddPost/AddPost";
import NeedVolunteer from "../Components/NeedVolunteer/NeedVolunteer";

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
