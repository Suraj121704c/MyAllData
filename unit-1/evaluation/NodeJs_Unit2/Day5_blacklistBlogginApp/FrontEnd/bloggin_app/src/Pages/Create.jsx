import React, { useState } from "react";

import axios from "axios";
import Navbar from "../Components/Navbar";

const Create = () => {
  const [blog, setBlog] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogDetails = {
      blog,
    };
    axios
      .post(
        "http://localhost:5000/blogs/create",
        blogDetails,
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("New BLog Posted!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <h1>Create New BLogs Here...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="blog..."
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
