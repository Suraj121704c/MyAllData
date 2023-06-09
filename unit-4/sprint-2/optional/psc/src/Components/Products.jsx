export default function ProductItem({title,imageurl,price}) {
    return <div style={{border:"1px solid black"}}>
    <img src={imageurl} alt={title} width="300px" height="300px"/>
    <h1>Title : {title}</h1>
    <h6>Price : {price}</h6>
    </div>
}