import React from "react";
import { FooterContainer, Title, Grid, Link } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <FooterContainer {...restProps}>{children}</FooterContainer>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Grid = function FooterGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
