import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name,
      email,
      gender,
      password,
    };
    axios({
      method: "post",
      url: "https://good-puce-walkingstick-garb.cyclic.app/users/register",
      data: userDetails,
    })
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
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="gender..."
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
