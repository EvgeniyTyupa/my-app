import React from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import './App.css';
import BasketContainer from './Components/Basket/BasketContainer';
import MainContainer from './Components/Main/MainContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className="main">
          <NavbarContainer/>
          <div className="contentWrapper">
            <Route exact path="/">
                <Redirect to="/shop" />
            </Route>
            <Route path="/shop" render={()=><MainContainer/>} key={1}/>
            <Route path="/basket" render={()=><BasketContainer/>} key={2}/>
          </div>
          
        </div>
    </BrowserRouter>
  );
}

export default App;
