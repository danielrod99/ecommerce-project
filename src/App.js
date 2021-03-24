import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect'

class App extends React.Component {

  unsusbcribedFormAuth = null;
  componentDidMount() {
    this.unsusbcribedFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        this.props.setCurrentUser({
          currentUser: {
            id: userRef.uid,
            email: userRef.email,
            photoURL: userRef.photoURL,
            ...userRef
          }
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsusbcribedFormAuth();
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signIn' render={() => {
            <SignInUp></SignInUp>
            if (this.props.currentUser) {
              return <Redirect to='/'></Redirect>
            } else {
              return <SignInUp></SignInUp>
            }
          }
          }></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
