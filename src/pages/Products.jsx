import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { getProducts, addProduct, deleteProduct } from '../api/productsApi';

// const defaultProducts = [
//   {
//     id: 1,
//     name: 'phone1',
//     price: 5000,
//     count: 10,
//     img: 'smartphone'
//   },
//   {
//     id: 2,
//     name: 'phone2',
//     price: 2000,
//     count: 10,
//     img: 'phone'
//   },
//   {
//     id: 3,
//     name: 'phone3',
//     price: 3000,
//     count: 10,
//     img: 'smartphone'
//   },
//   {
//     id: 4,
//     name: 'phone4',
//     price: 5000,
//     count: 10,
//     img: 'smartphone'
//   },
//   {
//     id: 5,
//     name: 'phone5',
//     price: 1000,
//     count: 0,
//     img: 'phone'
//   }
// ];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('products'));
    // setProducts(data);
    setIsLoading(true);
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));

  // }, [products]);

  const handleAddProduct = (newProduct) => {
    // setProducts((prevState) => [...prevState, newProduct]);
    setIsLoading(true);
    addProduct(newProduct)
      .then((data) => setProducts((prevState) => [...prevState, data]))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteProduct = (id) => {
    // setProducts((prevState) => [...prevState, newProduct]);
    setIsLoading(true);
    deleteProduct(id)
      .then(() =>
        setProducts((prevState) =>
          prevState.filter((product) => product.id !== id)
        )
      )
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='products'>
      <ProductForm onAddProduct={handleAddProduct} />
      {/* <button onClick={handleAddProduct}>+Add Product</button> */}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading ...</p>}
      <ProductList
        products={products}
        onDelete={handleDeleteProduct}
      ></ProductList>
    </div>
  );
};

export default Products;
