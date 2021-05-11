import React from "react";
import {
  BannerContainer,
  Topbar,
  Logo,
  LanguageDropdown,
  SigninBtn,
  TextConatiner,
  Title,
  SubTitle,
} from "./styles/banner";
export default function Banner({ children, ...restProps }) {
  return <BannerContainer {...restProps}>{children}</BannerContainer>;
}

Banner.Topbar = function BannerTopbar({ children, ...restProps }) {
  return <Topbar {...restProps}>{children}</Topbar>;
};

Banner.Logo = function BannerLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Banner.LanguageDropdown = function BannerLanguageDropdown({
  children,
  ...restProps
}) {
  return <LanguageDropdown {...restProps}>{children}</LanguageDropdown>;
};

Banner.SigninBtn = function BannerSigninBtn({ children, ...restProps }) {
  return <SigninBtn {...restProps}>{children}</SigninBtn>;
};

Banner.TextConatiner = function BannerTextConatiner({
  children,
  ...restProps
}) {
  return <TextConatiner {...restProps}>{children}</TextConatiner>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Banner.SubTitle = function BannerSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
