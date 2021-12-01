import ProductList from '../components/ProductList';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'phone1',
      price: 5000,
      count: 10
    },
    {
      id: 2,
      name: 'phone2',
      price: 2000,
      count: 10
    },
    {
      id: 3,
      name: 'phone3',
      price: 3000,
      count: 10
    },
    {
      id: 4,
      name: 'phone4',
      price: 5000,
      count: 10
    },
    {
      id: 5,
      name: 'phone5',
      price: 1000,
      count: 0
    }
  ];
  return (
    <div className='products'>
      <ProductList products={products}></ProductList>
    </div>
  );
};

export default Products;