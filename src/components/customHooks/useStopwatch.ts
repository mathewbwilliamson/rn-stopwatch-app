import React from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const interval = React.useRef<any>(undefined);

  React.useEffect(
    () => {
      if (isRunning) {
        interval.current = setInterval(
          () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1),
          100
        );
      }
      return () => clearInterval(interval.current);
    },
    [isRunning]
  );

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime
  };
};

export const useStopwatch = () => {
  const [laps, setLaps] = React.useState<number[]>([]);
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    const prevTotal =
      laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
    const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;
    isRunning && setLaps([...laps, currentLap]);
  };

  return {
    elapsedTime: elapsedTime.toFixed(1),
    laps,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
    isRunning
  };
};
