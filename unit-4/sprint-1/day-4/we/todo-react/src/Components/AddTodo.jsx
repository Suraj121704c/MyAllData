import React from 'react'

const AddTodo = ({handleAddTodo}) => {
    const [text,setText] = React.useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        handleAddTodo(text)
        setText("");
    }

  return (
    <div>
      <input placeholder='Enter Todo' value={text} onChange={handleChange}/>
      <br />
      <br />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default AddTodo
