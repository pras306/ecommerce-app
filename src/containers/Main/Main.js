import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './Main.css';
import { Login, Cart, Register } from '../../components';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div className='app__main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    );
};

export default Main;