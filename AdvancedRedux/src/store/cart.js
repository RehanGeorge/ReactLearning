import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    show: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.show = !state.show;
        },
        addItemToCart(state,action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1
                })
            } else {
                existingItem.quantity++;
            }
        }
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;