import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-bottom: 80px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
`;