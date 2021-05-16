import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/Firebase/firebase";
import { Signup } from "../components";
import { Banner } from "../components";
// import { validator } from "../validations";
import { validator } from "react-form-field-validation";
export default function SignupContainer(props) {
  const history = useHistory();
  const [UserEmail, UserEmailChange] = useState(
    history.location.state ? history.location.state.UserEmail : null
  );
  const [UserPassword, UserPasswordChange] = useState(null);
  const [apiError, setError] = useState("");

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
    const validate = validator([
      {
        fieldname: "email",
        value: UserEmail,
        rule: ["valid-email", "mandatory"],
      },
      {
        fieldname: "password",
        value: UserPassword,
        rule: ["min-6", "mandatory", "max-10"],
      },
    ]);
    if (!validate) {
      return;
    }
    auth
      .createUserWithEmailAndPassword(UserEmail, UserPassword)
      .then((authuser) => {
        history.push("/home");
      })
      .catch((error) => {
        if (validate) {
          setError(error.message);
        }
      });
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
            id="email"
            placeholder="Email Address"
            onChange={UserValueChange}
            value={UserEmail}
          ></Signup.Input>
          <Signup.Input
            id="password"
            name="password"
            placeholder="password"
            onChange={UserValueChange}
            value={UserPassword}
          ></Signup.Input>
          <div style={{ color: "red", fontSize: "15px" }}>{apiError}</div>
          <Signup.Button
            UserEmail
            UserPassword
            type="submit"
            onClick={Register}
          >
            Continue
          </Signup.Button>
        </Signup.SignupForm>
      </Signup.Container>
    </Signup>
  );
}
