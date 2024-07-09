import * as S from "./Card.styled";
import coinGold from "../../assets/coinGold.png";

type CardProps = {
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

export const Card = ({ onClick, boost }: CardProps) => {
  return (
    <S.Card onClick={onClick}>
      <S.CardImg src={boost.image ? boost.image : coinGold} />
      <div>
        <S.CardTitle>{boost.name}</S.CardTitle>
        <S.Description>Описание</S.Description>
        <S.Profit>
          <S.ProfitInf>
            <S.ProfitText>Прибыль в час</S.ProfitText>
            <S.ProfitIcon>
              <S.CoinIcon src={coinGold} />
              <S.ProfitCount>+{boost.profit_per_hour}</S.ProfitCount>
            </S.ProfitIcon>
          </S.ProfitInf>
        </S.Profit>
      </div>
      <S.LevelContainer>
        <S.Level>lvl {boost.level || 0}</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src={coinGold} />
          <S.Cost>{boost.cost}</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.Card>
  );
};
