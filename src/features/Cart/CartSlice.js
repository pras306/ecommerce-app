import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    quantity: 0,
    amount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        addItems: (state, action) => {
            let checkItem = false;
            state.cartItems = state.cartItems.map(item => {
                if(item.id === action.payload.id) {
                    checkItem = true;
                    item.quantity += action.payload.quantity;
                    item.amount += action.payload.amount;
                }
                return item;
            });

            if(!checkItem) state.cartItems.push(action.payload);
        },
        removeItems: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        calculateTotals: (state) => {
            let items = state.cartItems.reduce((acc, val) => {
                return acc + val.quantity;
            }, 0);

            let total = state.cartItems.reduce((acc, val) => {
                return acc + (val.amount * val.quantity);
            }, 0);

            state.quantity = items;
            state.amount = total.toFixed(2);
        }
    }
});

export const { clearCart, addItems, removeItems, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;