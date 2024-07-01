import { DailyRewardsProps } from "../../../../types/type";
import * as S from "./DayReward.styled";
import coinGold from "../../../../assets/coinGold.png"

export const DayReward = ({ day, reward, collected }: DailyRewardsProps) => {
  return (
    <S.Container $collected={collected}>
      <S.Day>День {day}</S.Day>
      <S.DayRewardImg src={coinGold} />
      <S.Reward>{reward}</S.Reward>
    </S.Container>
  );
};
