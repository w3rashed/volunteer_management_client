import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import axios from "axios";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CgLayoutList } from "react-icons/cg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
  const { setLoading } = useContext(AuthContext);
  const [lodedData, setLodedData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteer_post")
      .then((res) => {
        //   console.log(res.data);
        setLoading(false);
        setLodedData(res.data);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, []);
  console.log(lodedData);

  const handleSearch = (e) => {
    const data = e.target.value;
    console.log(data);
    //   const filter = lodedData.find((data) => data.title === data);
    //   setLodedData(Array.from(filter));
  };

  return (
    <div>
      <h2>NeedVolunteer:{lodedData?.length}</h2>
      <div>
        <Tabs>
          {/* search by title */}

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={handleSearch}
                type="text"
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex justify-end">
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
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {lodedData.map((data) => (
                <div key={data._id} className="card  bg-base-100 shadow-xl">
                  <figure>
                    <img src={data.thumbnail} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <h2 className="card-title">{data.deadline}</h2>
                    <p>{data.category}</p>
                    <p>{data.location}</p>
                    <Link to={`/details/${data._id}`}>
                      <button className="btn">View Details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          {/* layout table */}
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default NeedVolunteer;
