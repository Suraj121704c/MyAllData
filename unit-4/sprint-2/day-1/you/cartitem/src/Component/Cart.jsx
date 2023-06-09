

function CartDisplay(props) {
  const {name , price  } = props
    return (
        <>
        <h1>{name}</h1>
        <h2>{price}</h2>
        </>
    )

}

export default CartDisplay;