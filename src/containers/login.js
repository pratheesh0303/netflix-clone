import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "react-form-field-validation";
// import {validator} from '../validations'
import { auth } from "../utils/Firebase/firebase";
import { Login } from "../components";
import { Banner } from "../components";
import styled from "styled-components";

const Error = styled.span `
  color: red;
`;
export default function LoginContainer() {
  const history = useHistory();
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [error, setError] = useState("")

  const userSignin = (e) => {
    e.preventDefault();
    const validate = validator([
      { fieldname: "email", value: email, rule: ["valid-email", "mandatory"] },
      {
        fieldname: "password",
        value: password,
        rule: ["mandatory"],
      },
    ]);
    if (!validate) {
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authuser) => {
        history.push("/home");
      })
      .catch((error) => {
         setError(error.message)});
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
            <Error>{error}</Error>
            <Login.TextField
              id="email"
              name="email"
              value={email}
              onChange={changeInput}
              type="text"
              placeholder="Email Address"
            ></Login.TextField>
            <Login.TextField
              name="password"
              id="password"
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
