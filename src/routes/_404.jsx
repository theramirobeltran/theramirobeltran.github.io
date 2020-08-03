import React, { useContext, useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { AppContext } from '../App';

export default () => {
  const [timer, setTimer] = useState(7);
  const app = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  })

  if (timer < 0) {
    return <Redirect to='/' />
  }

  app.setPhrase('Oops, Looks like you are lost')

  return (
    <main id="_404-container">
      <h2>Redirecting in {timer}</h2>
      <h3>or</h3>
    </main>
  );
};
