import Products from '../../pages/Products';
import Contacts from '../../pages/Contacts';
import Counter from '../../pages/Counter';
import Timer from '../../pages/Timer';

const Content = () => {
  const { pathname } = window.location;
  return (
    <div className='content'>
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/counter' && <Counter />}
      {pathname === '/timer' && <Timer />}
    </div>
  );
};

export default Content;
