import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <p>menu</p>

      <Link to='/react_practice'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/order'>Order</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/timer'>Timer</Link>
    </div>
  );
};

export default Menu;
