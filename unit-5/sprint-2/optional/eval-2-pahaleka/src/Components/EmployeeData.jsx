import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { empData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.employeeData;
  });

  React.useEffect(() => {
    dispatch(empData);
  }, []);

  // console.log(data)

  return (
    <div>
      <h2>Employee Data</h2>
      <div className="employee_data">
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}

        {data.length > 0 &&
          data.map((el) => (
            <div key={el.id}>
              <img src={el.image} alt={el.name} />
              <h1>{el.name}</h1>
              <h2>{el.gender}</h2>
              <p>{el.department}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
