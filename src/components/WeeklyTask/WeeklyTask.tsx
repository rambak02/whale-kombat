import { WeeklyTaskProps } from "../../types/type";
import * as S from "./WeeklyTask.styled"

export const WeeklyTask = ({title, image, reward, onClick}: WeeklyTaskProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.TaskContent>
        <S.TaskImg src={image}/>
        <S.TaskInfo>
          <S.Title>{title}</S.Title>
          <S.RewardBlock>
            <img src="/public/Vector.svg"/>
            <S.TaskReward>+ {reward}</S.TaskReward>
          </S.RewardBlock>
        </S.TaskInfo>
      </S.TaskContent>
      <img src="/public/ic_round-done.png"/>
    </S.Container>
  );
};
