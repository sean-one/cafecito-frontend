import React from 'react';
import { Route } from 'react-router-dom';
import Moment from 'moment';

import './App.css';

import Header from './components/header/header';
import Landing from './components/landing/landing';
import Menu from './components/menu/dailymenu';
import Products from './components/product/products';
import ProductEdit from './components/product/productEdit'

const App = () => {
  const m = Moment();
  const today = m.format('dddd').toLowerCase();
  const tomorrow = m.add(1, 'd').format('dddd').toLowerCase();

  return (
    <div className="App">
      <Header />
      <div className="siteContainer">
        <Route exact path='/' component={Landing} />
        <Route path='/menu'>
          <Menu today={today} tomorrow={tomorrow} />
        </Route>
        <Route exact path='/products' component={Products} />
        <Route path='/products/:id' component={ProductEdit} />
      </div>
    </div>
  );
}

export default App;
