import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/Shop/shop.component'
import { connect } from 'react-redux'

import HomePage from "./Pages/Homepage/homepage.component"
import Header from './Components/Header/header.component'
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'
import { setCurrentUser } from './Redux/User/user.actions'


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      createUserProfileDocument(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
