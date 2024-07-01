import * as S from "./Boost.styled";
import coinGold from "../../assets/coinGold.png"
type BoostProps = {
  onClick: () => void;
  boost: Boost;
};

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};
export const Boost = ({ boost, onClick }: BoostProps) => {
  return (
    <S.BoostContainer id={boost.id} onClick={onClick}>
      <S.Content>
        <S.Logo src={boost.image} alt="img" />
        <S.Profit>
          <S.Title>{boost.name}</S.Title>
          <S.ProfitInf>
            <S.ProfitText>Прибыль в час</S.ProfitText>
            <S.ProfitIcon>
              <S.CoinIcon src={coinGold} />
              <S.ProfitCount>+{boost.profit_per_hour} в час</S.ProfitCount>
            </S.ProfitIcon>
          </S.ProfitInf>
        </S.Profit>
      </S.Content>
      <S.LevelContainer>
        <S.Level>lvl {boost.level}</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src={coinGold} />
          <S.Cost>{boost.cost}</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.BoostContainer>
  );
};
