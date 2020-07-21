import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/SignInAndSignUpPage";
import {checckUserSession} from "./redux/user/userActions";
import { selectCurrentUser } from './redux/user/userSelector';
import CheckoutPage from './pages/checkout/CheckoutPage';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {checckUserSession} = this.props;
    checckUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />      
    </Switch>  
    </div>
  );
}
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  checckUserSession: () => dispatch(checckUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
