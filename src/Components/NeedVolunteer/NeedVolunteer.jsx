import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider_&_Firebase/AuthProvider";
import axios from "axios";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CgLayoutList } from "react-icons/cg";

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

  return (
    <div>
      <h2>NeedVolunteer:{lodedData.length}</h2>
      <div role="tablist" className="tabs">
        <a role="tab" className="tab">
          <BsGrid3X3Gap></BsGrid3X3Gap>
          <div>
            <h2>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h2>
          </div>
        </a>
        <a role="tab" className="tab tab-active">
          <CgLayoutList></CgLayoutList>
        </a>
      </div>
    </div>
  );
};

export default NeedVolunteer;
