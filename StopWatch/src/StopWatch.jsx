import { useEffect, useRef, useState } from "react";
import Timer from "./Timer.jsx";
import ControlButtons from "./ControlButtons.jsx";

function StopWatch() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startTimeRef = useRef(0);
  const elapsedBeforeStartRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setElapsed(
        elapsedBeforeStartRef.current +
          performance.now() -
          startTimeRef.current,
      );
    }, 10);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    elapsedBeforeStartRef.current = 0;
    startTimeRef.current = performance.now();
    setElapsed(0);
    setHasStarted(true);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    if (isRunning) {
      const currentElapsed =
        elapsedBeforeStartRef.current +
        performance.now() -
        startTimeRef.current;

      elapsedBeforeStartRef.current = currentElapsed;
      setElapsed(currentElapsed);
      setIsRunning(false);
    } else {
      startTimeRef.current = performance.now();
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasStarted(false);
    setElapsed(0);
    elapsedBeforeStartRef.current = 0;
    startTimeRef.current = 0;
  };

  return (
    <section className="stopwatch">
      <Timer time={elapsed} />
      <ControlButtons
        hasStarted={hasStarted}
        isRunning={isRunning}
        onStart={handleStart}
        onPauseResume={handlePauseResume}
        onReset={handleReset}
      />
    </section>
  );
}

export default StopWatch;
