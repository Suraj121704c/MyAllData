import React, { useEffect, useState } from "react";
import { winners } from "../api";
import Navbar from "../Components/Navbar";
import { student } from "../constants";

export const Result = () => {
  const [winner, setWinner] = useState<student[]>([]);

  useEffect(() => {
    winners().then((res) => setWinner(res.data));
  }, []);
  console.log("winner", winner[0]);
  console.log("winner1", winner[1]);
  console.log("winner2", winner[2]);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {winner.length > 2 && (
          <div>
            <div>
              <h1>Winner</h1>
              <img src={winner[0].image} alt={winner[0].name} />
              <h4>Name:{winner[0].name}</h4>
              <p>Student Code:{winner[0].code}</p>
              <p>Batch:{winner[0].batch}</p>
              <h4>Vote Count:{winner[0].vote}</h4>
            </div>

            <div>
              <h1>RunnerUp</h1>
              <img src={winner[1].image} alt={winner[1].name} />
              <h4>Name:{winner[1].name}</h4>
              <p>Student Code:{winner[1].code}</p>
              <p>Batch:{winner[1].batch}</p>
              <h4>Vote Count:{winner[1].vote}</h4>
            </div>
            <div>
              <h1>3rd Position</h1>
              <img src={winner[2].image} alt={winner[2].name} />
              <h4>Name:{winner[2].name}</h4>
              <p>Student Code:{winner[2].code}</p>
              <p>Batch:{winner[2].batch}</p>
              <h4>Vote Count:{winner[2].vote}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
