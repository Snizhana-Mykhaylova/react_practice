import { useState, useEffect } from 'react';
import { getProductById } from '../api/productsApi';
import { useParams } from 'react-router-dom';

const ProductsDetail = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    getProductById(params.id).then((data) => setProduct(data));
    console.log(product);
  }, []);

  return (
    <div>
      <h2>Products Detail</h2>
    </div>
  );
};

export default ProductsDetail;
