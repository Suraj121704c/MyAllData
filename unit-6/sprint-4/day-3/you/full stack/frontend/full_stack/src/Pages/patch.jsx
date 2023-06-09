import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Patch = () => {
    const [data, setData] = React.useState([])
    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    let params = useParams();

    React.useEffect(() => {
        axios.get(`http://localhost:8000/notes/${params.id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        }).then((res) => {
            console.log(res.data[0])
            setData(res.data[0])
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const userDetails = {
            title, body
        }
        axios.patch(`http://localhost:8000/notes/patch/${params.id}`, userDetails, {
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

    return <div>
        <Navbar />
        <h1>You can Edit Here...</h1>
        <form onSubmit={handleSubmit}>
            <h3>id : {data._id}</h3>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={data.title} />
            <br />
            <br />
            <input type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)} placeholder={data.body} />
            <br />
            <br />
            <button type="submit">Edited</button>
        </form>
    </div>;
};

export default Patch;
