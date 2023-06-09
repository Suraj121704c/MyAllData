import React from "react";

const initState = {
    title: "",
    price: "",
    imageurl: ""
}

export default function ProductFrom({ handleFormSubmit }) {
  const [formState,setFormState] = React.useState(initState)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formState)
    setFormState(initState)
  }

  const handleChange = (e) => {
    const { name , value} = e.target;
    setFormState(
     {
       ...formState,
       [name] : value,
     }
    )
   }

  const { title, price, imageurl } = formState

    return (
    <div id="product-creation-form">
        <form onSubmit={ handleSubmit }>
          <label>
            Title : <input 
            name = "title"
            type="text"
            placeholder='Enter Product Title'
            value={ title }
            onChange = { handleChange }
            ></input>
          </label>
          <br />
          <br />
          <label>
            Price : <input 
            name = "price"
            type="number"
            placeholder='Enter Product Price'
            value={ price }
            onChange = { handleChange }
            ></input>
          </label>
          <br />
          <br />
          <label>
            Image Url : <input 
            name = "imageurl"
            type="text"
            placeholder='Enter Image Link'
            value={ imageurl }
            onChange = { handleChange }
            ></input>
          </label>
          <br />
          <br />
          <input type="submit" value="Create Product" />
          </form>
       </div>
    )
}