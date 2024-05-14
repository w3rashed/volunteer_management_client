import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  return (
    <div className="px-5">
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-445px)] container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
