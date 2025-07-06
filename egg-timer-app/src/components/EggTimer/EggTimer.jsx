import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./EggTimer.module.css";

const stopSound = "/sound/stopSound.wav";

function EggTimer({ eggType, onReset }) {
  const [timeLeft, setTimeLeft] = useState(eggType?.time || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const audioRef = useRef(null);

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (secs === 0) return `${mins} min${mins > 1 ? "s" : ""}`;
    return `${mins} min ${secs} sec`;
  }

  useEffect(() => {
    if (timeLeft === 0 && !soundPlayed) {
      audioRef.current = new Audio(stopSound);
      audioRef.current.play().catch((error) => {
        console.error("Error playing this sound:", error);
      });
      setSoundPlayed(true);
    }
  }, [timeLeft, soundPlayed]);

  useEffect(() => {
    if (!isRunning || timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => setIsRunning(true);

  const handleStop = () => {
    setIsRunning(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  const handleReset = () => {
    setTimeLeft(eggType?.time || 0);
    setIsRunning(false);
    setSoundPlayed(false);
    onReset();
  };

  return (
    <div className={styles.timerContainer}>
      <div className={styles.wrapperDiv}>
        <h1 className={styles.header}>Let Us Time Your Egg!</h1>
        <h2 className={styles.eggTimerSection}>
          {timeLeft > 0 ? (
            <>
              <div>Your {eggType.eggNames} will be ready</div>
              <div>
                <span className={styles.time}>{formatTime(timeLeft)}</span>
              </div>
            </>
          ) : (
            <>
              Your {eggType.eggNames} is{" "}
              <span className={styles.done}>done!</span>
            </>
          )}
        </h2>

        <div className={styles.button_container}>
          <button
            onClick={handleStart}
            disabled={isRunning || timeLeft === 0}
            className="btn"
          >
            Start
          </button>
          <button onClick={handleStop} disabled={!isRunning} className="btn">
            Stop
          </button>
          <button onClick={handleReset} className="btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

EggTimer.propTypes = {
  eggType: PropTypes.shape({
    time: PropTypes.number.isRequired,
    eggNames: PropTypes.string.isRequired,
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default EggTimer;
