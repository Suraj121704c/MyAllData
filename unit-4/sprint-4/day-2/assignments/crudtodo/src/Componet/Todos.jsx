import { useEffect } from "react";
import React from "react";
import { addTodos, deleteTodos, getTodos, putTodos } from "./api";
import AddTodos from "./AddTodo";
import { togle } from "./api";

function Todos() {
  const [data, setData] = React.useState([]);
  const [loading, setLaoding] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [value, setValue] = React.useState("");
  const limit = 5;

  const fetchAndUpdate = (page) => {
    setLaoding(true);
    getTodos({ page, limit, sort: "population", order: "desc" })
      .then((res) => {
        setData(res.data);
        setTotalPages(Math.ceil(+res.headers["x-total-count"] / limit));
        setLaoding(false);
      })
      .catch((error) => {
        setError(true);
        setLaoding(false);
      });
  };

  useEffect(() => {
    fetchAndUpdate(page);
  }, [page]);

  //    console.log(data)
  const handleAddTodos = (data) => {
    addTodos(data);
    fetchAndUpdate(page);
  };

  const handleDelete = (id) => {
    deleteTodos(id);
    fetchAndUpdate(page);
  };

  const handlePutTodos = (id, value) => {
    putTodos(id, value);
    fetchAndUpdate(page);
  };

  //Toggle data

  const Toggle = (id, completed) => {
    togle(id, completed);

    fetchAndUpdate(page);
  };

  // console.log(data)

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something Went Wrong ..... Please Refresh</h1>
  ) : (
    <>
      <AddTodos handleAddTodos={handleAddTodos} />
      <hr />
      <div>
        <h1>TODOS</h1>
        {data.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <h2>{todo.completed === true ? "Completed" : "Pending"}</h2>
            <p>
              <button onClick={() => Toggle(todo.id, todo.completed)}>
                {todo.completed ? "Mark as Pending" : "Mark as Completed"}
              </button>
            </p>
            <input
              onChange={(e) => setValue(e.target.value)}
              placeholder="enter new data"
            />
            &nbsp;&nbsp;
            <button onClick={() => handlePutTodos(todo.id, value)}>
              Updater
            </button>
            &nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
            &nbsp; &nbsp;
            <hr />
          </div>
        ))}
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            PREV
          </button>
          <button disabled>{page}</button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}
export { Todos };
