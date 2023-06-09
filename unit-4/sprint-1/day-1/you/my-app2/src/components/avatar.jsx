function Avatar(props) {
    const {src , name ,rounded} = props
    const styles = {
        borderRadius: rounded ? "50%" : "16px",
        border : "1px solid black",
    }
    return <div>
    <img src={src} 
    alt = {name}
    style={styles}
    >
    </img>
    <h4>Suraj Singh</h4>
    </div>
}


export {Avatar};