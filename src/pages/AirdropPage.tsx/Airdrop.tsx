import { BottomNav } from "../../components/BottomNav/BottomNav";
import * as S from "./Airdrop.styled";

export const AirdropPage = () => {
  return (
    <S.Container>
      <S.CoinImg src="/public/coinairdrop.png" />
      <S.Title>Приготовьтесь, Airdrop уже скоро!</S.Title>
      <S.TaskList>
        <S.Task className="completed">Переговоры с биржами</S.Task>
        <S.Task className="completed">Переговоры с маркет-мейкерами</S.Task>
        <S.Task className="completed">Ключевые партнерства на подходе</S.Task>
        <S.Task>Список задач Airdrop</S.Task>
      </S.TaskList>
      <BottomNav />
    </S.Container>
  );
};
