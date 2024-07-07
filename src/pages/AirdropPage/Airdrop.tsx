import * as S from "./Airdrop.styled";
import coinGold from "../../assets/coinGold.png"

export const AirdropPage = () => {
  return (
    <S.Container>
      <S.CoinImg src={coinGold} />
      <S.Title>Приготовьтесь, Airdrop уже скоро!</S.Title>
      <S.TaskList>
        <S.Task className="completed">Переговоры с биржами</S.Task>
        <S.Task className="completed">Переговоры с маркет-мейкерами</S.Task>
        <S.Task className="completed">Ключевые партнерства на подходе</S.Task>
        <S.Task>Список задач Airdrop</S.Task>
      </S.TaskList>
    </S.Container>
  );
};
