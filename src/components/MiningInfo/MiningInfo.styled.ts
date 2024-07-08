import { Img, ImgProps } from "react-image";
import styled, { keyframes } from "styled-components";

const right = keyframes`
0% { transform: translateX(15px);
     opacity: 0; }
50% { transform: translateX(10px); 
 opacity: 0.5;
}
100% { transform: translateX(0); 
opacity: 1;
}
`;

export const MiningInfoBlock = styled.div`
  gap: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  animation: ${right} 0.3s;
`;
export const MiningInfoContainer = styled.div`
  background: rgba(94, 193, 202, 1);
  min-width: 30%;
  min-height: 48px;
  border-radius: 10px;
  @media (min-height: 931px) {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const ProfitOneClickTitle = styled.div`
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: black;
  @media (min-height: 931px) {
    font-size: 14px;
  }
`;
export const ProfitOneClickContent = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
export const ProfitOneClickCount = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: black;
`;

export const CoinImg = styled(Img)<ImgProps>`
width: 25px;
height: 25px;
`

export const CoinsUpTitle = styled(ProfitOneClickTitle)``;
export const CoinsUpCount = styled(ProfitOneClickCount)``;
export const ProfitPerHourTitle = styled(ProfitOneClickTitle)``;
export const ProfitPerHourContent = styled(ProfitOneClickContent)``;
export const ProfitPerHourCount = styled(ProfitOneClickCount)``;
