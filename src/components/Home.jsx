import React from 'react'
import logo from '../img/img.png'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch} from "react-redux";
import ProductsCard from './ProductsCard';
import {getAllProducts2} from '../store/slices/getAllProducts.slice';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts2());  }, []);

  
   //me traigo todos los productos al estado
   const products = useSelector((state) => state.getAllProducts);
 
  return (
    <div className='principal__image'>
    {/* <img src={logo} alt="" /> */}
  <div className="products">
      {/* <div className="inputs__search">
        <InputSearch />
        <InputSelect />
      </div> */}
      {products?.map((products) => (
        <ProductsCard key={products.id} product={products} />
      ))}
    </div>
</div>
  )
}

export default Home