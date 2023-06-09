import React from "react"
// import { addCountry } from "./api";

function AddTodos({handleAddTodos}) {
    const [formState,setFormState] = React.useState({
        title : "",
        completed: ""
    }
    )
   
    const handleChange = (e) => {
       const {name,value} = e.target;
       const val = value
       setFormState({
         ...formState,
         [name] : val
       })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      handleAddTodos(formState)
    }

    // console.log(formState)

    const {title,completed} = formState;

    return (
        <div>
         <h1>ADD TODOS FROM HERE</h1>
         <form onSubmit={handleSubmit}>
          <label>Enter The Title of the : Todo</label>
          <br/>
         <input 
         name="title"
         value={title} onChange={handleChange}
         placeholder="Enter Title"
         />
         <br />
         <br />
         {/* <input 
         name="completed"
         value={completed} onChange={handleChange}
         placeholder="Enter State"
         /> */}

         <label>Select : State</label>
         <br/>
         <select name="completed" value={completed} onChange={handleChange}>
         <option value="">--Please choose an State--</option>
         <option value="true">Completed</option>
         <option value="false">Pending</option>
         </select>

         <br />
         <br />
         <input type="submit" value="Add-Todo"/>
         <br />
         <br />
         </form >
        </div>
    )
}
export default AddTodos