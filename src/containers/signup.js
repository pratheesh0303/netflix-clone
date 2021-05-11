import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/Firebase/firebase";
import { Signup } from "../components";
import { Banner } from "../components";

export default function SignupContainer(props) {
  const history = useHistory();
  const [UserEmail, UserEmailChange] = useState();
  const [UserPassword, UserPasswordChange] = useState();

  const UserSignin = () => {
    history.push("/login");
  };
  const UserValueChange = (e) => {
    history.replace();
    e.target.name === "email"
      ? UserEmailChange(e.target.value)
      : UserPasswordChange(e.target.value);
  };

  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(UserEmail, UserPassword)
      .then((authuser) => {})
      .catch((error) => alert(error.message));
  };
  return (
    <Signup>
      <Banner.Topbar style={{ height: "80px" }}>
        <Banner.Logo src="images/netflix-logo.png"></Banner.Logo>
        <Banner.SigninBtn onClick={UserSignin}>Sign In</Banner.SigninBtn>
      </Banner.Topbar>
      <Signup.Container>
        <Signup.Paragraph>
          STEP <b>1</b> OF <b>3</b>
        </Signup.Paragraph>
        <Signup.Title>Create a password to start your membership.</Signup.Title>
        <Signup.Description>
          Just a few more steps and you're done! We hate paperwork, too.
        </Signup.Description>
        <Signup.SignupForm>
          <Signup.Input
            name="email"
            placeholder="Email Address"
            onChange={UserValueChange}
            value={
              history.location.state && history.location.state.UserEmail
                ? history.location.state.UserEmail
                : UserEmail
            }
          ></Signup.Input>
          <Signup.Input
            name="password"
            placeholder="password"
            onChange={UserValueChange}
            value={UserPassword}
          ></Signup.Input>
          <Signup.Button type="submit" onClick={Register}>
            Continue
          </Signup.Button>
        </Signup.SignupForm>
      </Signup.Container>
    </Signup>
  );
}
