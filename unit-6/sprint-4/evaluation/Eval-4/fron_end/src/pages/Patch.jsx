import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Patch = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [device, setDevice] = useState("");
  const params = useParams();

  const handleSubmit = (e) => {
    const userDetails = {
      title,
      body,
      device,
    };
    e.preventDefault();
    axios
      .patch(
        `https://good-puce-walkingstick-garb.cyclic.app/posts/update/${params.id}`,
        userDetails,
        {
          headers: {
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
      <h1>Id : `${params.id}</h1>
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

        <button type="submit">patch-it</button>
      </form>
    </div>
  );
};
