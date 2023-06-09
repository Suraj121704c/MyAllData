import React from "react";
import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
};

export const SingleAboutPage = () => {
  const [data, setData] = React.useState([]);
  let params = useParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  

  // console.log(params)

  const fetchAndUpdate = () => {
    setLoading(true)
    getData(params?.about_id)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      });
  };

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  return loading ? (
    <h1>Loding...</h1>
  ) : error ? (
    <h1>Something went Wrong Please Refresh</h1>
  ) : (
    <div>
      <h1>More Details of the User</h1>
      <div>
        <img src={data?.data?.avatar} alt={data?.data?.first_name} />
        <h1>Working Id : {data?.data?.id}</h1>
        <h1>
          Name : {data?.data?.first_name} {data?.data?.last_name}
        </h1>
        <h2>Email : {data?.data?.email}</h2>
      </div>
    </div>
  );
};
