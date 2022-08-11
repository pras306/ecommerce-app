import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Modal.css';
import { closeModal } from '../../features/Modal/ModalSlice';
import { signOut } from '../../features/User/UserSlice';
import { clearCart } from '../../features/Cart/CartSlice';

const Modal = () => {
    const dispatch = useDispatch();
    const { title, content, componentName } = useSelector(store => store.modal);

    const handleModalConfirm = () => {
        switch(componentName) {
            case 'Header':
                dispatch(signOut());
                dispatch(closeModal());
                break;
            case 'Cart':
                dispatch(clearCart());
                dispatch(closeModal());
                break;
            default:
                break;
        }
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <>
            <div className='app__background'></div>
            <div className="app__modal">
                <div className="app__modal-box">
                    <div className="app__modal-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="app__modal-content">
                        <span>{content}</span>
                    </div>
                    <div className="app__modal-btns">
                        <button onClick={handleModalConfirm}>Confirm</button>
                        <button onClick={handleCloseModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;