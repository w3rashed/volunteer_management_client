import { Helmet } from "react-helmet";
import { Link, useRouteError } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>Error-DiscoverHaven</title>
      </Helmet>
      <div className="flex justify-center items-center h-[70vh]">
        <div id="error-page" className="text-center">
          <h1 className="font-bold text-3xl">Oops!</h1>
          <p className="my-2">Sorry, an unexpected error has occurred.</p>
          <p className="flex gap-2 justify-center text-xl items-center mb-6">
            <span className="font-bold text-3xl">{error.status} :</span>
            {error.statusText || error.message}
          </p>
          <Link
            className="py-4 bg-[#ff5a5f] text-white text-lg px-8 rounded-xl hover:bg-transparent 
            hover:text-[#ff5a5f] hover:border-2 hover:border-[#ff5a5f] duration-500"
            to="/"
          >
            Go back
          </Link>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default ErrorPage;
