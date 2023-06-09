import AddTodo from './Components/AddTodo.jsx';
import TodoItem from './Components/todoItem.jsx';
import React from 'react';
import './App.css';

function App() {
 const [todos,setTodos] = React.useState([]);
 const handleAddTodo = (text) => {
     const newItem = {
         title: text,
         status: false,
         id: Date.now() + text + Math.random(),
     };
     const todoListAfterNewItemAddition = [...todos,newItem];
     setTodos(todoListAfterNewItemAddition);
 };
 return (
     <div className='Gp'>
     <AddTodo handleAddTodo={handleAddTodo} />
     <div>
         {todos.map((todo) => (
             <TodoItem 
             key={todo.id} 
             title = {todo.title} 
             status = {todo.status}
             id = {todo.id}
             />
         ))}
     </div>
     </div>
 );
}

export default App;
