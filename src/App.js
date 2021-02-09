import React from 'react';
// import Moment from 'moment';

import './App.css';

// import Menu from './components/menu/dailymenu';
import Products from './components/product/products';

const App = () => {
  // const m = Moment();
  // const today = m.format('dddd').toLowerCase();
  // const tomorrow = m.add(1, 'd').format('dddd').toLowerCase();

  return (
    <div className="App">
      <header className="App-header">
        Cafecito
      </header>
      {/* <Menu today={today} tomorrow={tomorrow} /> */}
      <Products />
    </div>
  );
}

export default App;
