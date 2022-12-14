import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './Main.css';
import { Login, Cart, Register, ProductCard } from '../../components';
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
            </Routes>
        </div>
    );
};

export default Main;