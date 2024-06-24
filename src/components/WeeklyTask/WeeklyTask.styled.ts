import styled, { keyframes } from "styled-components";
import { Img, ImgProps } from "react-image";

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
  width: 93%;
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
export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const TaskInfo = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
  margin-top: 5px;
`;
export const RewardBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TaskReward = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;

export const TaskImg = styled(Img)<ImgProps>`
  width: 52px;
  height: 52px;
  animation: ${appearanceAnimation} 0.3s;
`;

export const DoneImg = styled(Img)<ImgProps>`
 width: 33px;
 height: 32px;
`