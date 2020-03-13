import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/Shop/shop.component'

import HomePage from "./Pages/Homepage/homepage.component"
import Header from './Components/Header/header.component'
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'


class App extends React.Component
{

  constructor()
  {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      createUserProfileDocument(userAuth);
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>
          {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })

           
          });
      }
     else {
      this.setState({currentUser: userAuth})
     }
    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
