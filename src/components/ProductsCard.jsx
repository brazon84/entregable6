import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCartProducts } from '../store/slices/cart.slice';
import getConfig from '../utils/getConfig';
import {getAllProducts2} from '../store/slices/getAllProducts.slice';

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickCard = () => navigate(`/products/${product.id}`);

  const addProductCart = (e) => {
    e.stopPropagation();

    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
   
    const objectProduct = {
      id: product.id,
      quantity: 1,
    };

    axios
      .post(URL, objectProduct, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllCartProducts());
      })
      .catch((error) => console.log(error.res.data));
  };

  const isProductInCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart?.find((productInCart) => productInCart.id === product.id);
  };

  return (
    <div className="card" onClick={clickCard}>
      <div className="imgBx">
        <img src={product.images[0].url} alt="Image 1" />
      </div>

      <div className="content">
        <div className="details">
          <h2>{product.title}</h2>
          <div className="details__price__title">
            <p>Price:</p>
          </div>
          <div className="details__price__number">
            <p>
              <b>USD {Math.trunc(product.price)}</b>
            </p>
          </div>
          {!isProductInCart() && (
            <div className="details__price__button">
              <button onClick={addProductCart}>
                <ion-icon name="cart-outline"></ion-icon> Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
