import React from 'react'

const initState = {
    title : "",
    completed : false
}

const AddTodo = ({handleAddTask}) => {

    const [formState,setFormState] = React.useState(initState);

    const {title,completed} = formState;

    const handleChange = (e) => {
       const {name,value} = e.target;
       setFormState({
        ...formState,
        [name] : value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask(formState)   
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Enter The Title of the : Todo</label>
      <br/>
        <input
        style={{color:"green"}}
         name="title" 
         placeholder='Add Todo'
         value={title}
         onChange={handleChange}
         />
         <br />
         <br />
         <label>Select : Condition</label>
         <br/>
         <select
         style={{color:"green"}}
          name="completed" value={completed} onChange={handleChange}>
         <option value="true">Completed</option>
         <option value="false">Pending</option>
         </select>
         <br />
         <br />
         <input style={{color:"brown"}}
         type="submit" value="add-task"/>
      </form>
    </div>
  )
}

export default AddTodo
