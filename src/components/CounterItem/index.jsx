import React from 'react';
const areEqual = (prevProps, nextProps) =>
  prevProps.counter.value === nextProps.counter.value;

const CounterItem = React.memo(
  ({ counter, onIncrement, onDecrement, ondeleteCounter }) => {
    console.log(`render ${counter.id}`);
    // if (counter.value > 10) {
    //   throw new Error('Boom');
    // }
    return (
      <li className='counter-item'>
        <button onClick={() => onIncrement(counter.id)}>+</button>
        <span>{counter.value}</span>
        <button onClick={() => onDecrement(counter.id)}>-</button>
        <button onClick={() => ondeleteCounter(counter.id)}>
          Delete counter
        </button>
      </li>
    );
  },
  areEqual
);

export default CounterItem;
