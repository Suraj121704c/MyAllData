const Card=({data=[]})=>{
    console.log(data)
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div  data-testid="superhero-list">
                        <h1>Hero Name : {item.heroName}</h1>
                        <h3>Height : {item.height}</h3>
                        <h3>Weight : {item.weight}</h3>
                        <h3>Power Level : {item.powerLevel}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
