import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Header } from '../components';
import Main from './Main/Main';

const App = () => {
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
