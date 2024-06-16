import { Img, ImgProps } from "react-image";
import styled from "styled-components";

export const FriendContainer = styled.div`
  height: 68px;
  padding: 8px 16px 8px 16px;
  border-radius: 10px;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FriendDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 10px;
`;

export const FriendNameContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`;
export const CoinIcon = styled(Img)<ImgProps>`
  width: 20px;
  height: 20px;
`;

export const FriendName = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: #ffffff;
`;
export const FriendScore = styled.div`
  display: flex;
  gap: 5px;
  display: flex;
  align-items: center;
`;
export const ScoreImg = styled(Img)<ImgProps>`
  width: 14px;
  height: 14px;
`;

export const Score = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: #d9d9d9;
`;

export const FriendImg = styled(Img)<ImgProps>``;

export const Friend = styled.li`
  display: flex;
  align-items: center;
`;

export const Top = styled.div`
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
`;
