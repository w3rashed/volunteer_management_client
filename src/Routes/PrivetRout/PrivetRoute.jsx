import { useContext } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-spinner text-info flex mx-auto  h-screen items-center"></span>
    );
  }
  if (user) {
    return children;
  }
 
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
