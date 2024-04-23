import React, { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';


export function useProducts () {
    // локальный стэит
    const [products, setProducts] = useState<IProduct[]>([]);
  
    // индикация загрузки
    const [loading,setLoading] = useState(false);
  
    // ошибка загрузки
  
    const [error, setError]= useState('');
  

//
function addProduct(product:IProduct) {
  setProducts(prev =>[...prev, product])
}


    // запрос
  
    async function fetchProducts () {
      try {
      setError('');
      setLoading(true);
     const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
    //  console.log(response);
    setProducts(response.data);
    setLoading(false);
    } catch (e:unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }}
  
  
  //загрузка
  useEffect( ()=>{
   fetchProducts();
  }, []);
  
  return {products, error, loading, addProduct}
  }