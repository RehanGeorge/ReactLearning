import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [{id: 1, title: 'Test', detail: 'This is a first product - Amazing!', price: 6 },
        {id: 2, title: 'Test 2', detail: 'This is a second product - Fabulous!', price: 9 }],
}

const productsSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {}
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;