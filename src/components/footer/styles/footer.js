import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  margin: auto;
  background-color: black;
  display: flex;
  padding: 80px 60px 40px 60px;
  flex-direction: column;
  width: 60%;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #757575;
  display: block;
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Link = styled.a`
  color: #757575;
  padding: 6px 8px;
  cursor: pointer;
`;
