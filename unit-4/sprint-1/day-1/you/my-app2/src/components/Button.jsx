//cameCase
//PascalCase

function Button(props){
    // console.log(props)
    // return <button>{props.name}</button>
    const {text,handleButtonClick} = props
    return <button onClick={handleButtonClick}>{text}</button>
  }

 export default Button; 