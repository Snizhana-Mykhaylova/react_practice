import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const defaultProducts = [
  {
    id: 1,
    name: 'phone1',
    price: 5000,
    count: 10,
    img: 'smartphone'
  },
  {
    id: 2,
    name: 'phone2',
    price: 2000,
    count: 10,
    img: 'phone'
  },
  {
    id: 3,
    name: 'phone3',
    price: 3000,
    count: 10,
    img: 'smartphone'
  },
  {
    id: 4,
    name: 'phone4',
    price: 5000,
    count: 10,
    img: 'smartphone'
  },
  {
    id: 5,
    name: 'phone5',
    price: 1000,
    count: 0,
    img: 'phone'
  }
];

const Products = () => {
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products'));
    setProducts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevState) => [...prevState, newProduct]);
  };
  return (
    <div className='products'>
      <ProductForm onAddProduct={handleAddProduct} />
      {/* <button onClick={handleAddProduct}>+Add Product</button> */}
      <ProductList products={products}></ProductList>
    </div>
  );
};

export default Products;
