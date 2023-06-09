import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {
  const { id } = useParams();
  const [data,setData] = useState("")
  const student = useSelector((store) => {
    return store.studentReducer.students;
  });

  useEffect(()=>{
    const data = student.find((el) => el.id === +id)
    setData(data)
  })

  console.log(data)

  return (
    <div className={"student-card"}>
      <h1 className="student-id">{id}</h1>
      <img className="student-image" src={data.Poster} alt="img" />
      <h1 className="student-name">Name : {data.name}</h1>
      <p className="student-batch">Batch : {data.batch}</p>
      <p>Code : {data.student_code}</p>
      <p>Score : {data.score}</p>
      <p className="student-green-card" style={{color : "green"}}>Bounty : {data.green_card}</p>
    </div>
  );
};
