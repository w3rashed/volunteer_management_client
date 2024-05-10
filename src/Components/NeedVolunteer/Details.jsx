import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>hiiiiiiiiiiiiiiii</h2>
    </div>
  );
};

export default Details;
