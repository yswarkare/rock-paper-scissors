import React, { useEffect, useState } from 'react';

const Timer = ({ startTimer, stopTimer, timerStopped = () => {} }) => {
	const [counter, setCounter] = useState(0);
	const [timer, setTimer] = useState();
  const [ timeoutObject, setTimeoutObject] = useState();
	const timeoutTime = 6000;

	const start = (reset) => {
		const newTimer = setInterval(() => {
			setCounter((prev) => prev + 1);
		}, 1000);
		setTimer(newTimer);
		const timeoutObject = setTimeout(() => {
			clearInterval(newTimer);
			setCounter(0);
      timerStopped()
		}, timeoutTime);
    setTimeoutObject(timeoutObject);
	};

	const reset = () => {
		clearInterval(timer);
		setCounter(0);
	};

	const startCounter = () => {
		start(reset);
		reset(timer);
	};

	useEffect(() => {
    if (startTimer) {
      setCounter(0);
      startCounter();
      return () => {
        setCounter(0);
      };
    }
	}, [startTimer]);

  useEffect(() => {
    if (stopTimer) {
      reset()
      timerStopped();
      clearTimeout(timeoutObject);
    }
	}, [stopTimer]);

	return (
		<div className='container timer-dial'>
			{/* <button
				onClick={() => {
					startCounter();
				}}
			>
				Start
			</button> */}
      <p className='timer-circle' >{`\u25EF`}</p>
			<p style={{ fontSize: '2rem' }} >{counter}</p>
			<p style={{ fontSize: '1.5rem' }} >Timer</p>
			{/* <button
				onClick={() => {
					resetCounter();
				}}
			>
				Reset
			</button> */}
		</div>
	);
};

export default Timer;
