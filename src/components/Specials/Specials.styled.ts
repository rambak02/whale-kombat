import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  // padding-top: 22px;
  box-sizing: border-box;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -2px;
`;
export const Specials = styled.div`
  width: 100%;
`;

export const SpecialsNav = styled.div`
margin-top: 6px;
  display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
export const Nav = styled.div`
  height: 50px;
  box-sizing: border-box;
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
