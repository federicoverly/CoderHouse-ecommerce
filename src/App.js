import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag, faUser, faBars, faPlus, faMinus, faMinusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Components
import NavBar from './containers/NavBar/NavBar';
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Designs from './containers/Designs/Designs';
import AboutMe from './containers/AboutMe/AboutMe';
import Cart from './containers/Cart/Cart';
import { CartProvider } from './context/CartContext';
import LoginView from './containers/LoginView/LoginView';

library.add(fab, faShoppingBag, faUser, faBars, faPlus, faMinus, faMinusCircle, faTimes)

function App() {

  return (
    <CartProvider cartAmount={0}>
    <BrowserRouter> 
      <NavBar />
      <Switch>
        // Home 
        <Route exact path="/">
          <Home />
        </Route>
        // Home categories
        <Route exact path="/categories/:categoryID">
          <Home />
        </Route>
        //Item Details
        <Route exact path="/item/:id">
          <ItemDetail />
        </Route>
        // Designs
        <Route exact path="/designs">
          <Designs />
        </Route>
        // About Me
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        // Cart
        <Route exact path="/cart">
          <Cart />
        </Route>
        // Login
        <Route exact path="/login">
          <LoginView />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
