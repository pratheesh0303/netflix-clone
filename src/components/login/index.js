import React from "react";
import {
  LoginContainer,
  Form,
  Title,
  TextField,
  Button,
  SignupTitle,
  SignupLink,
  SignupBlock,
} from "./styles/login";

export default function Login({ children, ...restProps }) {
  return <LoginContainer {...restProps}>{children}</LoginContainer>;
}

Login.Title = function LoginTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Login.Form = function LoginForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Login.TextField = function LoginTextField({ children, ...restProps }) {
  return <TextField {...restProps}>{children}</TextField>;
};

Login.Button = function LoginButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Login.SignupLink = function LoginSignupLink({ children, ...restProps }) {
  return <SignupLink {...restProps}>{children}</SignupLink>;
};

Login.SignupBlock = function LoginSignupBlock({ children, ...restProps }) {
  return <SignupBlock {...restProps}>{children}</SignupBlock>;
};

Login.SignupTitle = function LoginSignupTitle({ children, ...restProps }) {
  return <SignupTitle {...restProps}>{children}</SignupTitle>;
};
