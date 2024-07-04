import { Img, ImgProps } from "react-image";
import styled, { keyframes } from "styled-components";
import { NumberProps } from "../../interfaces/interface";


const ClickeAnimation = keyframes`
 0% {
  background: radial-gradient(
    93.33% 93.33% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  }
  50% {
    background: radial-gradient(93.33% 93.33% at 50% 50%, #65b2bb 0%, #03577f 100%);
  }
 100% {
  background: radial-gradient(
    93.33% 93.33% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
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
  border-radius: 50%;
  background: linear-gradient(180deg, #6ec7d5 0%, #085c83 100%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  &:hover {
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
  &:active {
    animation: ${ClickeAnimation} 0.1s ease;
  }
`;
export const ClickerImg = styled(Img)<ImgProps>`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-height: 330px;
  width: 90%;
  padding: 0px 0px 30px 10px;
  @media (max-height: 668px) {
   max-height: 13rem
  }
`;
export const Number = styled.div<NumberProps>`
  max-width: 100%;
  max-height: 100px;
  overflow: hidden;
  position: absolute;
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
  animation: ${slideUp} 1s ease-out;
  pointer-events: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 2;
`;
