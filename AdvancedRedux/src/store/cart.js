import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [{ id: 1, title: 'Test Item', quantity: 3, price: 6 },
    { id: 2, title: 'Test Item 2', quantity: 5, price: 9 }],
    show: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;