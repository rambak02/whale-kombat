import { Img } from "react-image";
import styled from "styled-components";

export const Container = styled.div`
  width: 91%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
`;
export const Energy = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
`;
export const Amount = styled.div`
font-family: "Roboto";
font-size: 16px;
font-weight: 600;
line-height: 21px;
text-align: left;

`;
export const BoostImg = styled(Img)`
  width: 40px;
  height: 40px;
`;
