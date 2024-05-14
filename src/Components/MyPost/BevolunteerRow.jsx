const BevolunteerRow = ({ data, idx, handleCancle }) => {
  const date = new Date(data.deadline);
  date.setDate(date.getDate() + 1);
  const updatedDateString = date.toISOString();
  return (
    <tr className="hover">
      <th>{idx + 1}</th>
      <td>{data.title}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{updatedDateString.split("T")[0]}</td>
      <td>
        <button
          onClick={() => {
            handleCancle(data._id, data.postId);
          }}
          className="btn"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default BevolunteerRow;
