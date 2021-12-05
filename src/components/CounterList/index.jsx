import CounterItem from '../CounterItem';
const CounterList = ({
  counters,
  onIncrement,
  onDecrement,
  ondeleteCounter
}) => {
  return (
    <ul className='counter-list'>
      {counters.map((counter) => (
        <CounterItem
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          ondeleteCounter={ondeleteCounter}
        />
      ))}
    </ul>
  );
};
export default CounterList;
