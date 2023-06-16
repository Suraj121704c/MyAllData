import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <Navbar />
      <h1>Posts</h1>
      {data.length === 0 ? (
        <h1>Blog Isn't Posted Yet...</h1>
      ) : (
        data.map((item , i) => (
          <div key={item._id}>
            <h1>Blog  {i+1} : {item.blog}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
