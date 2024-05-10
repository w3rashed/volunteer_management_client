import { useContext } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner text-info flex mx-auto  h-screen items-center"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
