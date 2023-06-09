import React from 'react'

const initState = {
    name:"",
    gender:"",
    role:"",
    ismaritalStatus : false
}

const Form = () => {
    const [formState,setFormState] = React.useState(initState)

    const handleChange = (e) => {
        const {name,value,type,checked} = e.target;
        const val = type === "checkbox" ? checked : value
        setFormState({
            ...formState,
            [name] : val
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    const {name,gender,role,ismaritalStatus} = formState;

  return (
    <div>
      <h1><i>Form</i></h1>
      <form onSubmit={handleSubmit} >

        <label>Name : </label>
        <input 
        onChange={handleChange}
        name="name"
        value={name}
        placeholder='Enter Name'/>
        <br/>

        <label>Gender : </label>
        <select 
         onChange={handleChange}
         value={gender} name='gender'>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br/>

        <label>Role : </label>
        <select 
        onChange={handleChange}
        value={role} name='role'>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="giolo">Gigolo</option>
        </select>
        <br/>

        <label>Marital Status : </label>
        <input
         name='ismaritalStatus'
         onChange={handleChange}
         type="checkbox"
         checked={ismaritalStatus}
         ></input>
        <br />

        <button type='submit'>register-here</button>
      </form>
    </div>
  )
}

export default Form
