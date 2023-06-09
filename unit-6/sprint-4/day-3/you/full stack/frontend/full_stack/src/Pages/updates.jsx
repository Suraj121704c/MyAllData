import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

const Create = () => {
  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const userDetails = {
      title, body
    }

    axios.post("http://localhost:8000/notes/create", userDetails, {
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Navbar />
      <h1>Create Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder='title...' onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <input
          type="text"
          value={body}
          placeholder='body...' onChange={(e) => setBody(e.target.value)} />
        <br />
        <br />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Create