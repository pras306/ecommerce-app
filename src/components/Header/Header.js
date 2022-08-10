import React from 'react';
import { AiFillShopping, AiOutlineLogin, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.css';
import { signOut } from '../../features/User/UserSlice';

const Header = () => {
    const { username, email, userId } = useSelector(store => store.user);
    const { quantity } = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(signOut());
        alert('You have successfully signed out.');
    }

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