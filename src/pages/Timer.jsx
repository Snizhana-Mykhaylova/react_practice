import { useState } from 'react';
import TimerCounter from '../components/TimerCounter';
import Modal from '../components/Modal';

const Timer = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleTimerTogle = () => setShowTimer((prev) => !prev);
  const handleModalTogle = () => setShowModal((prev) => !prev);

  return (
    <div className='timer'>
      <button onClick={handleTimerTogle}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
      <hr />
      <button onClick={handleModalTogle}>Show modal</button>
      {showTimer ? <TimerCounter /> : null}

      {showModal ? <Modal onClose={handleModalTogle} /> : null}
    </div>
  );
};

export default Timer;
