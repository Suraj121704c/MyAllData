import Card from './Card.jsx';
import React from "react"

const getData = (url) => {
    return fetch(url).then((res)=>res.json())
}

const initState = {
    name : "",
    height : "",
    weight : "",
    power : "",
}

const InputTags=()=>{
   
    const [details,setDetails] = React.useState(initState)
    const [data,setData] = React.useState([])

    const handleInput = (e) => {
        const {name , value} = e.target
        setDetails({
            ...details, [name] : value,
        })
    }
 
    const SubmitDetails = (e) => {
        e.preventDefault()
        setDetails(initState)
        fetch("http://localhost:3001/data",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(details)
        }).then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
        })  
    } 
    
    const fetchAndUpdate = async () => {
        try {
            let data = await getData(`http://localhost:3001/data`)
            setData(data)
         
        } catch (error) {
            console.log(error)
        }
    }
    
    React.useEffect(()=>{
        fetchAndUpdate()
    },[data])

    const { name , height , weight , power } = details

    return(
        <>
        <form onSubmit={SubmitDetails}>
            <input 
            data-testid="input-name" 
            type="text" 
            onChange={handleInput}
            placeholder="name"
            name='name'
            value={name}
            />
            <br />
            <br />
            <input data-testid="input-height" type="text" onChange={handleInput}
            value={height}
            name='height'
            placeholder="height"/>
            <br />
            <br />
            <input data-testid="input-weight" type="text" onChange={handleInput}
            value={weight}
            name='weight'
            placeholder="weight"/>
            <br />
            <br />
            <input data-testid="input-power" type="text" onChange={handleInput}
            value={power}
            name='power'
            placeholder="power"/>
            <br />
            <br />
            <button data-testid="add-button" type='submit' disabled={(height === "" || weight === "" || power === "" || name === "")}>Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull">Most Powerful Superhero</button>
        <button data-testid="all-superheroes">Show All</button>
        <Card data-testid="superhero-list" data={data}/>
        </>
    )
}

export default InputTags;
