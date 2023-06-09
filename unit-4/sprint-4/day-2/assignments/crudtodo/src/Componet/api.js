import axios from "axios"

export const getTodos = (params = {}) => {
    return axios.get(
        `http://localhost:3001/todos`,{
            params : {
                _page : params.page,
                _limit : params.limit,
                _sort : params.sort,
                _order : params.order
            },
        }
    );
}

//Add a new country in the api
export const addTodos = (data = {}) => {
    return axios({
        method:"post",
        url:"http://localhost:3001/todos",
        data:{
            title : data.title,
            completed:data.completed
        }
    })
}

//Delete data in API
export const deleteTodos = (id) => {
    return axios({
        method:"delete",
        url:`http://localhost:3001/todos/${id}`,
    })
}

//Updater
export const putTodos = (id,data={}) => {
    axios({
    method:"patch",
    url:`http://localhost:3001/todos/${id}`,
    data:{
        title : data,
    }
   }).then((res) => console.log(res))
}

// Toggler

export const togle = (id,completed) => {

    const url = `http://localhost:3001/todos/${id}`;

    axios.patch(url,{completed : !completed})

    .then((res) => console.log(res));

}
