import { DailyRewardsProps } from "../../../../types/type";
import * as S from "./DayReward.styled";

export const DayReward = ({ day, reward, collected }: DailyRewardsProps) => {
  return (
    <S.Container $collected={collected}>
      <S.Day>День {day}</S.Day>
      <S.DayRewardImg src="../../..//Vector.svg" />
      <S.Reward>{reward}</S.Reward>
    </S.Container>
  );
};
