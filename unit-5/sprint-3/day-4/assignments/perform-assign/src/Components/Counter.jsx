import React, { memo, useCallback, useEffect, useState } from "react";

export const Counter = memo(() => {
  const [time, setTime] = useState(0);
  const incrementTimer = useCallback(() => {
    setTime((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(incrementTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count : {time}</div>;
});
