import { Img, ImgProps } from "react-image";
import styled, { keyframes } from "styled-components";

const appearanceAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 88px;
  padding: 16px 20px;
  border-radius: 10px;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  display: flex;
  align-items: center;
`;
export const GiftIcon = styled(Img)<ImgProps>`
  width: 50px;
  height: 50px;
  animation: ${appearanceAnimation} 0.3s;
`;
export const Content = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-left: 15px;
  justify-content: stretch;
`;
export const Title = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
`;
export const Description = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RewardIcon = styled(Img)<ImgProps>`
  width: 17px;
  height: 17px;
`;
export const RewardText = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;
export const RewardSpan = styled.span`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: rgba(255, 218, 109, 1);
`;
