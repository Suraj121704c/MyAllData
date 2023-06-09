import React from "react";

const fixTimeString = (timeVal) => {
  return timeVal < 9 ? `0${timeVal}` : timeVal;
}

const formatTimeToString = (time) => {
  const seconds = time % 60 ;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  return `${fixTimeString(hours)}: ${fixTimeString(minutes)} : ${fixTimeString(seconds)}`
}

function Timer() {
  const [count, setCount] = React.useState(3610);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    const cleanup = () => {
      stopTimer();
    };
    return cleanup;
  }, []);

  //Instead of Mount Phase we are running the timer on the click event
  const startTimer = () => {
    //To avoid multiple click problem
    //when some intervel is runing it will return directly
    if (timerRef.current !== null) {
      return;
    }
    timerRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const restTimer = () => {
    stopTimer();
    setCount(3610);
  };
  return (
    <div>
      <h1>{formatTimeToString(count)} </h1>
      <button onClick={startTimer}>START TIMER</button>
      <button onClick={stopTimer}>STOP TIMER</button>
      <button onClick={restTimer}>RESTART TIMER</button>
    </div>
  );
}

export default Timer;
//1. This interval is started duting in the mount phase
