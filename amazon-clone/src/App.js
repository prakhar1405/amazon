// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    //BEM
    <Router>
    <div className="App">
      {/* Header */}
      <Header/>
      <Switch>
      <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/">
          
          {/* Home */}
          <Home/>
        </Route>
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
