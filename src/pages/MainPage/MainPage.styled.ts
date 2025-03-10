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
  justify-content: flex-end;
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
  margin: 3px;
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

export const Content = styled.div`
  // background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  // border-top: 3px solid rgba(229, 153, 43, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 36px 36px 0px 0px;
  min-height: 90vh;
  justify-content: space-between;
  padding: 23px 16px 0 16px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: space-between;
`;

export const BalanceBlock = styled.div`
  // width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  animation: ${appearanceAnimation} 0.3s;
  margin-top: 10px;
`;
export const Balance = styled.div`
  font-family: "Montserrat";
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  line-height: 21px;
  color: black;
  margin-top: 2px;
`;
export const BalanceIcon = styled(Img)<ImgProps>`
  width: 50px;
  height: 50px;
  margin-left: -12px;
  margin-top: 6px
`;

export const ProgressBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin-top: 10px;
`;
export const LevelBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: black;
  // font-family: "Roboto";
  font-weight: 400;
`;
export const LevelTitle = styled.div`
`;
export const Level = styled.div`
  display: flex;
  gap: 5px;
  color: white;
  font-family: "Montserrat";
`;
export const LevelNumber = styled.div`
  color: rgba(94, 193, 202, 1);
`;

export const ProgressBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  margin-top: -4px;
`;

export const ProgressBarBg = styled.div`
  width: 100%;
  height: 10px;
  background: rgba(217, 217, 217, 1);
  border-radius: 10px;
`

export const ProgressBar = styled.div<{ width: number}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props?.width ? `${props.width}%` : 0};
  height: 10px;
  background: linear-gradient(90deg, #fff176 0%, #f2891a 100%);
  border-radius: 10px;
  animation: ${left} 0.3s;
`;
