import { Img, ImgProps } from "react-image";
import styled from "styled-components";

export const BoostContainer = styled.div`
  max-height: 110px;
  background: #5ec1ca;
  border-radius: 8px;
  padding: 10px;
  width: 43%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const Logo = styled(Img)<ImgProps>`
  width: 48px;
  height: 48px;
`;

export const ProfitInf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfitIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
`;

export const Profit = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProfitCount = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;

export const CoinIcon = styled(Img)<ImgProps>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const ProfitText = styled.div`
  color: "white";
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;

export const LevelContainer = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #469db5;
  justify-content: flex-start;
`;

export const Level = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  width: 24px;
  height: 7px;
`;
export const Cost = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  
`;
export const CoinIconCost = styled(Img)<ImgProps>`
  width: 17px;
  height: 17px;
`;
export const LevelCost = styled.div`
  gap: 3px;
  padding-left: 5px;
  border-left: 1px solid #469db5;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
