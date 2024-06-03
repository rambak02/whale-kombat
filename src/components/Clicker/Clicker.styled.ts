import styled, { keyframes } from "styled-components";

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

export const ClickerBlock = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  min-height: 200px;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 1);
  border-color: white;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    #6d83bc 61.5%,
    #123692 100%
  );
  margin: 3.5rem;
  &:hover {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #ffffff 30%,
      #6d83bc 61.5%,
      #123692 100%
    );
  }
  &:active {
    animation: ${ClickeAnimation} 0.3s ease
  }
`;
export const ClickerImg = styled.img`
  width: 80%;
  height: 90%;
  border-radius: 50%;
  padding: 0px 0px 30px 0px;
`;
