import { Img, ImgProps } from "react-image";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;
export const UserBlock = styled.div`
  width: 82px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserImg = styled(Img)<ImgProps>`
width: 36px;
height: 36px;
radius: 18px;
`;
export const Username = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-left: 8px;
`;