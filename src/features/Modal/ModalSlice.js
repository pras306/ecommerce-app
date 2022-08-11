import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    content: '',
    componentName: '',
    isOpen: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.componentName = action.payload.componentName;
            state.isOpen = action.payload.isOpen;
        },
        closeModal: (state) => {
            state.title = '';
            state.content = '';
            state.componentName = '';
            state.isOpen = false;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;