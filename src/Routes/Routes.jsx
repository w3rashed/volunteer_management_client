import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/HomePages/Home";
import Login from "../Components/User/Login";

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
    ],
  },
]);

export default Routes;
