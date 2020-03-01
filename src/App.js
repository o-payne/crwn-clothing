import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/Shop/shop.component'

import HomePage from "./Pages/Homepage/homepage.component"


function App()
{
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
