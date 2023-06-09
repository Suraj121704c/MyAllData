import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getStudents } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  let obj = {
    params: {
      batch: searchParams.getAll("batch"),
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "score",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getStudents(obj));
  }, [location.search]);

  const student = useSelector((store) => {
    return store.studentReducer.students;
  });

  return (
    <div>
      <div
        data-testid="student-list"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "50px",
        }}>
        {/* Map through the student list using StudentCard component  */}
        {student.length > 0 &&
          student.map((el) => <StudentCard key={el.id} {...el} />)}
      </div>
    </div>
  );
};
