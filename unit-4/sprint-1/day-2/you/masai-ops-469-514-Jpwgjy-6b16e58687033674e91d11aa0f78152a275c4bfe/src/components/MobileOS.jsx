const osList = ["Android","Blackberry","iPhone","Windows Phone"].map((el)=><li>{el}</li>)

const mobileManufacures = ["Samsung","HTC","Micromax","Apple"].map((el)=><li>{el}</li>)

function MobileOS(){
    return (
    <div className="App">
        <h1>Mobile Operating System</h1>
        <ul data-testid={"os-list"}>{osList}</ul>
        <h1>Mobile Manufacturers</h1>
        <ul data-testid={"manufacturers-list"}>{mobileManufacures}</ul>
    </div>
    )
}
export default MobileOS;