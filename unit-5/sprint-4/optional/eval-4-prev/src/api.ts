import axios from "axios"

export const sendSenate = async (name: string, image: string, code: string, batch: string) => {
    let res = await axios.post(`http://localhost:8080/students`, { name, image, code, batch, vote: 0 })
}

export const getSenate = async () => {
    let res = axios.get(`http://localhost:8080/students`)
    //console.log(res);
    return res
}

export const updateVote = async (id: number) => {
    let res = await axios.get(`http://localhost:8080/students/${id}`)
    //console.log(res.data);
    let newVote = { vote: res.data.vote + 1 };
    let data = await axios.patch(`http://localhost:8080/students/${id}`, newVote)

}

export const winners = async () => {
    let res = await axios.get(`http://localhost:8080/students?_page=1&_limit=3&_sort=vote&_order=desc`)
    return res
}