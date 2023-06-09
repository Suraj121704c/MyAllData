import axios, { AxiosResponse } from "axios"
import { Todo } from "./constants"

export const postTodo = async (title: string) => {
    const newTodo: Todo = {
        title,
        status: false
    }
    const res: AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos", newTodo)
    console.log(res)
}

export const getTodo = async () => {
    const res: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/todos");
    return res.data;
}

export const toogleTodo = async (status: boolean,id?:number) => {
    // const todo = await.get(`http://localhost:8080/todos/${id}`);
    const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
        status: !status
        // status : !todo.status
    })
}