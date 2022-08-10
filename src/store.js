import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/User/UserSlice';
import { productsApi } from './features/Products/ProductsSlice';
import cartReducer from './features/Cart/CartSlice';

// const persistedState = loadState();
const authMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        if(action.type?.startsWith('user/')) {
            const userState = {
                user: getState().user
            };
            localStorage.setItem('state', JSON.stringify(userState));
        }
        return result;
    }
};

const loadStore = () => {
    if(localStorage.getItem('state') !== null) {
        return JSON.parse(localStorage.getItem('state'));
    }
};

export const store = configureStore({
    reducer: {
        user: userReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer
    },
    preloadedState: loadStore(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware).concat(productsApi.middleware)
});