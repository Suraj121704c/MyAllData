import React from "react"
// import { addCountry } from "./api";

function AddCountry({handleAddCountry}) {
    const [formState,setFormState] = React.useState({
        country : "",
        population : ""
    }
    )
   
    const handleChange = (e) => {
       const {name,value ,type} = e.target;
       const val = type === "number" ? Number(value) : value
       setFormState({
         ...formState,
         [name] : val
       })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      handleAddCountry(formState)
    }

    const {country,population} = formState;

    return (
        <div>
         <form onSubmit={handleSubmit}>
         <input 
         name="country"
         value={country} onChange={handleChange}
         placeholder="country"
         />
         <br />
         <br />
         <input 
         type="number"
         name="population"
         value={population} onChange={handleChange}
         placeholder="population"
         />
         <br />
         <br />
         <input type="submit" value="add-country"/>
         <br />
         <br />
         </form >
        </div>
    )
}
export default AddCountry