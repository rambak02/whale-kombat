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

export const ClickerBorder = styled.div`
  min-width: 200px;
  min-height: 200px;
  max-width: 400px;
  max-height: 400px;
  margin: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(180deg, #6ec7d5 0%, #085c83 100%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    animation: ${ClickeAnimation} 0.3s ease;
  }
`;

export const ClickerBlock = styled(ClickerBorder)`
  background: radial-gradient(
    93.33% 93.33% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  background: radial-gradient(
      93.33% 93.33% at 50% 50%,
      #7ad4df 0%,
      #03577f 100%
    );
  margin: 1.2rem;
  &:active {
    animation: none;
  }
`;
export const ClickerImg = styled.img`
  width: 90%;
  padding: 0px 0px 30px 10px;
`;
