import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: ''
};

const productsFilterSlice = createSlice({
    name: 'products/filter',
    initialState,
    reducers: {
        productsSearch: (state, action) => {
            state.term = action.payload;
        }
    }
});

export const { productsSearch } = productsFilterSlice.actions;

export default productsFilterSlice.reducer;