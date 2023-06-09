import React from "react";
//used to retrieve the value of params
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const UserPage = () => {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchAndUpdateData = () => {
    setLoading(true);
    getData(`https://reqres.in/api/users/${user_id}`)
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
      <h1>USER PAGE</h1>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          margin: "20px",
        }}
      >
        <img src={users?.data?.avatar} alt={users?.data?.first_name} />
        <p>{`${users?.data?.first_name} ${users?.data?.last_name}`}</p>
        <p>{users?.data?.email}</p>
        <p>ID : {users?.data?.id}</p>
      </div>
    </>
  );
};

export default UserPage;
