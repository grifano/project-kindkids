"use client";
import React, { useState, useEffect } from "react";

const eventDate = new Date("2025-04-23T18:00:00Z").getTime(); // Set event date & time (UTC)

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Event has started
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="m-auto flex text-3xl leading-none text-white md:text-6xl">
      {/* Days */}
      <div className="flex flex-col border-r-2 border-white px-6 text-center font-mono">
        <p>{timeLeft.days}</p>
        <span className="text-sm">Days</span>
      </div>
      {/* Hours */}
      <div className="flex flex-col border-r-2 border-white px-6 text-center font-mono">
        <p>{timeLeft.hours}</p>
        <span className="text-sm">Hours</span>
      </div>
      {/* Minutes */}
      <div className="flex flex-col border-r-2 border-white px-6 text-center font-mono">
        <p>{timeLeft.minutes}</p>
        <span className="text-sm">Min</span>
      </div>
      {/* Seconds */}
      <div className="flex flex-col px-6 text-center font-mono">
        <p>{timeLeft.seconds}</p>
        <span className="text-sm">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
