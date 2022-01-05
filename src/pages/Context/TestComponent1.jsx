import TestComponent2 from './TestComponent2';

const TestComponent1 = () => {
  return (
    <div className='test-component1'>
      <h4>Test Component1 </h4>
      <TestComponent2 />
    </div>
  );
};

export default TestComponent1;
