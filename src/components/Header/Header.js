import React from 'react';
import { AiFillShopping, AiOutlineLogin, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.css';
import { openModal } from '../../features/Modal/ModalSlice';

const Header = () => {
    const { username, email, userId } = useSelector(store => store.user);
    const { quantity } = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        let modal = {
            title: 'Confirm User logout',
            content: 'Are you sure you want to sign out?',
            componentName: 'Header',
            isOpen: true
        };
        dispatch(openModal(modal));
    };

    const renderIsLoggedIn = () => {
        if(username || email || userId) {
            let welcomeAddress = username?.length > 0 ? username : email;
            return (
                <div className="app__header-logged" onClick={handleLogOut}>
                    <AiOutlineLogout />
                    <span>Hello,</span>
                    <span>{welcomeAddress}</span>
                </div>
            );
        } else {
            return (
                <Link to='/login' className="app__header-option">
                    <AiOutlineLogin />
                    <span>Login</span>
                </Link>
            );
        }
    };

    return (
        <div className='app__header'>
            <Link to='/' className="app__header-brand">
                <AiFillShopping />
            </Link>
            <div className="app__header-search">
                <input type={'text'} placeholder='Search for Products' />
            </div>
            {renderIsLoggedIn()}
            <Link to='/cart' className="app__header-option">
                <AiOutlineShoppingCart />
                <span>Cart</span>
            </Link>
            <div className="app__header-cart">{quantity}</div>
        </div>
    );
};

export default Header;