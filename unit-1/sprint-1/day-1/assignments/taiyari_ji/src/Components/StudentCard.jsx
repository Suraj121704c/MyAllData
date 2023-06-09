import { Link } from "react-router-dom";

export const StudentCard = ({
  id,
  name,
  batch,
  student_code,
  score,
  green_card,
  Poster,
}) => {
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img className="student-image" src={Poster} alt="img" />
      <h1 className="student-name">{name}</h1>
      <p className="student-batch">{batch}</p>
      <p>{score}</p>
      <p className="student-green-card" style={{ color: "green" }}>
        {green_card}
      </p>
      <Link to={`/student/${id}`}>
        <button className="student-detail">View Details</button>
      </Link>
    </div>
  );
};
