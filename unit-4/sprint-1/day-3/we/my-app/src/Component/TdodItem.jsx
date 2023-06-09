function TodoItem({id , status , title ,handleToogle , handleDelete}) {
    return (
       <li key={id}>
        {title} - {status ? "Completed" : "Not Completed"}
        <button style={{color:"green"}} onClick = {() => handleToogle(id)}>TOOGLE</button>
        <button style={{color:"red"}} onClick = {() => handleDelete(id)}>Delete</button>
       </li>
    )
}
export default TodoItem;