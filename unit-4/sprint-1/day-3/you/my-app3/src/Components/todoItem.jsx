function TodoItem({id , status , title }) {
    return (
        <li key={id}>
         {title} - {status ? "Done" : "Pending"}
        </li>
     )
}
export default TodoItem;