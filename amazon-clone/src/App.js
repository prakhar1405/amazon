// import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('The3 user is -- ', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
    <div className="App">
      {/* Header */}
      
      <Switch>
      <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route path="/">
        <Header/>
          {/* Home */}
          <Home/>
        </Route>
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
