function PageInitaion( { page, handlePageChange,totalCount }){
    return (
    <div id="pagination-section">
    <button disabled={page===1} onClick={()=>handlePageChange(- 1)}>PREVIOUS</button>
    <button style={{color:"red"}} disabled>{page}</button>
    <button disabled={page === Math.ceil(totalCount/3)} onClick={()=>handlePageChange(+ 1)}>NEXT</button>
   </div>
    )
}

export default PageInitaion 