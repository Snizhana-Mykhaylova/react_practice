import { useState } from 'react';
import Context from './context';

import TestComponent1 from './TestComponent1';

const ContextDemo = () => {
  const [number, setNumber] = useState(12);

  return (
    <Context.Provider value={number}>
      <div className='context'>
        <h2>Context</h2>
        <TestComponent1 />
      </div>
    </Context.Provider>
  );
};

export default ContextDemo;
