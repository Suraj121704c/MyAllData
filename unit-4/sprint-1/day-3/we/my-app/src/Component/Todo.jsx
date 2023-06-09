import React from "react";
import AddTodo from "./AddTodo.jsx";
import TodoItem from "./TdodItem.jsx";
import Header from "./Header.jsx";


function Todo() {
    //use State takes value and the updation
    const [todos,setTodos] = React.useState([]);
    const handleAddTodo = (text) => {
        const newItem = {
            title: text,
            status: false,
            id: Date.now() + text + Math.random(),
        };
        //...todos will keep all my previous values also with newItem value
        const todoListAfterNewItemAddition = [...todos,newItem];
        setTodos(todoListAfterNewItemAddition);
    };
    //Toogle Function 
    const handleToogle = (id) => {
         const todosAfterUpdation = todos.map((todo)=>todo.id === id ? {...todo, status : !todo.status} : todo)
         setTodos(todosAfterUpdation)
    }
    //Delete Function
    const handleDelete = (id) => 
    {
      const todosAfterDelete = todos.filter(todo => todo.id !== id )
      setTodos(todosAfterDelete)
    }
    // console.log(todos)
    return (
        <div className="Header">
            <Header />
        <div className="Gp">
        <AddTodo handleAddTodo={handleAddTodo} />
        <div className="todolist">
            {todos.map((todo) => (
                <TodoItem 
                key={todo.id} 
                title = {todo.title} 
                status = {todo.status}
                id = {todo.id}
                handleToogle = {handleToogle}
                handleDelete = {handleDelete}
                />
            ))}
        </div>
        </div>
        </div>
    );
  }
export default Todo;