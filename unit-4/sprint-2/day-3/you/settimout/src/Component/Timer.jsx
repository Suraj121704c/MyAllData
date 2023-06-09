import React from "react";

function Timer(){

    const [count,setCount] = React.useState(10)

    React.useEffect(()=>{
      const IntervalId = setTimeout(()=>{
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
export default Timer;