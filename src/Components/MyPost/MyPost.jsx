import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import MyPostRow from "./MyPostRow";
import Swal from "sweetalert2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BevolunteerRow from "./BevolunteerRow";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const MyPost = () => {
  const { setLoading, user } = useContext(AuthContext);
  const [lodedData, setLodedData] = useState([]);
  const [beVolunteer, setBevolunteer] = useState([]);
  const url = `https://volunteer-management-server-two.vercel.app/volunteer_post?email=${user?.email}`;
  const url2 = `https://volunteer-management-server-two.vercel.app/be_volunteer?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        //   console.log(res.data);
        setLoading(false);
        setLodedData(res.data);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, [user, url, setLoading]);
  useEffect(() => {
    axios
      .get(url2, { withCredentials: true })
      .then((res) => {
        //   console.log(res.data);
        setLoading(false);
        setBevolunteer(res.data);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, [user, url2, setLoading]);

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
          `https://volunteer-management-server-two.vercel.app/volunteer_post/${id}`
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
  const handleCancle = async (id, postId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axios.delete(
          `https://volunteer-management-server-two.vercel.app/be_volunteer/${id}/`
        );
        // update needed volunteer

        // axios
        //   .patch(`https://volunteer-management-server-two.vercel.app/updateCancleRequest/${data._id}`)
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // ------------------update end
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure Cancel!",
            text: "Your request has been cancel.",
            icon: "success",
          });
          const remaining = beVolunteer.filter((data) => data._id !== id);
          setBevolunteer(remaining);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  // if (lodedData.length === 0 || beVolunteer.length === 0) {
  //   return <h2>hiiiiiiiiiiiiiiiiiii</h2>;
  // }
  // if (beVolunteer.length === 0) {
  //   return <h2>hiiiiiiiiiiiiiiiiiii</h2>;
  // }

  console.log(beVolunteer);
  return (
    <div>
      <Helmet>
        <title>My post_EngageEase</title>
      </Helmet>
      <Tabs>
        <TabList>
          <Tab>My posts</Tab>
          <Tab>My requests</Tab>
        </TabList>

        <TabPanel>
          <div className="overflow-x-auto">
            {lodedData.length === 0 ? (
              <div>
                <h5 className="font-bold text-2xl text-center">
                  You havent any posts
                </h5>
              </div>
            ) : (
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
            )}
          </div>
        </TabPanel>
        {/* volunteer reqs */}
        <TabPanel>
          <div className="overflow-x-auto">
            {beVolunteer.length === 0 ? (
              <div>
                <h5 className="font-bold text-2xl text-center">
                  You Havent any rquests
                </h5>
              </div>
            ) : (
              <table className="table table-xs">
                <thead>
                  <tr className="text-base">
                    <th></th>
                    <th>Title</th>
                    <th> Organizer name</th>
                    <th> Organizer email</th>
                    <th> Deadline</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="">
                  {beVolunteer.map((data, idx) => (
                    <BevolunteerRow
                      key={data._id}
                      data={data}
                      idx={idx}
                      handleCancle={handleCancle}
                    ></BevolunteerRow>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyPost;
