import React from 'react'

const TodoItem = ({id,status,title,handleToogle,handleDelete}) => {
  return (
    <div>
      <li key={id}>
       {title} - {status ? "Completed" : "Not Completed"}
       <button onClick={() => handleToogle(id)} >TOOGLE</button> 
       <button onClick={() => handleDelete(id)}>DELETE</button> 
      </li>
    </div>
  )
}

export default TodoItem
