import React from "react";
import { sendSenate } from "../api";
import Navbar from "../Components/Navbar";
import { student } from "../constants";

const Home = () => {
  const [name, setName] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [batch, setBatch] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const handleAddCandidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(name,image,batch,code)
    sendSenate(name, image, batch, code);
    setName("");
    setBatch("");
    setImage("");
    setCode("");
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleAddCandidate}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Enter Image Link"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="code"
          value={code}
          placeholder="Enter Student Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="text"
          name="batch"
          placeholder="Enter Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <button>Add Candidate</button>
      </form>
    </div>
  );
};

export default Home;
