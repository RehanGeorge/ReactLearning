import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import productReducer from './products';

const store = configureStore({
    reducer: { cart: cartReducer, shop: productReducer },
})

export default store;