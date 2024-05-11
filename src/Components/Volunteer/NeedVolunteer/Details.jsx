import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        {/* left */}
        <div className="w-96 mx-auto">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={data.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex gap-6">
                <h2>{data.title}</h2> <p>{data.deadline}</p>
              </div>
              <h3>{data.category}</h3>
              <p>No. of volunteers needed: {data.volunteersNeeded}</p>
              <p>Description: {data.description}</p>
              <p>Location: {data.location}</p>
              <h2>
                Name: <span>{data.name}</span>
              </h2>
              <h2>
                Email: <span>{data.email}</span>
              </h2>
              <Link to={`/be_volunteer/${data._id}`}>
                <button className="btn">Be a Volunteer</button>
              </Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div></div>
      </div>
    </div>
  );
};

export default Details;
