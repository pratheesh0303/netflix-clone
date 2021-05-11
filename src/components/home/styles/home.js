import styled from "styled-components/macro";

export const Container = styled.div``;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  padding: 130px 40px;
  background: linear-gradient(
      to bottom,
      rgb(2 2 2) 0%,
      rgb(72 23 23 / 7%) 10%,
      rgb(64 64 64 / 62%) 90%,
      rgba(64, 64, 64, 1) 100%
    ),
    url(${(props) =>
      `https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`});
  object-fit: contain;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const MovieName = styled.h1`
  font-size: 40px;
  color: #ffffff;
`;

export const Description = styled.p`
  width: 50%;
  color: #ffffff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #c3c3c3;
  font-size: 25px;
`;

export const PlayButton = styled.button`
  padding: 10px;
  color: #ffffff;
  width: 100px;
  background: #404c509e;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export const RowContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
`;
export const Row = styled.h1`
  color: white;
  font-size: 27px;
`;

export const Poster = styled.img`
  max-height: 250px;
  object-fit: contain;
  margin-right: 10px;
  width: 100%;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;

export const RowMovieName = styled.h2``;
