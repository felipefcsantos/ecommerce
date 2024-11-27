import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/', 
  headers: {
    'Content-Type': 'application/json',
  }
});


export const buscarProdutos = async () => {
    const response = await api.get('/products');
    return response.data;
  };