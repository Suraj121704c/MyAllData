import React from 'react'
import { updateVote } from '../api'
import { student } from '../constants'

interface studentData extends student{
    handleChange:()=>void
}

const StudentCard = ({id,name,image,batch,vote,code,handleChange}:studentData) => {
    const handleVote = () =>{
        updateVote(id).then(()=>handleChange())
    }
  return (
    <div>
        <img src={image} alt={name} />
        <h4>Name:{name}</h4>
        <p>Student Code:{code}</p>
        <p>Batch:{batch}</p>
        <button onClick={handleVote}>Vote</button>
        <h4>Vote Count:{vote}</h4>
    </div>
  )
}

export default StudentCard