import TestComponent from './TestComponent';
import Toggler from './Toggler';

const HocPage = () => {
  return (
    <div className='hoc'>
      <h2>HOC Demo</h2>
      <TestComponent a={8} b={10} />
      <Toggler>
        {({ isOpen, toggle }) => {
          return (
            <>
              <button onClick={toggle}>Toggle</button>
              {isOpen && <TestComponent />}
            </>
          );
        }}
      </Toggler>
    </div>
  );
};

export default HocPage;
