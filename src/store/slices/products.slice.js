import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGlobal  } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'getAllProducts',
    initialState: [],
    reducers: {
        getAllProducts: (state, action) => action.payload
    }
    
})

export const { getAllProducts  } = productsSlice.actions;


export const filterNameThunk = (title) =>async (dispatch)=> {
    dispatch(setIsLoadingGlobal(true));
    return await axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${title}`)
            .then(res=> {dispatch(getAllProducts(res.data));
                          console.log('paso por api filtro: '+title); })
        .catch(error => console.log(error.data))
        .finally(() => dispatch(setIsLoadingGlobal(false)));
}       
             
export default productsSlice.reducer;