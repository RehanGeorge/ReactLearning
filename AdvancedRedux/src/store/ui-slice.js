import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notification: null,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        hideNotification(state) {
            state.notification = null;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;