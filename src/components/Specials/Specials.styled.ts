import styled from "styled-components";

export const Container = styled.div`
  max-width: 672px;
  margin: 0 auto;
  padding-top: 22px;
  box-sizing: border-box;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Specials = styled.div``;
export const SpecialsNav = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Nav = styled.div`
  display: flex;
  height: 50px;
  box-sizing: border-box;
  width: 70px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  padding-bottom: 2px;
  align-items: center;
  justify-content: center;
  &:hover {
    color: rgba(94, 193, 202, 1);
    border-bottom: 2px solid rgba(94, 193, 202, 1);
  }
`;
