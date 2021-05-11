import React from "react";
import {
  Container,
  Banner,
  PlayButton,
  MovieName,
  Description,
  Row,
  RowContainer,
  Poster,
  RowMovieName,
} from "./styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Banner = function HomeBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
};

Home.MovieName = function HomeMovieName({ children, ...restProps }) {
  return <MovieName {...restProps}>{children}</MovieName>;
};

Home.PlayButton = function HomePlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Home.Description = function HomeDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Home.Row = function HomeRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Home.RowContainer = function HomeRowContainer({ children, ...restProps }) {
  return <RowContainer {...restProps}>{children}</RowContainer>;
};

Home.Poster = function HomeRowPoster({ children, ...restProps }) {
  return <Poster {...restProps}>{children}</Poster>;
};

Home.RowMovieName = function HomeRowMovieName({ children, ...restProps }) {
  return <RowMovieName {...restProps}>{children}</RowMovieName>;
};
