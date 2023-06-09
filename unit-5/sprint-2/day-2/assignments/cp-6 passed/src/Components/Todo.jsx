import React from "react";
import axios from "axios";
import TodoInput from "./TodoInput";

const getData = () => {
  return axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`
  );
};

const Todos = () => {
  const [data, setData] = React.useState([]);

  const fetchAndUpdate = () => {
    getData()
      .then((res) => {
        // console.log(res)
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data)

  const AddTodos = (data = {}) => {
    return axios({
      method: "post",
      url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
      data: {
        title: data.title,
        staus: data.status,
      },
    })
      .then((res) => {
        fetchAndUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* add TodoInput component here */}
      <TodoInput AddTodos={AddTodos} />
      {/* map through the todos array and display the tasks */}
      <div data-testid="todos-wrapper">
        {data.map((el) => (
          <div key={el.id}>
            <h6>
              {el.title} - {el.status ? "True" : "False"}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
