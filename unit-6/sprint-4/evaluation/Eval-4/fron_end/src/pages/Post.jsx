import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://good-puce-walkingstick-garb.cyclic.app/posts", {
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

  const handleDelete = (id) => {
    axios.delete(
      `https://good-puce-walkingstick-garb.cyclic.app/posts/delete/${id}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    ).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
  };

  return (
    <div>
      <Navbar />
      <h1>Posts</h1>
      {data.length === 0 ? (
        <h1>User Isn't Posted Yet...</h1>
      ) : (
        data.map((item) => (
          <div key={item._id}>
            <h1>{item.posts}</h1>
            <p>{item.body}</p>
            <h3>{item.device}</h3>
            <button>
              <Link to={`/posts/patch/${item._id}`}>Edit</Link>
            </button>
            &nbsp; &nbsp;
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
