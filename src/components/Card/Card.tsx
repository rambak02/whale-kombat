import * as S from "./Card.styled";

type CardProps = {
  onClick: () => void,
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
      <S.CardImg src="../../..//random.png" />
      <div>
        <S.CardTitle>{boost.name}</S.CardTitle>
        <S.Description>Описание</S.Description>
        <S.Profit>
          <S.ProfitInf>
            <S.ProfitText>Прибыль в час</S.ProfitText>
            <S.ProfitIcon>
              <S.CoinIcon src="../../..//Vector.svg" />
              <S.ProfitCount>+40</S.ProfitCount>
            </S.ProfitIcon>
          </S.ProfitInf>
        </S.Profit>
      </div>
      <S.LevelContainer>
        <S.Level>lvl 0</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src="../../..//Vector.svg" />
          <S.Cost>250</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.Card>
  );
};
