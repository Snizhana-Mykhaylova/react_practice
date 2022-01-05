import { useContext } from 'react';
import Context from './context';

const TestComponent3 = () => {
  const number = useContext(Context);
  return (
    <div className='test-component3'>
      <h4>Test Component3 </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aliquid
        assumenda. Vero totam neque ullam perspiciatis laudantium, repudiandae
        quam pariatur, reprehenderit ipsum rem dolor voluptatum temporibus
        voluptatem hic maiores delectus deleniti libero corporis! Neque harum,
        maiores natus iusto obcaecati rem! Odio ea quibusdam quia corrupti et?
        Voluptate molestiae deserunt fugit!
      </p>
      <p>number: {number}</p>
    </div>
  );
};

export default TestComponent3;
