import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider_&_Firebase/AuthProvider";
import axios from "axios";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CgLayoutList } from "react-icons/cg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { IoSearchOutline } from "react-icons/io5";
import NeedVolunteerTableRow from "./NeedVolunteerTableRow";
import { Helmet } from "react-helmet";

const NeedVolunteer = () => {
  const { setLoading } = useContext(AuthContext);
  const [lodedData, setLodedData] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    "https://volunteer-management-server-two.vercel.app/all_volunteer_post";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        //   console.log(res.data);
        setLoading(false);
        setLodedData(res.data);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, [url, setLoading]);
  console.log(lodedData);

  // ---------------------------------------------------------------------
  const TABLE_HEAD = [
    "",
    " Thumbnail",
    "Title",
    "Category",
    "Location",
    "Deadline",
    "No. of volunteer needed",
    "",
  ];

  // search function
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    axios
      .get(
        `https://volunteer-management-server-two.vercel.app/all_volunteer_post?search=${search}`
      )
      .then((res) => {
        //   console.log(res.data);
        setLoading(false);
        setLodedData(res.data);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, [search, setLoading]);
  // console.log(search);

  return (
    <div>
      <Helmet>
        <title>Need volunteer_EngageEase</title>
      </Helmet>
      <div
        className="hero min-h-[calc(100vh-400px)] mb-10"
        style={{
          backgroundImage: "url(https://i.ibb.co/TqvLCbh/image.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-1/2">
            <h1 className="mb-5 text-5xl ">
              Need volunteer Post:{lodedData?.length}
            </h1>
            <div>
              <Link
                to="/"
                className="hover:border-b-2 hover:duration-300 border-[#2ECC71]"
              >
                Home
              </Link>{" "}
              <span>/</span>{" "}
              <Link className="border-b-2 font-bold text-[#2ECC71] border-[#2ECC71]">
                Need Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <div className="w-72">
          <Input
            onChange={handleSearch}
            label="Search"
            icon={<IoSearchOutline />}
          />
        </div>
      </div>
      <div>
        {lodedData.length === 0 ? (
          <>
            <div className="">
              <Card className="mt-6 text-center">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    opss!!!
                  </Typography>
                  <Typography>No post available</Typography>
                </CardBody>
              </Card>
            </div>
          </>
        ) : (
          <>
            <Tabs>
              <div className="flex justify-center items-center gap-9 mb-10">
                <TabList>
                  <Tab>
                    <BsGrid3X3Gap></BsGrid3X3Gap>
                  </Tab>
                  <Tab>
                    <CgLayoutList className="text-2xl"></CgLayoutList>
                  </Tab>
                </TabList>
              </div>
              {/* layout card */}
              <TabPanel>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {lodedData.map((data) => (
                    <div key={data._id} className="">
                      <Card className="mt-6  hover:border-b-8 hover:duration-500 hover:border-[#2ECC71] ">
                        <CardHeader
                          color="blue-gray"
                          className="relative  h-[210px]"
                        >
                          <img src={data.thumbnail} alt="card-image" />
                        </CardHeader>
                        <CardBody className="">
                          <div className="flex  justify-between">
                            <div>
                              <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-2 "
                                style={{ width: "200px" }}
                              >
                                {data.title}
                              </Typography>
                            </div>
                            <div>
                              <Typography>
                                {" "}
                                <span className="font-semibold">Deadline:</span>
                                {data.deadline?.split("T")[0]}
                              </Typography>
                            </div>
                          </div>
                          <div className="flex  justify-between">
                            <div>
                              <Typography className="flex">
                                <span className="font-semibold">Category:</span>{" "}
                                {data.category}
                              </Typography>
                              <Typography className="flex">
                                <span className="font-semibold">
                                  Volunteer Ndded:
                                </span>{" "}
                                {data.volunteersNeeded}
                              </Typography>
                            </div>
                            <Link
                              to={`/details/${data._id}`}
                              className=" btn bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500 mt-1"
                            >
                              <button>View Details</button>
                            </Link>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabPanel>
              {/* layout table */}
              <TabPanel>
                <Card className="h-full w-full overflow-scroll">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {lodedData.map((data, idx) => (
                        <NeedVolunteerTableRow
                          key={data._id}
                          data={data}
                          idx={idx}
                        ></NeedVolunteerTableRow>
                      ))}
                    </tbody>
                  </table>
                </Card>
              </TabPanel>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default NeedVolunteer;
