import { useEffect, useState } from "react";

const useTimer = (delay) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow((prev) => !prev);
    }, delay);
  }, []);

  return show;
};

export default useTimer;
