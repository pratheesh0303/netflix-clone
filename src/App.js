import React, { useEffect } from "react";
import { auth } from "./utils/Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import FooterContainer from "./containers/footer";
import JumbotronContainer from "./containers/jumbotron";
import FaqContainer from "./containers/faq";
import BannerContainer from "./containers/banner";
import LoginContainer from "./containers/login";
import SignupContainer from "./containers/signup";
import HomeContainer from "./containers/home";
import RazorPay from "./utils/payments";
import { login, logout, selectUser } from "./utils/reducer/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const Unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.id,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });

    return Unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      {console.log(user)}

      {!user ? (
        <Switch>
          <Route path="/payments">
            <RazorPay />
          </Route>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/signup">
            <SignupContainer />
          </Route>
          <Route path="/">
            <>
              <BannerContainer />
              <JumbotronContainer />
              <FaqContainer />
              <FooterContainer />
            </>
          </Route>
        </Switch>
      ) : (
        <Route path="/home">
          <HomeContainer />
        </Route>
      )}
    </Router>
  );
}
