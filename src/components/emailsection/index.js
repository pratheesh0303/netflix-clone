import React from "react";
import {
  EmailSectionContainer,
  Title,
  Input,
  Button,
  InputContainer,
} from "./styles/emailsection";

export default function EmailSection({ children, ...restProps }) {
  return (
    <EmailSectionContainer {...restProps}>{children}</EmailSectionContainer>
  );
}

EmailSection.Title = function EmailSectionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

EmailSection.InputContainer = function EmailSectionInputContainer({
  children,
  ...restProps
}) {
  return <InputContainer {...restProps}>{children}</InputContainer>;
};

EmailSection.Input = function EmailSectionInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

EmailSection.Button = function EmailSectionButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
