import React from "react";
import { useState, useEffect } from "react";
// 1. importing useNavigate
import { Link, useNavigate } from "react-router-dom";
// 1. importing useSearchParams
import { useSearchParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

//Function to convert serachParam value in number cause it is a string
const getCurrentPage = (page = 1) => {
  let pageNumber = Number(page);
  if (typeof pageNumber !== "number") {
    pageNumber = 1;
  }
  if (pageNumber <= 0) {
    pageNumber = 1;
  }
  if (!pageNumber) {
    pageNumber = 1;
  }
  return pageNumber;
};

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  //2.initialize useSearchParams
  let [searchParams, setSearchParams] = useSearchParams();
  // Using searchParams.get in state so that it holds back the page while on refreshing
  const initialPage = getCurrentPage(searchParams.get("page"));
  const [page, setPage] = useState(initialPage);
  // use Navigate reutrns a funciton which u can use anywhere in page
  //2.Initialize useNavigate
  const navigate = useNavigate();
  const [text, setText] = React.useState("");

  const fetchAndUpdateData = (page) => {
    setLoading(true);
    getData(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        // console.log(res);
        setUsers(res);
      })
      .catch((error) => {
        // console.log(error);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  // 3. using searchaprams
  // kye here is page and the other page is coming from page state
  useEffect(() => {
    setSearchParams({ page: page, text: text });
  }, [page, text]);

  const handlePageChange = (val) => {
    setPage(page + val);
  };
  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something Went Wrong... Please Refresh</h1>
  ) : (
    <>
      <h1>Users</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="search here"
      />
      {users?.data?.map((el) => (
        <div key={el.id} style={{ margin: "10px", border: "1px solid black" }}>
          <img src={el.avatar} alt={el.first_name}></img>
          <p>{`${el.first_name} ${el.last_name}}`}</p>
          <Link to={`/users/${el.id}`}>More Info</Link>
        </div>
      ))}
      {/* 3.Invoke it */}
      <button onClick={() => navigate("/")}>
        GO TO HOME PAGE USING USENAVIGATE
      </button>
      <Link>
        <button to="/">GO TO HOME PAGE USING LINK</button>
      </Link>
      <br />
      <br />
      <div>
        <button disabled={page === 1} onClick={() => handlePageChange(-1)}>
          PREV
        </button>
        <button disabled>{page}</button>
        <button disabled={page === 2} onClick={() => handlePageChange(+1)}>
          NEXT
        </button>
      </div>
    </>
  );
};

export default Users;
