import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NeedVolunteerTableRow = ({ data, idx }) => {
  const date = new Date(data.deadline);
  date.setDate(date.getDate() + 1);
  const updatedDateString = date.toISOString();
  const {
    thumbnail,
    title,

    category,
    location,
    volunteersNeeded,
  } = data;
  return (
    <tr key={thumbnail} className="even:bg-blue-gray-50/50">
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {idx + 1}
        </Typography>
      </td>
      <td className="p-4">
        <img src={thumbnail} alt="" className=" rounded-full w-20 h-20" />
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {title}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {category}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {location}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {updatedDateString?.split("T")[0]}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal ml-[30%]"
        >
          {volunteersNeeded}
        </Typography>
      </td>
      <td className="p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal ml-[30%]"
        >
          <Link to={`/details/${data._id}`} className=" btn ">
            <button>View Details</button>
          </Link>
        </Typography>
      </td>
    </tr>
  );
};

export default NeedVolunteerTableRow;
