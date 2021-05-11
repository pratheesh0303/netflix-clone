import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/Firebase/firebase";
import { Login } from "../components";
import { Banner } from "../components";
export default function LoginContainer() {
  const history = useHistory();
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");

  const userSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authuser) => {
        history.push("/home");
      })
      .catch((error) => console.log(error));
  };
  const RedirectToSignup = () => {
    history.push("/");
  };

  const changeInput = (e) => {
    e.target.name === "email"
      ? SetEmail(e.target.value)
      : SetPassword(e.target.value);
  };

  return (
    <Banner>
      <Banner.Topbar>
        <Banner.Logo src="images/netflix-logo.png" />
      </Banner.Topbar>
      <Banner.TextConatiner>
        <Login>
          <Login.Form>
            <Login.Title>Sign In</Login.Title>
            <Login.TextField
              name="email"
              value={email}
              onChange={changeInput}
              type="text"
              placeholder="Email Address"
            ></Login.TextField>
            <Login.TextField
              name="password"
              value={password}
              onChange={changeInput}
              type="password"
              placeholder="password"
            ></Login.TextField>
            <Login.Button type="submit" onClick={userSignin}>
              Sign In
            </Login.Button>
            <Login.SignupBlock>
              <Login.SignupTitle>New to Netflix?</Login.SignupTitle>
              <Login.SignupLink onClick={RedirectToSignup}>
                Sign up now
              </Login.SignupLink>
            </Login.SignupBlock>
          </Login.Form>
        </Login>
      </Banner.TextConatiner>
    </Banner>
  );
}
