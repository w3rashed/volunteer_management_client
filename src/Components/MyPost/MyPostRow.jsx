import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyPostRow = ({ data, idx, hadleDeletePost }) => {
  console.log(data);
  return (
    <tr className="hover">
      <th>{idx + 1}</th>
      <td>{data.title}</td>
      <td>{data.category}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.deadline}</td>
      <td className="flex gap-2">
        <Link to={`/update/:${data._id}`}>
          <button className="btn">
            <FaEdit></FaEdit>
          </button>
        </Link>
        <button onClick={() => hadleDeletePost(data._id)} className="btn">
          <RiDeleteBack2Line></RiDeleteBack2Line>
        </button>
      </td>
    </tr>
  );
};

export default MyPostRow;
