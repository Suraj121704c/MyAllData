import { useEffect } from "react";
import React from "react";
import { addCountry, getCountries } from "./api";
import AddCountry from "./AddCountry";
import { deletCountry } from "./api";

function Countries() {
  const [data, setData] = React.useState([]);
  const [loading, setLaoding] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const limit = 2;

  const fetchAndUpdate = (page) => {
    setLaoding(true);
    getCountries({ page, limit, sort: "population", order: "asc" })
      .then((res) => {
        setData(res.data);
        setTotalPages(Math.ceil(+res.headers["x-total-count"] / limit));
        setLaoding(false);
      })
      .catch((error) => {
        setError(true);
        setLaoding(false);
      });
  };

  useEffect(() => {
    fetchAndUpdate(page);
  }, [page]);

  //    console.log(data)
  const handleAddCountry = (data) => {
    addCountry(data);
    fetchAndUpdate(page);
  };

  const handleDelete = (id) => {
    deletCountry(id);
    fetchAndUpdate(page);
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something Went Wrong ..... Please Refresh</h1>
  ) : (
    <>
      <AddCountry handleAddCountry={handleAddCountry} />
      <hr />
      <div>
        <h1>Countries</h1>
        {data.map((country) => (
          <div key={country.id}>
            <h3>
              {country.country}- {country.population}
            </h3>
            <button onClick={() => handleDelete(country.id)}>
              Delete Country
            </button>
          </div>
        ))}
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            PREV
          </button>
          <button disabled>{page}</button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}
export { Countries };
