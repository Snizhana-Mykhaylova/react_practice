import axios from 'axios';

// axios.defaults.baseURL('http://localhost:4040');

export const getProducts = () =>
  axios.get('http://localhost:4040/products').then(({ data }) => data);

export const getProductById = (id) =>
  axios.get(`http://localhost:4040/products/${id}`).then(({ data }) => data);

export const addProduct = (payload) =>
  axios
    .post('http://localhost:4040/products', payload)
    .then(({ data }) => data);

export const deleteProduct = (id) =>
  axios.delete(`http://localhost:4040/products/${id}`);

export const getCart = () =>
  axios.get('http://localhost:4040/cart').then(({ data }) => data);
