import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [device, setDevice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const deviceDetails = {
      title,
      body,
      device,
    };
    axios
      .post(
        "https://good-puce-walkingstick-garb.cyclic.app/posts/add",
        deviceDetails,
        {
          headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <h1>Create New Post Here...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="body..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="device..."
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
