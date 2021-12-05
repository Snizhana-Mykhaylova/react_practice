import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todo: { padding: 10 },
  buttons: {
    display: 'flex'
  }
});

const SingleCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);
  const handleIncrement = () => setValue((prevState) => prevState + step);

  const handleDecrement = () => setValue((prevState) => prevState - step);
  const handleStep = (newStep) => setStep(newStep);
  const handleChangeStep = (e) => handleStep(Number(e.target.value));
  // фунукция принимает два значения: 1 - функция, 2- перемення при изменении которой выполнится эта фцнкция
  useEffect(() => {
    console.log('value:', value);
  }, [value]);

  return (
    <div className={classes.todo}>
      <h2>SingleCounter</h2>

      <label>
        <h3>step</h3>
        <select name='step' onChange={handleChangeStep}>
          <option value='1'>1</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
          <option value='40'>40</option>
        </select>
      </label>
      <div className={classes.buttons}>
        <button onClick={handleIncrement}>+</button>
        <p>{value}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default SingleCounter;
