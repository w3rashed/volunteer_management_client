import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";

const NeedVolunteer = () => {
  const { setLoading } = useContext(AuthContext);
  axios
    .get("http://localhost:5000/volunteer_post")
    .then((res) => {
      setLoading(true);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <h2>NeedVolunteer</h2>
    </div>
  );
};

export default NeedVolunteer;
