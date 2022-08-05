import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    userId: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.username = action.payload.username;
            state.userId = action.payload.userId;
            state.email = action.payload.email;
        }, 
        signOut: (state) => {
            state.username = '';
            state.userId = '';
            state.email = '';
        }
    }
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;