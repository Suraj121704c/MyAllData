import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {
    if (navigator.onLine) {
      setIsUserOnline(true);
    } else {
      setIsUserOnline(false);
    }
  }, []);

  return { isUserOnline };
};

export default useOnlineStatus;
