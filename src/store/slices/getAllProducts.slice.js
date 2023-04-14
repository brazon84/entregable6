import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGlobal  } from './isLoading.slice';


export const getAllproductsSlice = createSlice({
    name: 'getAllProducts',
    initialState:[],
    reducers: {
        getAllProducts: (state, action) => action.payload
       
    }    
})



export const getAllProducts2 = () =>async (dispatch)=> {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/products/'
    dispatch(setIsLoadingGlobal(true));
 return  await axios.get(URL)
        .then(res =>{ dispatch(getAllProducts(res.data));
                       console.log('res.data');})
        .catch(error => console.log(error.data))
        .finally(() => dispatch(setIsLoadingGlobal(false)));
}

export const { getAllProducts  } = getAllproductsSlice.actions;
export default getAllproductsSlice.reducer;
