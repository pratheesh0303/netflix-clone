import React, { useEffect } from 'react';
import {auth} from './utils/Firebase/firebase';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import FaqContainer from './containers/faq';
import BannerContainer from './containers/banner';
import LoginContainer from './containers/login';
import SignupContainer from './containers/signup';
import HomeContainer from './containers/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  const user= null;
useEffect (()=>{
  const Unsubscribe = auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      console.log('ddd')
    } else {
      console.log('fff')
    }
  });

  return Unsubscribe;
}, []);
  
  
  return (
    <Router>
      {!user? (
      <Switch>
        <Route path="/login">
          <LoginContainer/>
        </Route>
        <Route path="/signup">
          <SignupContainer/>
        </Route>
        <Route path="/home">
          <HomeContainer/>
        </Route>
        <Route path="/">
          <>
            <BannerContainer/>
            <JumbotronContainer/>
            <FaqContainer/>
            <FooterContainer/>
          </>     
        </Route>
        
      </Switch>) :
      (
      <p>hi</p>
      )}
    </Router>
    
  );
}
