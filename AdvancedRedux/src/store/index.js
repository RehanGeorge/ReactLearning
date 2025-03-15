import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import productReducer from './product-slice';
import uiReducer from './ui-slice';

const store = configureStore({
    reducer: { cart: cartReducer, shop: productReducer, ui: uiReducer },
})

export default store;