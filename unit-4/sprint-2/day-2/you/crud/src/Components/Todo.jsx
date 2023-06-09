import React from 'react';
import AddTodo from './AddTodo';
import { AddTask,DeleteTask,toogle,updateTodo } from './Api';

const getData = (page) => {
    return fetch(`http://localhost:3001/Todos?_limit=10&_page=${page}`).then((res)=>res.json())
}

const Todo = () => {

    const [data,setData] = React.useState([])
    const [err,setErr] = React.useState(false)
    const [loading,setLoading] = React.useState(false);
    const [value,setValue] = React.useState("");
    const [page,setPage] = React.useState(1);

    const fetchAndUpdate = async (page) => {
        try {
         setLoading(true)
         const task = await getData(page)
         setData(task)
         setLoading(false)
         setErr(false)
        }catch (err) {
          setErr(true)
          setLoading(false)
        } 
    }

    React.useEffect(() => {
      fetchAndUpdate(page)
    },[page])

    if (loading) {
        return <h1>Loading.....</h1>;
    }
    if (err) {
        return <h1>Something went Wrong</h1>;
    }
    console.log(data)

    const handleAddTask=(data)=>{
        AddTask(data)
        fetchAndUpdate(page)
    }

    const handleDelete = (id) => {
       DeleteTask(id)
       fetchAndUpdate(page)
    }

    const Toogle = (id,completed) => {
          toogle(id,completed)
          fetchAndUpdate(page)
    }

    const updater = (id,value) => {
        updateTodo(id,value)
        fetchAndUpdate(page)
    }

  return(
    <div style={{color:"blue"}}>
      <h1><u>Todo Opertaion App</u></h1>
      <div>
       <AddTodo handleAddTask={handleAddTask}/>
      </div>
      <hr/>
      <h1><u>Todos</u></h1>
      <div>
      {
        data.map((task)=>(
            <div key={task.id}>

            <h1>{task.title}</h1>

            <h2>{task.completed===true ? "Completed" : "Pending"}</h2>
            
            <input style={{color:"green"}}
            onChange={(e) => (setValue(e.target.value))}
            placeholder='enter new data'/>&nbsp;&nbsp;

            <button style={{color:"green"}}
             onClick={() => updater(task.id,value)}>Updater</button>&nbsp;&nbsp;

            <button
            style={{color:"purple"}}
             onClick={() => Toogle(task.id,task.completed)}>{task.completed ? "Mark as Pending" : "Mark as Completed"}</button>&nbsp;&nbsp;

            <button style={{color:"red"}}
             onClick={() => handleDelete(task.id)}>Delete Task</button>

            </div>
        ))
      }
      </div>
      <hr />
      <br />
      <div>
        <button style={{color:"green"}}
        onClick={() => setPage(page-1)}
        disabled={page === 1}
        >PREV</button>
        <button style={{color:"red"}}
         disabled>{page}</button>
        <button
        style={{color:"blue"}}
        disabled={page === 6}
        onClick={() => setPage(page+1)}
        >NEXT</button>
      </div>
      <br />
    </div>
  )
}

export default Todo;
