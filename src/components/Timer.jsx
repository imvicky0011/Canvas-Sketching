import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(5);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      {!isActive ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={resetTimer}>Reset</button>
      )}
    </div>
  );
}

export default Timer;
