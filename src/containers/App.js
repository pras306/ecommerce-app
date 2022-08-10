import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Header } from '../components';
import Main from './Main/Main';
import { calculateTotals } from '../features/Cart/CartSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(store => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
