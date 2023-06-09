// Add function 
export const AddTask =  (data={}) => {
  fetch("http://localhost:3001/Todos",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title : data.title,
      completed : data.completed
    }),
});
} 


// Delete Function 
export const DeleteTask = (id) => {
  fetch(`http://localhost:3001/Todos/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type':'application/json'
    }
    })
}


// Toggle function 
export const toogle = (id,completed) => {
  fetch(`http://localhost:3001/Todos/${id}`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify({
      completed : !completed
    }),
  })
}

// Updater function 
export const updateTodo = (id,data={}) => {
  fetch(`http://localhost:3001/Todos/${id}`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify({
      title : data
    })
  })
  // .then((res)=> console.log(res))
}