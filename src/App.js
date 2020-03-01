import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/Shop/shop.component'

import HomePage from "./Pages/Homepage/homepage.component"
import Header from './Components/Header/header.component'

function App()
{
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
