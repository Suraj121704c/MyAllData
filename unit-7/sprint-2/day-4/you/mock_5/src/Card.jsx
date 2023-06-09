import React from "react";

const Carding = ({ title, description, imageUrl }) => {
  return (
    <div
      className="card"
      style={{
        borderRadius: "3px",
        textAlign: "center",
        border: "1px solid blue",
        marginTop: "10px",
        borderRadius : "10px"
      }}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div
        className="card-content"
        style={{ marginTop: "15px", marginBottom: "20px" }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <hr />

      <div style={{display : "flex" , justifyContent : "space-between"}}>
        <div>
          <h1>3-5</h1>
          <p>Age Group</p>
        </div>
        <div>
          <h1>30</h1>
          <p>Classes</p>
        </div>
        <div>
          <h1>10/h</h1>
          <p>Class Price</p>
        </div>
      </div>
    </div>
  );
};

export default Carding;
