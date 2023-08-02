import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'


export default function Countdown() {
  const [counter, setCounter] = useState(0);
  const [sec, setSec] =  useState(0);
  const [disabled, setDisabled] =  useState(false);

  function handleSTart() {
    setCounter(sec);
    setSec(0);
    setDisabled(true);
  }

  function handleOnchange(e) {
    setSec(e.target.value);
  }

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if(counter<=0){
      setDisabled(false);
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <input disabled= {disabled} onChange={handleOnchange} type="text" value={sec}/>
      <button disabled= {disabled} onClick={handleSTart}> start </button>
      <div>Countdown: {counter}</div>
    </div>
  );
}
