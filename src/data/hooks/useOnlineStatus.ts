import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const goOnline = () => setIsOnline(true);
  const goOffline = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return isOnline;
};
