import styled from "styled-components/macro";

export const FaqContainer = styled.div`
  margin: auto;
  background-color: black;
  display: flex;
  padding: 80px 60px 40px 60px;
  flex-direction: column;
  width: 60%;
`;
export const Title = styled.h1`
  color: white;
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 23px;
  }
`;
