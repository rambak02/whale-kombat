import styled from "styled-components";
import { DailyRewardsContainerType } from "../../../../interfaces/interface";
import { Img, ImgProps } from "react-image";

export const Container = styled.div<DailyRewardsContainerType>`
  background: ${(props) =>
    props.$collected
      ? "linear-gradient(360deg, #DE8300 0%, #FFEDD1 100%)"
      : "rgba(127, 127, 127, 1)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 2px;
  width: calc(25% - 20px);
  height: 98px;
  border-radius: 10px;
  color: ${(props) => (props.$collected ? "black" : "white")};
`;

export const Day = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
`;
export const DayRewardImg = styled(Img)<ImgProps>`
  width: 28px;
  height: 28px;
`;
export const Reward = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
`;
