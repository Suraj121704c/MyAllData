import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Notes = () => {
  const [data, setData] = useState([])

  React.useEffect(() => {
    axios.get("http://localhost:8000/notes", {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    }).then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  // console.log(data)
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/notes/delete/${id}`, {
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Navbar />
      <h1>Import Notes Are Here...</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {data.length === 0 ? <h1>Notes not Found... Please Add ...</h1> :
          data.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>

              <button onClick={() => handleDelete(item._id)} style={{ color: "red" }}>delete</button>
              &nbsp;&nbsp;
              <button>
                <Link to={`/notes/patch/${item._id}`} style={{ textDecoration: "none", color: "green" }}>
                  Edit
                </Link>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
