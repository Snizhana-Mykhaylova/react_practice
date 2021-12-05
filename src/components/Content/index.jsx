import Products from '../../pages/Products';
import Contacts from '../../pages/Contacts';
import Counter from '../../pages/Counter';

const Content = () => {
  const { pathname } = window.location;
  return (
    <div className='content'>
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/counter' && <Counter />}
    </div>
  );
};

export default Content;
