import { Img, ImgProps } from "react-image";
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
  z-index: 3;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  // background: radial-gradient(
  //   170.59% 170.59% at 50% 50%,
  //   #ffedd1bf 0%,
  //   #de830005 100%
  // );
`;

export const ModalOverlay = styled.div`
  box-shadow: 0px -5px 180px 170px rgba(2, 49, 69, 0.9);
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 100%);
  animation: ${slideIn} 0.3s ease-in-out;
  min-width: 100%;
  min-height: 50vh;
  border-radius: 16px 16px 0px 0px;
  // border: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 92px 16px
`;

export const ModalButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0px;
  background: center;
  border: none;
`;

export const Subscribe = styled.button`
  width: 200px;
  height: 48px;
  padding: 12px 16px 12px 16px;
  border-radius: 20px;
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  border: none;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
export const RewardBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
export const RewardImg = styled(Img)<ImgProps>`
  width: 50px;
  height: 50px;
`;
export const Reward = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  margin-top: 12px
`;

export const Image = styled(Img)`
  // max-width: 70%;
`;

export const Text = styled.div`
  gap: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.03em;
  text-align: center;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
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
export const ButtonCheck = styled.button`
  color: black;
  margin: 16px;
  border: none;
  // background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  width: 100%;
  height: 64px;
  padding: 12px 16px 12px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
