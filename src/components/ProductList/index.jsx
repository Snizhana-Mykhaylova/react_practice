import { createUseStyles } from 'react-jss';
import ProductItem from '../ProductItem';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 10
  }
});

const ProductList = ({ products, onDelete }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {products.map((product) =>
        product.count > 0 ? (
          <ProductItem key={product.id} product={product} onDelete={onDelete} />
        ) : null
      )}
    </ul>
  );
};

export default ProductList;
