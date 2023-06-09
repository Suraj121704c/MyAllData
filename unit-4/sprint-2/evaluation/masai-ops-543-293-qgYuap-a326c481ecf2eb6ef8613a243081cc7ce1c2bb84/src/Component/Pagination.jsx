function Pagination({ onChange ,current ,total}) {
  console.log(current)
   let arr = []
   for(let i = 1;i<=total;i++){
    let obj = {}  
    i == current ? obj = {border : "2px solid red"} : null
    arr.push(<button style={obj} key={i} onClick={() => onChange(i)}>{i}</button>)
    }
  return (
  <div data-testid = "page-container">
    {arr}
  </div>
  );
}
export default Pagination;
