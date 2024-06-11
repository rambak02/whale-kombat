import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
   transform: translateY(100%);
  }
  to {
   transform: translateY(0);
  }
`;

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
  align-items: flex-end;
`;

export const Text = styled.div`
  width: 100%;
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
