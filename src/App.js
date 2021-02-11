import React from 'react';
import { Route } from 'react-router-dom';
import Moment from 'moment';

import './App.css';

import Header from './components/header/header';
import Menu from './components/menu/dailymenu';
import Products from './components/product/products';

const App = () => {
  const m = Moment();
  const today = m.format('dddd').toLowerCase();
  const tomorrow = m.add(1, 'd').format('dddd').toLowerCase();

  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <div className="branding">
          <h1>Cafecito</h1>
        </div>
        <div className="navigation">
          <ul className="navLinks">
            <Link to='/menu'><li>MENU</li></Link>
            <Link to='/products'><li>PRODUCTS</li></Link>
          </ul>
        </div>
      </header> */}
      <Route path='/menu'>
        <Menu today={today} tomorrow={tomorrow} />
      </Route>
      <Route path='/products' component={Products} />
    </div>
  );
}

export default App;
