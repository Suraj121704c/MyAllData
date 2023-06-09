import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeDataAction } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.employeeData;
  });

  React.useEffect(() => {
    dispatch(employeeDataAction);
  }, []);

  //   console.log(data)

  return (
    <div>
      <h2>Employee Data</h2>
      <div
        className="employee_data_cont"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
        }}
      >
        {/* Map the below div against yoru employee data */}
        {data.length > 0 &&
          data.map((el) => (
            <div className="employee" style={{ width: "250px" }} key={el.id}>
              <img className="image" alt="img" width="70%" src={el.image} />
              <div className="name">{el.name}</div>
              <div className="gender">{el.gender}</div>
              <div className="department">{el.department}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
