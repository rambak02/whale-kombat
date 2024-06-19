import { Img, ImgProps } from "react-image";
import styled, { keyframes } from "styled-components";
import { NumberProps } from "../../interfaces/interface";

const ClickeAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
`;

export const ClickerBorder = styled.div`
  
  min-width: 200px;
  max-width: 400px;
  max-height: 400px;
  margin: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(180deg, #6ec7d5 0%, #085c83 100%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5rem;
  &:hover {
  }
  &:active {
    animation: ${ClickeAnimation} 0.1s ease;
  }
`;

export const ClickerBlock = styled(ClickerBorder)`
  background: radial-gradient(
    93.33% 93.33% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  animation: none;
  margin: 1.2rem;
  &:active {
    animation: none;
  }
`;
export const ClickerImg = styled(Img)<ImgProps>`
  max-height: 330px;
  width: 90%;
  padding: 0px 0px 30px 10px;
`;
export const Number = styled.div<NumberProps>`
  max-width: 100%;
  max-height: 100px;
  overflow: hidden;
  position: absolute;
  left: ${props => props.$left}px;
  top: ${props => props.$top}px;
  animation: ${slideUp} 1s ease-out;
  pointer-events: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 2;
`;
