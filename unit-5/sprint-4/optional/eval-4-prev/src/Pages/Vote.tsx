import React, { useState, useEffect } from "react";
import { getSenate } from "../api";
import Navbar from "../Components/Navbar";
import StudentCard from "../Components/StudentCard";
import { student } from "../constants";
import "../App.css";

export const Vote = () => {
  const [data, setData] = useState<student[]>([]);
  const [change, setChange] = useState<boolean>(false);

  const handleChange = () => {
    setChange((prev) => !prev);
  };
  useEffect(() => {
    getSenate().then((res) => setData(res.data));
  }, [change]);

  console.log(data);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="candidate">
        {data.length > 0 &&
          data.map((el) => (
            <StudentCard key={el.id} {...el} handleChange={handleChange} />
          ))}
      </div>
    </div>
  );
};
