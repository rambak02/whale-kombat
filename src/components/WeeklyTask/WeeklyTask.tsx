import * as S from "./WeeklyTask.styled"

export const WeeklyTask = () => {
  return (
    <S.Container>
      <S.TaskContent>
        <img src="/public/calendar.png"/>
        <S.TaskInfo>
          <S.Title>Ежедневная награда</S.Title>
          <S.RewardBlock>
            <img src="/public/Vector.svg"/>
            <S.TaskReward>+ 1000000</S.TaskReward>
          </S.RewardBlock>
        </S.TaskInfo>
      </S.TaskContent>
      <img src="/public/ic_round-done.png"/>
    </S.Container>
  );
};
