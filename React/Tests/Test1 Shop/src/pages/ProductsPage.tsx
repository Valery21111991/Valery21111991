import React from "react";
// import React, { useEffect, useState } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import {Product} from '../components/Product';
// // import { products } from './data/products';
// import axios, { AxiosError } from 'axios';
// import { IProduct } from './models';
import { useProducts } from '../hooks/products';
import {useContext} from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';
export function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts();
    // const [modal, setModal] = useState(true);
    const {modal,open,close} = useContext(ModalContext);
  
  // сlose:closeModal - переименование внутри {modal,open,close}
  
    const createHandler = (product:IProduct) =>{
      // setModal(false); вместо него везде close() i open
      close();
  
      addProduct(product);
    }
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {/* загрузка страницы */}
        { loading && <Loader/> }
        {/* <p className='text-center'>Loading...</p> */}
        {/* ошибка */}
        { error && <ErrorMessage error='error'/> }
        {/* <p className='text-center text-red-600'>{error}</p> */}
        {/* // циклы */}
        { products.map(product => <Product product={product} key={product.id}/>) }
  
        {/* <Product product={products[0]}/>
        <Product product={products[1]}/> */}
  
        {modal && <Modal title='Create new product' onClose={close}>
        {/*<CreateProduct onCreate={()=>setModal(false)}/>*/}
          <CreateProduct onCreate={createHandler}/>
        </Modal>}
  
        <button 
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={open}
        >+</button>
      </div>
    )
}