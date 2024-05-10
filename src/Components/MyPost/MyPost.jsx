import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import MyPostRow from "./MyPostRow";

const MyPost = () => {
  const { setLoading, user } = useContext(AuthContext);
  const [lodedData, setLodedData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/volunteer_post?email=${user?.email}`)
      .then((res) => {
        //   console.log(res.data);
        setLoading(false);
        setLodedData(res.data);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, [user]);

  return (
    <div>
      data:{lodedData.length}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="text-base">
                <th></th>
                <th>Title</th>
                <th>category</th>
                <th> Organizer name</th>
                <th> Organizer email</th>
                <th> Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {lodedData.map((data,idx) => (
                <MyPostRow key={data._id} data={data} idx={idx}></MyPostRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
