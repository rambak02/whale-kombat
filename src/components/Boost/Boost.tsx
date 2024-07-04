import * as S from "./Boost.styled";
import coinGold from "../../assets/coinGold.png"
type BoostProps = {
  onClick: () => void;
  offer: Boost;
};

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};
export const Boost = ({ offer, onClick }: BoostProps) => {
  return (
    <S.BoostContainer id={offer.id} onClick={onClick}>
      <S.Content>
        <S.Logo src={offer.image} alt="img" />
        <S.Profit>
          <S.Title>{offer.name}</S.Title>
          <S.ProfitInf>
            <S.ProfitText>Прибыль в час</S.ProfitText>
            <S.ProfitIcon>
              <S.CoinIcon src={coinGold} />
              <S.ProfitCount>+{offer.profit_per_hour} в час</S.ProfitCount>
            </S.ProfitIcon>
          </S.ProfitInf>
        </S.Profit>
      </S.Content>
      <S.LevelContainer>
        <S.Level>lvl {offer.level}</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src={coinGold} />
          <S.Cost>{offer.cost}</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.BoostContainer>
  );
};
