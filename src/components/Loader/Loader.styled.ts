import styled from "styled-components";
import loadingImg from "../../assets/loadingScreen.jpg";

export const LoadingScreen = styled.div`
  overflow-y: hidden;
  position: fixed;
  background: url(${loadingImg}) no-repeat center center;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  transition: all 0.9 ease-out;
`;
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 9px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;
export const ProgressBarFill = styled.div`
  height: 100%;
  background: #FF9800;
  transition: width 0.3s ease;
`;
