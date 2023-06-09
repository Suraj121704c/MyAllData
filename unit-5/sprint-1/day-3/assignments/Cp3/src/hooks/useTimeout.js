import { useState, useEffect } from "react";

const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady((prev) => !prev);
    }, delay);
  }, []);

  return { ready };
};

export default useTimeout;
