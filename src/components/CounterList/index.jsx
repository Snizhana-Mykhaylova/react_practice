import CounterItem from '../CounterItem';
import ErrorBoundary from '../ErrorBoundary';
const CounterList = ({
  counters,
  onIncrement,
  onDecrement,
  ondeleteCounter
}) => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};
export default CounterList;
