import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';

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
        addItemToCart(state, action) {
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
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity -= 1;
            }
        }
    },
});

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('http://localhost:3001/api/v1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "cart" : cart }),
                });
        
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }))
        };
    }
}

export function loadCartDetails(cart) {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Loading...',
                message: 'Loading cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('http://localhost:3001/');

            if (!response.ok) {
                throw new Error('Loading cart data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Loaded cart data successfully!',
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Loading cart data failed!',
            }))
        };
    }
}

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;