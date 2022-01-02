import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { getCart } from '../../api/productsApi';

const Header = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCart().then((data) => setCart(data));
  }, []);

  return (
    <div className={styles.header}>
      <p>header</p>
      <Badge badgeContent={cart.length} color='primary'>
        <ShoppingCartOutlinedIcon />
      </Badge>
    </div>
  );
};

export default Header;
