import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/User/UserSlice';

// const persistedState = loadState();
const authMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('state', JSON.stringify(getState()));
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
        user: userReducer
    },
    preloadedState: loadStore(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});