import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from "./pages/signin-and-signup-page/SignInAndSignUpPage";

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
      
    </Switch>  
    </div>
  );
}

export default App;
