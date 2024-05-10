import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import MyPostRow from "./MyPostRow";
import Swal from "sweetalert2";

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

  

  // delete post
  const hadleDeletePost = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axios.delete(
          `http://localhost:5000/volunteer_post/${id}`
        );
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure Deleted!",
            text: "Your Post has been deleted.",
            icon: "success",
          });
          const remaining = lodedData.filter((data) => data._id !== id);
          setLodedData(remaining);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

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
              {lodedData.map((data, idx) => (
                <MyPostRow
                  key={data._id}
                  data={data}
                  idx={idx}
                  
                  hadleDeletePost={hadleDeletePost}
                ></MyPostRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
