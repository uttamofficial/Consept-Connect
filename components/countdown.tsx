'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = '6/25/2024';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    handleCountdown(); // Initialize countdown immediately
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="p-4 bg-gradient-to-br from-transparent to-transparent rounded-3xl">
      <div className="w-full max-w-full mx-auto flex items-center justify-center flex-wrap gap-6 lg:gap-10 xl:gap-12">
        <CountdownItem num={remaining.days} text="Days" />
        <CountdownItem num={remaining.hours} text="Hours" />
        <CountdownItem num={remaining.minutes} text="Minutes" />
        <CountdownItem num={remaining.seconds} text="Seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div
      className="font-mono 
                 w-28 h-28              /* Base size for mobile */
                 sm:w-32 sm:h-32        /* Slightly larger on small screens */
                 md:w-40 md:h-40        /* Medium screens */
                 lg:w-64 lg:h-64        /* Larger size for desktop */
                 xl:w-72 xl:h-72        /* Even larger for extra-large screens */
                 flex flex-col gap-2 items-center justify-center 
                 border-r last:border-r-0 border-slate-200"
    >
      <div className="w-full text-center relative overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
  <motion.span
    key={num}
    initial={{
      y: 100, // Start below the view
    }}
    animate={{
      y: 0, // Move into view
    }}
    exit={{
      y: -100, // Move out above
    }}
    transition={{
      duration: 0.3, // Faster transition for swipe
      ease: "easeInOut", // Smooth swipe motion
    }}
    className="block text-3xl 
                sm:text-4xl 
                md:text-5xl 
                lg:text-7xl 
                xl:text-8xl 
                font-medium 
                bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] 
                bg-clip-text text-transparent leading-none"
    style={{
      lineHeight: "1",
      display: "inline-block", // Smooth swipe effect
    }}
  >
    {num < 10 ? "0" + num : num}
  </motion.span>
</AnimatePresence>








      </div>
      <span
        className="text-sm 
                   sm:text-base 
                   md:text-lg 
                   lg:text-2xl 
                   xl:text-3xl 
                   tracking-wide font-light text-slate-500"
      >
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;
