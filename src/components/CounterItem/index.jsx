const CounterItem = ({
  counter,
  onIncrement,
  onDecrement,
  ondeleteCounter
}) => {
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
};

export default CounterItem;
