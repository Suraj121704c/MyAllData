import React from "react";
import { Link } from "react-router-dom";

const getUrl = (url) => {
  return fetch(url).then((res) => res.json());
};

export const About = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [total, setToal] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetchAndUpdate = async (page) => {
    setLoading(true)
    try {
      let res = await getUrl(`https://reqres.in/api/users?page=${page}`);
      const { total_pages, data } = res;
      setData(data);
      setToal(total_pages);
      setLoading(false)
      console.log(data);
    } catch (error) {
      setError(true)
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchAndUpdate(page);
  }, [page]);

  return loading ? (
    <h1>Loding...</h1>
  ) : error ? (
    <h1>Something went Wrong Please Refresh</h1>
  ) : (
    <div>
      <h1>Our Team</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {data.map((team) => (
          <div key={team.id}>
            <img src={team.avatar} alt={team.first_name} />
            <h1>
              Name : {team.first_name} {team.last_name}
            </h1>
            <Link to={`/about/${team.id}`}>MoreDetails</Link>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        &nbsp;&nbsp;
        <button disabled>{page}</button>&nbsp;&nbsp;
        <button disabled={page === total} onClick={() => setPage(page + 1)}>
          NEXT
        </button>
      </div>
    </div>
  );
};
