import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Header, Modal, Loader } from '../components';
import Main from './Main/Main';
import { calculateTotals } from '../features/Cart/CartSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal);
  const { isLoading } = useSelector(store => store.loader);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="app">
      <Router>
        {
          isLoading && <Loader />
        }
        {
          isOpen && <Modal />
        }
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
