import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/HomePages/Home";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
