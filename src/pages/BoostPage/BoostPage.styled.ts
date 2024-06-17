import { Img, ImgProps } from "react-image";
import styled from "styled-components";

export const Container = styled.div`
  gap: 10px;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 20px 20px 58px 20px;
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
`;
export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BalanceIcon = styled(Img)<ImgProps>`
  width: 59px;
  height: 59px;
`;
export const Balance = styled.div`
  font-family: "Roboto";
  font-size: 42px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
`;
export const Tutorial = styled.div`
  margin-top: 20px;
  color: #e5992b;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
`;

export const BoostContainer = styled.div`
  height: 65px;
  padding: 16px;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const BoostHeader = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: left;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Boost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const BoostContent = styled.div`
  gap: 5px;
  display: flex;
  width: 93%;
  flex-direction: column;
  align-items: stretch;
`;
export const BoostInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

export const BoostTitle = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: "white";
`;

export const CoinIcon = styled(Img)<ImgProps>`
  width: 16px;
  height: 16px;
`;
export const Level = styled.div`
  color: #d9d9d9;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;

export const BoostDescriptionBlock = styled.div`
  display: flex;
  flex-direction: row;
`;
