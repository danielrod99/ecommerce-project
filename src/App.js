import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { Switch, Route } from 'react-router-dom';
import {auth,createUserProfileDoc} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsusbcribedFormAuth=null;
  componentDidMount(){
    this.unsusbcribedFormAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDoc(userAuth);
        this.setState({
          currentUser:{
            id: userRef.uid,
            email: userRef.email,
            photoURL: userRef.photoURL,
            ...userRef
          }
        });
      }else{
        this.setState({currentUser:userAuth});
      }
    });
  }
 componentWillUnmount(){
   this.unsusbcribedFormAuth();
 }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signIn' component={SignInUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
