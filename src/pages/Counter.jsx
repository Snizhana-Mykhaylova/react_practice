import { useState, useEffect } from 'react';
// import SingleCounter from '../components/SingleCounter';
import CounterList from '../components/CounterList';

const Counter = () => {
  const [counters, setCounters] = useState([]);

  // component did mount

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));
    setCounters(data);
  }, []);

  // component did update - after data update
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  // component did update - always after render
  // useEffect(() => {
  // console.log('render');
  // });

  const addCounter = () =>
    setCounters((prevState) => [...prevState, { id: Date.now(), value: 0 }]);

  const deleteCounter = (id) =>
    setCounters((prevState) =>
      prevState.filter((counter) => counter.id !== id)
    );
  const handleIncrement = (id) => {
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      )
    );
  };

  return (
    <div className='todos'>
      <h1>Counter</h1>
      {/* <SingleCounter /> */}
      <button onClick={addCounter}>+Add counter</button>
      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        ondeleteCounter={deleteCounter}
      />
    </div>
  );
};

export default Counter;
