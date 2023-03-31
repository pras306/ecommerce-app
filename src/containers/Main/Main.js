import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './Main.css';
import { Login, Cart, Register, ProductCard, Checkout } from '../../components';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div className='app__main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/products/:id' element={<ProductCard />} />
                <Route path='/checkout/:success' element={<Checkout />} />
            </Routes>
        </div>
    );
};

export default Main;