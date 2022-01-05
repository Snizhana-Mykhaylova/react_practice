import { useState, useEffect } from 'react';
import { getProductById } from '../api/productsApi';
import { useParams } from 'react-router-dom';

const ProductsDetail = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProductById(params.id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading ...</p>}
      <h2>Products Detail</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      {product.color && <p>Color: {product.color}</p>}

      {product.software || product.insurance ? (
        <p>
          Options: {product.software ? 'softaware' : null}
          {product.isurance ? 'insurance' : null}
        </p>
      ) : null}
      <p>
        Details:
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          praesentium nesciunt deserunt est amet quaerat sapiente aliquid
          libero, quisquam recusandae.
        </span>
      </p>
    </div>
  );
};

export default ProductsDetail;
