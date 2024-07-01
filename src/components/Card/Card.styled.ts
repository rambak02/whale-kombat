import { Img, ImgProps } from "react-image";
import styled from "styled-components";
export const Card = styled.div`
  background: linear-gradient(180deg, #7ad4df 0%, #03577f 100%);
  min-width: 165.5px;
  min-height: 200px;
  border-radius: 10px;
  border: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CardImg = styled(Img)<ImgProps>`
  width: 120px;
  height: 80px;
  border-radius: 10px;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
export const Description = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;
export const ProfitInf = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
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
  display: flex;
  flex-direction: row;
  border-top: 1px solid #469db5;
`;

export const Level = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  width: 24px;
  height: 7px;
`;
export const Cost = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  padding-left: 5px;
`;
export const CoinIconCost = styled(Img)<ImgProps>`
  width: 17px;
  height: 17px;
`;
export const LevelCost = styled.div`
  padding-left: 5px;
  border-left: 1px solid #469db5;
  display: flex;
  flex-direction: row;
`;
