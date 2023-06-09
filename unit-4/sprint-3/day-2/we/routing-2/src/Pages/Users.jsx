import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchAndUpdateData = () => {
    setLoading(true);
    getData(`https://reqres.in/api/users`)
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something Went Wrong... Please Refresh</h1>
  ) : (
    <>
      <h1>Users</h1>
      {users?.data?.map((el) => (
        <div style={{margin:"10px" , border:"1px solid black"}}>
            <img src={el.avatar} alt={el.first_name}></img>
            <p>{`${el.first_name} ${el.last_name}}`}</p>
            <Link to={`/users/${el.id}`}>More Info</Link>
        </div>
      ))}
    </>
  );
};

export default Users;
