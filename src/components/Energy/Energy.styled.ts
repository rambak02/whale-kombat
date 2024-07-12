import { Img } from "react-image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
`;
export const Energy = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
`;
export const Amount = styled.div`
// font-family: "Roboto";
color: white;
font-size: 16px;
font-weight: 600;
line-height: 21px;
text-align: left;

`;
export const BoostImg = styled(Img)`
  width: 30px;
  height: 30px;
`;
