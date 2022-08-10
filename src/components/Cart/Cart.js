import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Cart.css';
import { clearCart, removeItems } from '../../features/Cart/CartSlice';

const Cart = () => {
    const { cartItems, amount, quantity } = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItems(id))
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const renderComponent = () => {
        if(cartItems.length === 0) {
            return (
                <div className='app__cart-item' >
                    <div className='app__cart-content'>
                        <span>There are no items in your cart</span>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    {cartItems.map((item, idx) => {
                        return (
                            <div className="app__cart-item" key={idx}>
                                <img src={item.image} alt={item.title} />
                                <div className="app__cart-content">
                                    <h2>{item.title}</h2>
                                    <span>Quantity: <strong>{item.quantity}</strong> </span>
                                    <span>Price: <strong>$ {item.amount}</strong> </span>
                                </div>
                                <div className="app__cart-btns">
                                    <button onClick={() => handleRemoveItem(item.id)} >Remove Item</button>
                                </div>
                            </div>
                        )
                    })}
                </>
            )
        }
    };

    return (
        <div className='app__cart'>
            {renderComponent()}
            <span>Total Items: <strong>{quantity}</strong></span>
            <span>Total Price: <strong>$ {amount}</strong></span>
            <button onClick={handleClearCart} className={quantity === 0 ? 'btn-disabled' : ''} >Clear Cart</button>
        </div>
    );
};

export default Cart;