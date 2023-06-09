import React, { useEffect, useState } from "react";
import PostItem from "./ApiItem.jsx";

// Fetching the data
const getData = (page) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}&_order=desc`
  ).then((res) => res.json());
};

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);
  //Page state
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);
  //passing page dependence

  const fetchAndUpdateData = async (page) => {
    setLoading(true);
    try {
      const data = await getData(page);
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (err) {
    return <h1>Something went Wrong</h1>;
  }
  // console.log(posts);
  //For Page Change
  //Passing the page number
  const handlePageChange = (val) => {
    setPage(page + val);
    //This may be ok
    fetchAndUpdateData(page);
  };

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} id={post.id} />
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(-1)} disabled={page === 1}>
          PREVIOUS
        </button>
        <button disabled>{page}</button>
        <button
         disabled = {page === 7}
         onClick={() => handlePageChange(1)}>NEXT</button>
      </div>
    </>
  );
}
export default Posts;

//API server Link
//https://jsonplaceholder.typicode.com/posts
//API request fetching
//Maintain Loading and err state as well
