import React, { useState, useEffect } from "react";
import './App.css'

function Countdown(props) {
  let { endDate } = props;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  endDate = new Date(endDate).getTime();
  useEffect(() => {
    let interval = null;


    if (isNaN(endDate)) {
      return;
    }

    interval = setInterval(() => {
      let startDate = new Date();
      startDate = startDate.getTime();

      let timeRemaining = parseInt((endDate - startDate) / 1000);

      if (timeRemaining >= 0) {
        setDays(parseInt(timeRemaining / 86400));
        timeRemaining = (timeRemaining % 86400);

        setHours(parseInt(timeRemaining / 3600));
        timeRemaining = (timeRemaining % 3600);

        setMinutes(parseInt(timeRemaining / 60));
        timeRemaining = (timeRemaining % 60);

        setSeconds(parseInt(timeRemaining));
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <section className="ct-section">
        <p>{days} <span>Gün</span></p>
      </section>
      <section className="ct-section">
        <p>{hours} <span>Saat</span></p>
      </section>
      <section className="ct-section">
        <p>{minutes} <span>Dakika</span></p>
      </section>
      <section className="ct-section">
        <p>{seconds} <span>Saniye</span></p>
      </section>
    </div>
  );
}

export default Countdown;
