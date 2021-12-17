import { useState, useEffect } from 'react';
import moment from 'moment';

const TimerCounter = () => {
  useEffect(() => {
    const id = setInterval(() => {
      setData(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const [data, setData] = useState();
  const fomatData = moment(data).format('YYYY MM DD hh:mm:ss');
  return (
    <>
      <h2>Timer</h2>
      <p>current Data: {fomatData}</p>
    </>
  );
};

export default TimerCounter;
