import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        openLoader: (state) => {
            state.isLoading = true;
        },
        closeLoader: (state) => {
            state.isLoading = false;
        }
    }
});

export const { openLoader, closeLoader } = loaderSlice.actions;

export default loaderSlice.reducer;