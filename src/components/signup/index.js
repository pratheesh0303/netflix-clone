import React from "react";
import {
  SignupPage,
  Container,
  Paragraph,
  Title,
  Description,
  SignupForm,
  Input,
  Button,
} from "./styles/signup";

export default function Signup({ children, ...restProps }) {
  return <SignupPage {...restProps}>{children}</SignupPage>;
}
Signup.Container = function SignupContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Signup.Paragraph = function SignupParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};

Signup.Title = function SignupTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Signup.Description = function SignupDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Signup.SignupForm = function SignupPageForm({ children, ...restProps }) {
  return <SignupForm {...restProps}>{children}</SignupForm>;
};

Signup.Input = function SignupInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Signup.Button = function SignupButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
