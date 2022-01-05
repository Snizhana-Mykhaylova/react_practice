import { compose } from 'recompose';
import withHigherOrderComponent from './withHigherOrderComponent';
import witLog from './withLog';

const TestComponent = ({ magicNumber = 0, a = 0, b = 0 }) => {
  return (
    <div className='test-component'>
      <h4>Test Component</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
        consectetur aliquam voluptates illo consequatur, officia, nostrum
        suscipit nesciunt deleniti in enim, cupiditate voluptatibus deserunt
        alias aspernatur nemo numquam molestiae dolores.
      </p>
      <p>magic number: {magicNumber + a + b} </p>
    </div>
  );
};

export default compose(withHigherOrderComponent, witLog)(TestComponent);

// export default withHigherOrderComponent(witLog(TestComponent));
