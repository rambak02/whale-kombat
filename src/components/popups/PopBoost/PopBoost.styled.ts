import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
   transform: translateY(100%);
  }
  to {
   transform: translateY(0);
  }
`;

export const PopupBackground = styled.div`
    position: fixed;
    z-index: 2;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(170.59% 170.59% at 50% 50%, #ffedd1bf 0%, #de830005 100%);

`
 
export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 100%);
  animation: ${slideIn} 0.3s ease-in-out;
  min-width: 375px;
  height: 76vh;
  border-radius: 36px 36px 0px 0px;
  border: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background: center;
  border: none;
`;

export const Description = styled.div``;
export const DescriptionOffline = styled.div``;

export const Text = styled.div`
  gap: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
  line-height: 28.8px;
  letter-spacing: -0.03em;
  text-align: center;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
export const ButtonStartMine = styled.button`
  border: none;
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  width: 93%;
  height: 64px;
  padding: 12px 16px 12px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ButtonText = styled.div`
font-family: "Roboto";
font-size: 24px;
font-weight: 500;
line-height: 21px;
text-align: center;

`