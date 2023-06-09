import useTimer from "./useTimer";

const Timer1 = () => {
  const show = useTimer(3000);

  return <div>{show && <h1>This is Timer - 1</h1>}</div>;
};

export default Timer1;
