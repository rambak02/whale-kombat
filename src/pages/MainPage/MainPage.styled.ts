import styled, { keyframes } from "styled-components";
import {Img, ImgProps } from "react-image";

const left = keyframes`
0% { transform: translateX(-15px);
     opacity: 0; }
50% { transform: translateX(-10px); 
 opacity: 0.5;
}
100% { transform: translateX(0); 
opacity: 1;
}
`;

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;
export const UserBlock = styled.div`
  width: 82px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserImg = styled(Img)<ImgProps>`
width: 45px;
height: 45px;
`;
export const Username = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;
export const BybitBlock = styled.div`
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  width: 101.11px;
  height: 36px;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const BybitImg = styled(Img)<ImgProps>``;

export const BybitText = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: black;
`;
export const Content = styled.div`
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  border-top: 3px solid rgba(229, 153, 43, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 36px 36px 0px 0px;
  min-height: 90vh;
  justify-content: space-around;
`;

export const BalanceBlock = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  animation: ${appearanceAnimation} 0.3s;
`;
export const Balance = styled.div`
  font-family: "Roboto";
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  line-height: 21px;
  color: black;
`;
export const BalanceIcon = styled(Img)<ImgProps>`
  width: 80px;
  height: 80px;
`;

export const ProgressBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`;
export const LevelBlock = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  color: black;
  font-family: "Roboto";
  font-weight: 500;
`;
export const LevelTitle = styled.div``;
export const Level = styled.div`
  display: flex;
  gap: 5px;
`;
export const LevelNumber = styled.div`
  color: rgba(94, 193, 202, 1);
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 20px;
  background: linear-gradient(90deg, #fff176 0%, #f2891a 100%);
  border-radius: 10px;
  animation: ${left} 0.3s;
`;
