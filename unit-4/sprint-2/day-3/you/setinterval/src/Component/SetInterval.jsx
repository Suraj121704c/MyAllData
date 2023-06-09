import React from "react";

function SetInter(){

    const [count,setCount] = React.useState(15)

    React.useEffect(()=>{
      const IntervalId = setInterval(()=>{
        setCount((preCount) => {
            if(preCount === 1){
                clearInterval(IntervalId);
                return 0;
            }
            return preCount - 1
        })
      },1000)
    },[])

    return (
       <h1>Time : {count}</h1>
    )
}
export default SetInter;