import { useContext } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  return <div></div>;
};

export default PrivetRoute;
