import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGlobal } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions;

export const getAllProducts = () => (dispatch) => {
    dispatch(setIsLoadingGlobal(true))
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    return axios.get(URL)
        .then(res => dispatch(setProductsGlobal(res.products)))
        .catch(error => console.log(error))
        .finally(() => dispatch(setIsLoadingGlobal(false)))
}

export const filterNameThunk = title => {
    return dispatch => {
        dispatch(setIsLoadingGlobal(true));
        return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${title}`)
            .then(res => dispatch(setProductsGlobal(res.data.products)))
            .finally(() => dispatch(setIsLoadingGlobal(false)));
    }
}

export default productsSlice.reducer;
