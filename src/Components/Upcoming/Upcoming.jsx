import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-36 py-5 md:py-16 ">
      <div data-aos="fade-left" className="my-20">
        <h1 className="text-4xl md:text-6xl text-green-700 font-bold text-center ">
          Trending campaign
        </h1>
        <hr className="bg-green-700 w-[130px] mt-3 h-[5px] mx-auto" />
      </div>
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row justify-center items-center gap-8"
      >
        <div>
          <h1 className="text-3xl md:text-5xl">
            Upcoming <span className="text-green-700 font-semibold">Tour</span>:
          </h1>
        </div>
        <div className="grid grid-flow-col gap-2 md:gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-1 md:p-5 bg-green-500 rounded-lg lg:rounded-box text-black -content">
            <span className="countdown font-mono text-5xl">{days}</span>
            days
          </div>
          <div className="flex flex-col p-1 md:p-5 bg-green-500 rounded-lg lg:rounded-box text-black -content">
            <span className="countdown font-mono text-5xl">{hours}</span>
            hours
          </div>
          <div className="flex flex-col p-1 md:p-5 bg-green-500 rounded-lg lg:rounded-box text-black -content">
            <span className="countdown font-mono text-5xl">{minutes}</span>
            min
          </div>
          <div className="flex flex-col p-1 md:p-5 bg-green-500 rounded-lg lg:rounded-box text-black -content">
            <span className="countdown font-mono text-5xl">{seconds}</span>
            sec
          </div>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-down"
          className="flex justify-center mx-auto items-center py-16"
        >
          <Link to="/login">
            <button className="bg-green-700 flex justify-center text-sm text-white px-10 py-3 rounded-none">
              Make Your Reservation →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
