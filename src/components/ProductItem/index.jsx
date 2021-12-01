const ProductItem = ({ product }) => {
  return (
    <li className='item'>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </li>
  );
};

export default ProductItem;
