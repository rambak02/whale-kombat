import { WeeklyTaskProps } from "../../types/type";
import * as S from "./WeeklyTask.styled";
import coinGold from "../../assets/coinGold.png";
import doneImg from "../../assets/ic_round-done.png"

export const WeeklyTask = ({
  title,
  image,
  reward,
  onClick,
  completed
}: WeeklyTaskProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.TaskContent>
        <S.TaskImg src={image} />
        <S.TaskInfo>
          <S.Title>{title}</S.Title>
          <S.RewardBlock>
            <S.CoinImg src={coinGold} />
            <S.TaskReward>+ {reward}</S.TaskReward>
          </S.RewardBlock>
        </S.TaskInfo>
      </S.TaskContent>
      {completed ? <S.DoneImg src={doneImg} /> : null}
    </S.Container>
  );
};
