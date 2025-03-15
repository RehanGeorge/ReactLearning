import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import productReducer from './product-slice';

const store = configureStore({
    reducer: { cart: cartReducer, shop: productReducer },
})

export default store;