import { BottomNav } from "../../components/BottomNav/BottomNav";
import { WeeklyTask } from "../../components/WeeklyTask/WeeklyTask";
import * as S from "./EarnPage.styled";

export const EarnPage = () => {
  return (
    <S.Container>
      <S.Title>Еженедельные задачи</S.Title>
      <WeeklyTask />
      <WeeklyTask />
      <WeeklyTask />
      <BottomNav />
    </S.Container>
  );
};
