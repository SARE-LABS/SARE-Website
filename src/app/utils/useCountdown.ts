import { useEffect, useState } from "react";

export default function useCountdown(endDateString: string) {
  const endDate = new Date(endDateString).getTime();
  const [timeLeft, setTimeLeft] = useState(endDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(endDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (timeLeft <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds, expired: false };
}
