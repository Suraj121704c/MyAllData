import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [value, setValue] = React.useState("");
  const param = useParams();
//   console.log(param.id);

  const handleEditTodo = () => {
    const data = {
      title: value,
    };
    axios
      .patch(`http://localhost:3001/todos/${param.id}`, data)
      .then((res) => {
        alert(
          `data has been updated!!! Go back to home page to see the change`
        )
        window.location.href = "/"
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Edit Here Todo Input</h1>
      <input
        placeholder="edit-todo"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleEditTodo}>edit-todo</button>
    </div>
  );
};

export default Edit;
