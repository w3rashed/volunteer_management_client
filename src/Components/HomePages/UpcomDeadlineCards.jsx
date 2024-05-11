import axios from "axios";
import { useEffect, useState } from "react";

const UpcomDeadlineCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/sort_post")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="mt-10">
      <div className="text-center">
        <h6>Our Posts</h6>
        <h3>Up Comming Deadline Posts</h3>
      </div>
    </div>
  );
};

export default UpcomDeadlineCards;
