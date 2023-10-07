import { useState, useEffect } from "react";
const Upcoming = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(43);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date("2023-11-31 00:00:00").getTime();
      const timeRemaining = eventDate - now;

      setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
  return (
    <div className="flex justify-center items-center px-5 md:px-10 lg:px-36 py-5 md:py-28 gap-8">
      <div>
        <h1 className="text-5xl">
          Upcoming <span className="text-green-700 font-semibold">Tour</span>:
        </h1>
      </div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-5 bg-green-500 rounded-box text-black -content">
          <span className="countdown font-mono text-5xl">{days}</span>
          days
        </div>
        <div className="flex flex-col p-5 bg-green-500 rounded-box text-black -content">
          <span className="countdown font-mono text-5xl">{hours}</span>
          hours
        </div>
        <div className="flex flex-col p-5 bg-green-500 rounded-box text-black -content">
          <span className="countdown font-mono text-5xl">{minutes}</span>
          min
        </div>
        <div className="flex flex-col p-5 bg-green-500 rounded-box text-black -content">
          <span className="countdown font-mono text-5xl">{seconds}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
