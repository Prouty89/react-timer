import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('seconds', seconds)
  }, [seconds]);

  console.log('count', count)


  setSeconds(seconds + 1);

  return (
    <div className="app">
      <button onClick={() => setSeconds(seconds + 1)}>Inc Seconds</button>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <div className='time-circle'>
        <div className="time">
          {seconds}
        </div>
      </div>
      <div className="buttons">
        <button className="play-pause">
          <i className="fa fa-play fa-2x" />
        </button>
        <button className="play-pause">
          <i className="fa fa-pause fa-2x" />
        </button>
        <button className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
